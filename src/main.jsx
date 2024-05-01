import React from "react";
import ReactDOM from "react-dom/client";
import {createHashRouter,RouterProvider} from "react-router-dom";
import App from "./App.jsx";
import Home from "./views/Home.jsx";
import Projects from "./views/Projects.jsx";
import About from "./views/About.jsx";
import "./index.css";
import ErrorPage from "./views/ErrorPage.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
