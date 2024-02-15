import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import HomePage from "./routes/Homepage.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/beautiful-site",
    element: <App />,
    children: [
      {
        path: "/beautiful-site",
        element: <HomePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
