import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  LoginPage,
  ErrorPage,
  LandingPage,
  RegisterPage,
  DashboardPage,
} from "./pages";

import RootLayout from "./components/layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "dashboard", element: <DashboardPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
