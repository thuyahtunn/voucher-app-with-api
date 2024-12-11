import { lazy, Suspense } from "react";
import LoadingPage from "../pages/LoadingPage";

const UserProfilePage = lazy(() =>
  import("../features/user-profile/pages/UserProfilePage")
);
const ChangePasswordPage = lazy(() =>
  import("../features/user-profile/pages/ChangePasswordPage")
);
const ChangeNamePage = lazy(() =>
  import("../features/user-profile/pages/ChangeNamePage")
);
const ChangeProfileImagePage = lazy(() =>
  import("../features/user-profile/pages/ChangeProfileImagePage")
);

const userProfileRoute = [
  {
    path: "user-profile",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <UserProfilePage />
      </Suspense>
    ),
    children: [
      {
        path: "change-profile-image",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ChangeProfileImagePage />
          </Suspense>
        ),
      },
      {
        path: "change-name",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ChangeNamePage />
          </Suspense>
        ),
      },
      {
        path: "change-password",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ChangePasswordPage />
          </Suspense>
        ),
      },
    ],
  },
];

export default userProfileRoute;
