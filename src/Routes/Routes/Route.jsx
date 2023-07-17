import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../../Pages/NotFoundPage";
import MainLayout from "../../layout/MainLayout";
import Register from "../../Pages/Register";
import LogIn from "../../Pages/LogIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
