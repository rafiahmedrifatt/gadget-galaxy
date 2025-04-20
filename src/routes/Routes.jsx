import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
]);
