import React from "react";

export default function ToDo({ todo, toggle }) {
  function handleCheckTodo() {
    toggle(todo.id);
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={handleCheckTodo}
      ></input>
      <label>{todo.name}</label>
    </div>
  );
}
