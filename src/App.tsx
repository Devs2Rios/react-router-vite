import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/", element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "artists", element: <Artists /> },
      { path: "artists/:artistId", element: <Artist /> }, // :{myParam} is the identifier of the dynamic route
    ]
  },
]);

export default function App(): JSX.Element {
  return (
    <RouterProvider router={router} />
  );
}
