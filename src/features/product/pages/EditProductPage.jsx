import React from "react";
import ContainerSection from "../../../components/ContainerSection";
import Breadcrumb from "../../../components/Breadcrumb";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { baseUrl } from "../../../utils/constants";
import { editProduct, fetchProducts } from "../../../services/product";
import { useNavigate, useParams } from "react-router-dom";
import { bouncy } from "ldrs";
import toast from "react-hot-toast";
import ProductEditLoader from "../components/ProductEditLoader";

const EditProductPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const { id } = useParams();
  const nav = useNavigate();

  const { data, isLoading, error } = useSWR(
    `${baseUrl}/products/${id}`,
    fetchProducts
  );
  const handleEditProductForm = async (formData) => {
    try {
      const { product_name, price } = formData;
      const productData = { product_name, price };

      const response = await editProduct(productData, id);

      if (response.ok) {
        toast.success("Product Updated Successfully");
        nav("/dashboard/product");
      } else {
        throw new Error("Error at Product Edit");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      reset();
    }
  };

  bouncy.register();

  return (
    <>
      {isLoading ? (
        <ProductEditLoader />
      ) : (
        <ContainerSection>
          <Breadcrumb
            currentPageTitle={"Edit"}
            links={[{ pathName: "/dashboard/product", pageTitle: "Product" }]}
          />
          <div className=" flex flex-col gap-3  p-5">
            <h2 className=" font-bold text-2xl text-center">Edit Product</h2>
            <p className=" font-medium text-stone-500 w-2/3 text-center mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam eum ipsum enim maiores. Mollitia aut quae alias ullam
              quasi fuga!
            </p>
            <form
              onSubmit={handleSubmit(handleEditProductForm)}
              className=" flex flex-col  gap-3.5 w-2/3 mx-auto font-medium py-3"
            >
              <div className=" flex flex-col  gap-2 w-1/2 mx-auto">
                <label
                  htmlFor="product_name"
                  className={`text-sm  font-semibold  text-stone-700`}
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="product_name"
                  defaultValue={data?.data.product_name}
                  {...register("product_name", { required: true })}
                  className={`border focus-visible:outline-none ring-1 px-3 py-1.5 border-stone-500 ring-stone-500 focus:border-stone-500 focus:ring-stone-500 rounded-lg text-sm   w-full bg-stone-50 `}
                />
                {errors.product_name?.type === "required" && (
                  <p className=" text-xs text-red-500">
                    Product Name is Required
                  </p>
                )}
              </div>

              <div className=" flex flex-col  gap-2 w-1/2 mx-auto">
                <label
                  htmlFor="product_price"
                  className={`text-sm  font-semibold text-stone-700`}
                >
                  Product Price
                </label>
                <input
                  type="number"
                  defaultValue={data?.data.price}
                  {...register("price", { required: true })}
                  id="product_price"
                  className={`border focus-visible:outline-none border-stone-500 ring-stone-500 focus:border-stone-500 focus:ring-stone-500 ring-1 px-3 py-1.5 rounded-lg text-sm   w-full bg-stone-50 `}
                />
                {errors.price?.type === "required" && (
                  <p className=" text-xs text-red-500">
                    Product Price is Required
                  </p>
                )}
              </div>

              <div className=" flex items-center w-1/2 mx-auto gap-1.5">
                <input
                  type="checkbox"
                  id="all_correct"
                  {...register("all_correct", { required: true })}
                  className=" accent-stone-700 size-4"
                />
                <label
                  htmlFor="all_correct"
                  className="text-sm text-stone-700 font-semibold select-none"
                >
                  {!errors.all_correct && "Make Sure"}
                </label>
                {errors.all_correct?.type === "required" && (
                  <label
                    htmlFor="all_correct"
                    className=" text-xs text-red-500"
                  >
                    Required
                  </label>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className=" border flex justify-center items-center gap-3 border-stone-800 hover:bg-stone-700 active:bg-stone-600 duration-200 bg-stone-800 text-stone-50 rounded-full py-1.5 w-1/2 mx-auto  mt-2 disabled:opacity-75"
              >
                Update Product
                {isSubmitting && (
                  <l-bouncy size="20" speed="1.75" color="white"></l-bouncy>
                )}
              </button>
            </form>
          </div>
        </ContainerSection>
      )}
    </>
  );
};

export default EditProductPage;
