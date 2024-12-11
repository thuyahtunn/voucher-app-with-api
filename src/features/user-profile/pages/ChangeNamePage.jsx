import React from "react";
import ContainerSection from "../../../components/ContainerSection";
import Breadcrumb from "../../../components/Breadcrumb";
import { useForm } from "react-hook-form";

const ChangeNamePage = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <ContainerSection>
      <Breadcrumb
        currentPageTitle={"Change Name"}
        links={[
          { pageTitle: "User profile", pathName: "/dashboard/user-profile" },
        ]}
      />
      <div className=" border p-8 shadow-sm flex justify-center items-start">
        <form className=" flex gap-1 w-3/5  justify-between ">
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
            className=" border-2 border-blue-500 px-5 text-stone-50 bg-blue-500 rounded py-2 text-sm font-semibold"
          >
            Update
          </button>
        </form>
      </div>
    </ContainerSection>
  );
};

export default ChangeNamePage;
