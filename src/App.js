import React, { useState, useRef, useEffect } from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from "uuid";
import "./css/App.css";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(sessionStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(storedTodos);
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    sessionStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function handleClearComplete(e) {
    const newTodos = [...todos].filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <ToDoList todos={todos} toggle={toggleTodo}></ToDoList>
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleAddTodo}>ADD TODO</button>
      <button onClick={handleClearComplete}>CLEAR</button>
      <div>{todos.filter((todo) => !todo.complete).length} items left</div>
    </>
  );
}

export default App;
