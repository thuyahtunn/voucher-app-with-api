import DashboardLayout from "../features/dashboard/components/DashboardLayout";
import userProfileRoute from "./userProfileRoute";
import productRoute from "./productRoute";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage";
import saleRoute from "./saleRoute";
import voucherRoute from "./voucherRoute";

const DashboardRoute = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      ...userProfileRoute,
      ...productRoute,
      ...saleRoute,
      ...voucherRoute,
    ],
  },
];
export default DashboardRoute;
