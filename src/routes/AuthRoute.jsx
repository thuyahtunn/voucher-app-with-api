import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";

const AuthRoute = [
  {
    path: "/login",
    errorElement: <NotFoundPage />,
    element: <LoginPage />,
  },
  {
    path: "/register",
    errorElement: <NotFoundPage />,
    element: <RegisterPage />,
  },
];

export default AuthRoute;
