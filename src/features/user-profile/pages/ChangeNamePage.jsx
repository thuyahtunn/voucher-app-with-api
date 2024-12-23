import React from "react";
import ContainerSection from "../../../components/ContainerSection";
import Breadcrumb from "../../../components/Breadcrumb";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import reactUseCookie from "react-use-cookie";
import useUserDataStore from "../../../stores/useUserDataStore";
import { baseUrl } from "../../../utils/constants";
import { tailspin } from "ldrs";

const ChangeNamePage = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const nav = useNavigate();
  const [tokenCookie] = reactUseCookie("token");

  const [userCookie, setUserCookie] = reactUseCookie("user");
  const { setUserStore } = useUserDataStore();
  const handleChangeName = async (data) => {
    const res = await fetch(`${baseUrl}/user-profile/change-name`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenCookie}`,
      },
    });
    const json = await res.json();

    if (res.ok) {
      setUserCookie(JSON.stringify(json.user));
      setUserStore(json.user);
      nav("/dashboard/user-profile");
    } else {
      console.log("something wrong");
    }
    reset();
  };
  tailspin.register();

  return (
    <ContainerSection>
      <Breadcrumb
        currentPageTitle={"Change Name"}
        links={[
          { pageTitle: "User profile", pathName: "/dashboard/user-profile" },
        ]}
      />
      <div className=" border p-8 shadow-sm flex justify-center items-start">
        <form
          onSubmit={handleSubmit(handleChangeName)}
          className=" flex gap-1 w-3/5  items-start"
        >
          <div className="flex-grow">
            <input
              {...register("name", { required: true })}
              type="text"
              className=" px-4 py-2 border-2 bg-stone-50 border-stone-500 text-sm font-semibold w-full rounded"
            />
            {errors.name?.type === "required" && (
              <p className=" text-xs mt-2 text-red-500">Name is Required</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className=" border-2 flex justify-center items-center border-blue-500 w-24 text-stone-50 bg-blue-500 rounded py-2 text-sm font-semibold"
          >
            {isSubmitting ? (
              <l-tailspin
                size="21"
                stroke="3"
                speed="0.9"
                color="white"
              ></l-tailspin>
            ) : (
              "Update"
            )}
          </button>
        </form>
      </div>
    </ContainerSection>
  );
};

export default ChangeNamePage;
