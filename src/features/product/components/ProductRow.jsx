import React, { useState } from "react";
import ShowDateTime from "../../../components/ShowDateTime";
import { Link, useLocation } from "react-router-dom";
import { HiPencil, HiTrash } from "react-icons/hi";
import { removeProduct } from "../../../services/product";
import toast from "react-hot-toast";
import { dotSpinner } from "ldrs";
import { useSWRConfig } from "swr";
import { baseUrl } from "../../../utils/constants";
const ProductRow = ({
  product: { id, product_name, price, created_at, updated_at },
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const location = useLocation();
  const { mutate } = useSWRConfig();
  const handleDeleteBtn = async () => {
    try {
      setIsDeleting(true);
      const response = await removeProduct(id);
      if (response.ok) {
        mutate(`${baseUrl}/products${location.search}`);

        toast.success("Product Deleted Successfully");
      } else {
        throw new Error("Error at Product Delete");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  dotSpinner.register();
  return (
    <tr className="bg-white border-b font-medium">
      <td className="px-6 py-4">{id}</td>
      <th scope="row" className="px-6 py-4 text-gray-700 whitespace-nowrap ">
        {product_name}
      </th>
      <td className="px-6 py-4 text-end">{price}</td>
      {/* Date and Time */}
      <ShowDateTime timestamp={created_at} time={true} />
      <ShowDateTime timestamp={updated_at} time={true} />

      <td className="px-6 py-4  text-end ">
        <div className=" flex justify-end items-center space-x-1">
          <Link
            to={`/dashboard/product/edit/${id}`}
            className=" size-9 flex justify-center items-center border border-stone-300 shadow hover:bg-gray-100 duration-200"
          >
            <HiPencil className=" size-5" />
          </Link>
          <button
            onClick={handleDeleteBtn}
            className="size-9 flex justify-center items-center border border-stone-300 hover:border-red-300 shadow hover:bg-red-100 duration-200"
          >
            {!isDeleting ? (
              <HiTrash className=" size-5 text-red-500" />
            ) : (
              <l-dot-spinner size="20" speed="0.8" color="red"></l-dot-spinner>
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
