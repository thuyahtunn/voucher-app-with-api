import React from "react";
import ContainerSection from "../../../components/ContainerSection";
import Breadcrumb from "../../../components/Breadcrumb";
import { useForm } from "react-hook-form";
import { tailspin } from "ldrs";
import toast from "react-hot-toast";
import reactUseCookie, { removeCookie } from "react-use-cookie";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../utils/constants";

const ChangePasswordPage = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [tokenCookie] = reactUseCookie("token");
  const nav = useNavigate();
  const handleChangePasswordBtn = async (data) => {
    const res = await fetch(`${baseUrl}/user-profile/change-password`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${tokenCookie}`,
      },
    });
    const json = await res.json();
    if (res.ok) {
      removeCookie("token");
      removeCookie("user");
      toast.success(json.message);
      nav("/login");
    } else {
      toast.error(json.message);
      console.log(json.message);
    }
    reset();
  };
  tailspin.register();

  return (
    <ContainerSection>
      <Breadcrumb
        currentPageTitle={"Change Password"}
        links={[
          { pathName: "/dashboard/user-profile", pageTitle: "User Profile" },
        ]}
      />
      <div className=" border p-8 shadow-sm flex justify-center items-start">
        <form
          onSubmit={handleSubmit(handleChangePasswordBtn)}
          className=" w-3/5 flex flex-col  space-y-3.5"
        >
          <div className="flex-grow flex flex-col gap-2 ">
            <label htmlFor="old_password" className="text-sm font-medium ">
              Old Password
            </label>
            <input
              type="password"
              {...register("old_password", { required: true, minLength: 8 })}
              id="old_password"
              className=" px-3 py-2 border-2 bg-stone-50 border-stone-500 text-sm font-semibold rounded flex-grow"
            />
            {errors.old_password?.type === "required" && (
              <p className=" text-xs text-red-500">Old Password is Required</p>
            )}
            {errors.old_password?.type === "minLength" && (
              <p className=" text-xs text-red-500">
                Password must be 8 characters at least
              </p>
            )}
          </div>
          <div className="flex-grow flex flex-col gap-2 ">
            <label htmlFor="new_password" className="text-sm font-medium ">
              New Password
            </label>
            <input
              type="password"
              {...register("new_password", { required: true, minLength: 8 })}
              id="new_password"
              className=" px-3 py-2 border-2 bg-stone-50 border-stone-500 text-sm font-semibold rounded flex-grow"
            />
            {errors.new_password?.type === "required" && (
              <p className=" text-xs text-red-500">New Password is Required</p>
            )}
            {errors.new_password?.type === "minLength" && (
              <p className=" text-xs text-red-500">
                Password must be 8 characters at least
              </p>
            )}
          </div>
          <div className="flex-grow flex flex-col gap-2 ">
            <label
              htmlFor="new_password_confirmation"
              className="text-sm font-medium "
            >
              New Password Confirmation
            </label>
            <input
              type="password"
              {...register("new_password_confirmation", {
                required: true,
                minLength: 8,
              })}
              id="new_password_confirmation"
              className=" px-3 py-2 border-2 bg-stone-50 border-stone-500 text-sm font-semibold rounded flex-grow"
            />
            {errors.new_password_confirmation?.type === "required" && (
              <p className=" text-xs text-red-500">
                New Password Confirmation is Required
              </p>
            )}
            {errors.new_password_confirmation?.type === "minLength" && (
              <p className=" text-xs text-red-500">
                Password must be 8 characters at least
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className=" border-2 border-blue-500  flex justify-center items-center gap-3 self-center text-stone-50 bg-blue-500 w-full rounded py-2 text-sm font-semibold disabled:opacity-80"
          >
            Change Password{" "}
            {isSubmitting && (
              <l-tailspin
                size="18"
                stroke="3"
                speed="0.9"
                color="white"
              ></l-tailspin>
            )}
          </button>
        </form>
      </div>
    </ContainerSection>
  );
};

export default ChangePasswordPage;
