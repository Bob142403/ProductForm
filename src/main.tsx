import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SignIn } from "./components/sign-in/sign-in.component.tsx";
import { SignUp } from "./components/sign-up/sign-up.component.tsx";
import { HomePage } from "./pages/home-page/home-page.component.tsx";
import { BreakfastGroup } from "./components/breakfast-group/breakfast-group.component.tsx";
import { LunchGroup } from "./components/lunch-group/lunch-group.component.tsx";
import { DinnerGroup } from "./components/dinner-group/dinner-group.component.tsx";
import { AuthCheck } from "./components/auth-check/auth-check.component.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthCheck children={<BreakfastGroup />} />,
  },
  {
    path: "/lunch",
    element: <AuthCheck children={<LunchGroup />} />,
  },
  { path: "/dinner", element: <AuthCheck children={<DinnerGroup />} /> },
  {
    path: "/sign-in",
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
