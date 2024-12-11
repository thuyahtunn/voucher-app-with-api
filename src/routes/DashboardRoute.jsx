import { lazy, Suspense } from "react";
import LoadingPage from "../pages/LoadingPage";

import DashboardLayout from "../features/dashboard/components/DashboardLayout";
import userProfileRoute from "./userProfileRoute";
import productRoute from "./productRoute";
const DashboardPage = lazy(() =>
  import("../features/dashboard/pages/DashboardPage")
);

const DashboardRoute = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <DashboardPage />
          </Suspense>
        ),
      },
      ...userProfileRoute,
      ...productRoute,
    ],
  },
];
export default DashboardRoute;
