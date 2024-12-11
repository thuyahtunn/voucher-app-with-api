import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { register as registerAccount } from "../../../services/AuthService";

const RegisterForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const nav = useNavigate();

  const handleRegister = async (data) => {
    const res = await registerAccount(data);
    const json = await res.json();
    if (res.status === 200) {
      nav("/login");
    } else {
      console.log("error at register");
    }
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="space-y-4 md:space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="your name"
        />
        {errors.name && errors.name.type === "required" && (
          <p className="mt-1 text-xs text-red-500">Name is Required</p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="text"
          id="email"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          {...register("password", { required: true })}
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.password && errors.password.type === "required" && (
          <p className="mt-1 text-xs text-red-500">Password is Required</p>
        )}
      </div>
      <div>
        <label
          htmlFor="password_confirmation"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Confirm password
        </label>
        <input
          type="password"
          id="password_confirmation"
          {...register("password_confirmation", { required: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.password_confirmation &&
          errors.password_confirmation.type === "required" && (
            <p className="mt-1 text-xs text-red-500">
              Password Confirmation is Required
            </p>
          )}
      </div>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor="terms"
            className="font-light text-gray-500 dark:text-gray-300"
          >
            I accept the{" "}
            <a
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              href="#"
            >
              Terms and Conditions
            </a>
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create an account
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          to={"/login"}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Login here
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
