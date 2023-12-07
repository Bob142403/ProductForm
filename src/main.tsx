import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SignIn } from "./components/sign-in/sign-in.component.tsx";
import { SignUp } from "./components/sign-up/sign-up.component.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
