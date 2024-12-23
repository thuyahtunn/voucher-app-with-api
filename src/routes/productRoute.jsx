import NotFoundPage from "../pages/NotFoundPage";
import ProductPage from "../features/product/pages/ProductPage";
import CreateProductPage from "../features/product/pages/CreateProductPage";
import EditProductPage from "../features/product/pages/EditProductPage";

const productRoute = [
  {
    path: "product",
    element: <ProductPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "product/create",
    element: <CreateProductPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "product/edit/:id",
    element: <EditProductPage />,
    errorElement: <NotFoundPage />,
  },
];

export default productRoute;
