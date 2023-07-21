import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

// First we need to configure our routes.
// We use createBrowserRouter() to create a router with a list of routes.
const router = createBrowserRouter([
  {
    path: "/", element: <Home />,
  },
]);

// And with the RouterProvider we inject our routes to our App
export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
