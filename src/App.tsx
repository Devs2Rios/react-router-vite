import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/", element: <Layout />,
    children: [
      {
        path: "/", element: <Home />,
      },
      {
        path: "/artists", element: <Artists />,
      },
      {
        path: "*", element: <NotFound />,
      },
    ]
  },
]);

export default function App(): JSX.Element {
  return (
    <RouterProvider router={router} />
  );
}
