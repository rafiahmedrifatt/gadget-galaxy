import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
import Favorites from "../pages/Favorites";
import Errorpage from "../pages/Errorpage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/favorites",
        Component: Favorites,
      },
      {
        path: "/phoneDetails",
        Component: PhoneDetails,
      },
      {
        path: "/",
        Component: Home,
      },
    ],
  },
]);
