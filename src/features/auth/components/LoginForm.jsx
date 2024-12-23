import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/AuthService";
import reactUseCookie from "react-use-cookie";
import toast from "react-hot-toast";
import { tailspin } from "ldrs";

// Default values shown

const LoginForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const nav = useNavigate();
  const [tokenCookie, setTokenCookie] = reactUseCookie("token");
  const [userCookie, setUserCookie] = reactUseCookie("user");

  const handleLogin = async (data) => {
    const res = await login(data);
    const json = await res.json();
    if (res.status === 200) {
      setTokenCookie(json.token);
      setUserCookie(JSON.stringify(json.user));
      nav("/dashboard");
    } else {
      toast.error("error at login");
      console.log("error at login");
    }
    reset();
  };
  tailspin.register();

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="space-y-4 md:space-y-6"
      noValidate
    >
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
          placeholder="name@company.com"
        />
        {errors.email && errors.email.type === "required" && (
          <p className="mt-1 text-xs text-red-500">Email is Required</p>
        )}

        {errors.email && errors.email.type === "pattern" && (
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
        />
        {errors.password && errors.password.type === "required" && (
          <p className="mt-1 text-xs text-red-500">Password is Required</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="remember" className="text-gray-500 ">
              Remember me
            </label>
          </div>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline "
        >
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full text-white flex justify-center items-center gap-3 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center  disabled:opacity-85`}
      >
        Sign in{" "}
        {isSubmitting && (
          <l-tailspin
            size="18"
            stroke="3"
            speed="0.9"
            color="white"
          ></l-tailspin>
        )}
      </button>
      <p className="text-sm font-light text-gray-500 ">
        Don’t have an account yet?{" "}
        <Link
          to={"/register"}
          className="font-medium text-blue-600 hover:underline "
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
