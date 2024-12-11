import { Suspense } from "react";
import LoadingPage from "../pages/LoadingPage";
import ProductPage from "../features/product/pages/ProductPage";

export const LazyLoad = ({ children }) => (
  <Suspense fallback={<LoadingPage />}>{children}</Suspense>
);

const productRoute = [
  {
    path: "product",
    element: (
      <LazyLoad>
        <ProductPage />
      </LazyLoad>
    ),
  },
];

export default productRoute;
