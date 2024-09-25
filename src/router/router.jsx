import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Gallery from "../Pages/Gallery";
import CardDetails from "../component/CardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/stock",
        element: <Gallery />,
      },
      {
        path: "/stock/details",
        element: <CardDetails />,
      },
    ],
  },
]);

export default router;
