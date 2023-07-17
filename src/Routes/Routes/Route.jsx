import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../../Pages/NotFoundPage";
import MainLayout from "../../layout/MainLayout";
import Register from "../../Pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
