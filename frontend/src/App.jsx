import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  LoginPage,
  ErrorPage,
  LandingPage,
  RegisterPage,
  AddJobPage,
  StatsPage,
  AllJobsPage,
  ProfilePage,
  AdminPage,
} from "./pages";

import RootLayout from "./components/layouts/RootLayout";
import DashboardLayout from "./components/layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AddJobPage /> },
      { path: "stats", element: <StatsPage /> },
      { path: "all-jobs", element: <AllJobsPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "admin", element: <AdminPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
