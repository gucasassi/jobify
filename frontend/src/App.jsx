import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Dashboard, Home, Login, Register } from "./pages";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
