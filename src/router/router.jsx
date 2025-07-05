import {
  createBrowserRouter, 
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import App from "../App";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
     children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <Register />,
      },
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
]);
export default router
