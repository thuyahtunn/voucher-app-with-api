import VoucherDetailPage from "../features/voucher/pages/VoucherDetailPage";
import VoucherPage from "../features/voucher/pages/VoucherPage";

const voucherRoute = [
  {
    path: "voucher",
    element: <VoucherPage />,
  },
  {
    path: "voucher/detail/:id",
    element: <VoucherDetailPage />,
  },
];
export default voucherRoute;
