import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./components/layouts/RootLayout";
import { Dashboard, Landing, Login, Register } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
