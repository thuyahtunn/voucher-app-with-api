import NotFoundPage from "../pages/NotFoundPage";
import ChangeProfileImagePage from "../features/user-profile/pages/ChangeProfileImagePage";
import ChangeNamePage from "../features/user-profile/pages/ChangeNamePage";
import ChangePasswordPage from "../features/user-profile/pages/ChangePasswordPage";
import UserProfilePage from "../features/user-profile/pages/UserProfilePage";

const userProfileRoute = [
  {
    path: "user-profile",
    errorElement: <NotFoundPage />,
    element: <UserProfilePage />,
  },
  {
    path: "user-profile/change-profile-image",
    errorElement: <NotFoundPage />,
    element: <ChangeProfileImagePage />,
  },
  {
    path: "user-profile/change-name",
    errorElement: <NotFoundPage />,
    element: <ChangeNamePage />,
  },
  {
    path: "user-profile/change-password",
    errorElement: <NotFoundPage />,
    element: <ChangePasswordPage />,
  },
];

export default userProfileRoute;
