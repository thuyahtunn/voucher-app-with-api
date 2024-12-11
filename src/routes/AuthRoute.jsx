import { lazy, Suspense } from "react";
import LoadingPage from "../pages/LoadingPage";

const LoginPage = lazy(() => import("../features/auth/pages/LoginPage"));
const RegisterPage = lazy(() => import("../features/auth/pages/RegisterPage"));

const AuthRoute = [
  {
    path: "/login",

    element: (
      <Suspense fallback={<LoadingPage />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <RegisterPage />
      </Suspense>
    ),
  },
];

export default AuthRoute;
