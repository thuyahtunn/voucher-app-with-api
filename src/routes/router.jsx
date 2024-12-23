import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../features/public/components/publicLayout";
import publicRoute from "./publicRoute";
import AuthRoute from "./AuthRoute";
import DashboardRoute from "./DashboardRoute";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
    element: <PublicLayout />,
    children: [...publicRoute],
  },
  ...AuthRoute,
  ...DashboardRoute,
]);

export default router;
