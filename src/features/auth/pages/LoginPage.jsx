import React from "react";
import LoginForm from "../components/LoginForm";
import { Toaster } from "react-hot-toast";
import reactUseCookie from "react-use-cookie";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const [tokenCookie] = reactUseCookie("token");
  if (tokenCookie) {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </a>
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign in to your account
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
    </section>
  );
};

export default LoginPage;
