import { createBrowserRouter } from "react-router-dom";
import Landing_Layout from "@/layout/public_view/Landing";
import HomePage from "./pages/landing/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing_Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
