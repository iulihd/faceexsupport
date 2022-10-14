import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ManagePage from "./routes/ManagePage";
import SupportPage from "./routes/SupportPage";
import ContactPage from "./routes/ContactPage";
import LoginPage from "./routes/LoginPage";
import RegisterPage from "./routes/RegisterPage";
import HomePage from "./routes/HomePage";
import RootPage from "./routes/RootPage";
import ErrorPage from "./routes/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomePage /> },
          {
            path: "contact",
            element: <ContactPage />,
          },
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "register",
            element: <RegisterPage />,
          },
          {
            path: "support",
            element: <SupportPage />,
          },
          {
            path: "manage",
            element: <ManagePage />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>
);
