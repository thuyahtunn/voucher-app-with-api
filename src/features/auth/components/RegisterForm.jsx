import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { register as registerAccount } from "../../../services/AuthService";
import { tailspin } from "ldrs";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const nav = useNavigate();

  const handleRegister = async (data) => {
    const res = await registerAccount(data);
    const json = await res.json();
    if (res.status === 200) {
      nav("/login");
    } else {
      toast.error("Error at Register");
      console.log("error at register");
    }
    reset();
  };
  tailspin.register();

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="space-y-4 md:space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
          placeholder="your name"
        />
        {errors.name && errors.name.type === "required" && (
          <p className="mt-1 text-xs text-red-500">Name is Required</p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
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
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
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
          {...register("password", { required: true })}
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
        />
        {errors.password && errors.password.type === "required" && (
          <p className="mt-1 text-xs text-red-500">Password is Required</p>
        )}
      </div>
      <div>
        <label
          htmlFor="password_confirmation"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Confirm password
        </label>
        <input
          type="password"
          id="password_confirmation"
          {...register("password_confirmation", { required: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
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
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="terms" className="font-light text-gray-500 ">
            I accept the{" "}
            <a className="font-medium text-blue-600 hover:underline " href="#">
              Terms and Conditions
            </a>
          </label>
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full text-white flex justify-center items-center gap-3 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center  disabled:opacity-85"
      >
        Create an account{" "}
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
        Already have an account?{" "}
        <Link
          to={"/login"}
          className="font-medium text-blue-600 hover:underline "
        >
          Login here
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
