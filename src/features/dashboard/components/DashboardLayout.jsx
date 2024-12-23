import React, { useEffect } from "react";
import Header from "./Header";
import { Navigate, Outlet } from "react-router-dom";
import reactUseCookie from "react-use-cookie";
import useUserDataStore from "../../../stores/useUserDataStore";
import { Toaster } from "react-hot-toast";

const DashboardLayout = () => {
  const [tokenCookie] = reactUseCookie("token");
  const [userCookie] = reactUseCookie("user");
  const { userStore, setUserStore } = useUserDataStore();
  if (!tokenCookie) {
    return <Navigate to={"/login"} />;
  }
  useEffect(() => {
    if (tokenCookie) {
      const userObj = JSON.parse(userCookie);
      setUserStore(userObj);
    }
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Toaster position="top-right" />
    </>
  );
};

export default DashboardLayout;
