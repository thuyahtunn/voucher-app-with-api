import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../features/public/components/publicLayout";
import publicRoute from "./publicRoute";
import AuthRoute from "./AuthRoute";
import DashboardRoute from "./DashboardRoute";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [...publicRoute],
  },
  ...AuthRoute,
  ...DashboardRoute,
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
