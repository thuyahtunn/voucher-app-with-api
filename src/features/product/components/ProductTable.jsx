import React, { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import SkeletonLoaderRows from "../../../components/SkeletonLoaderRows";
import ProductRow from "./ProductRow";
import Pagination from "../../../components/Pagination";
import useSWR from "swr";
import { fetchProducts } from "../../../services/product";
import { HiPlus, HiSearch } from "react-icons/hi";
import EmptyRow from "../../../components/EmptyRow";
import { baseUrl } from "../../../utils/constants";
import { debounce } from "lodash";
import Sortable from "../../../components/Sortable";

const ProductTable = () => {
  const { search } = useLocation();
  const [fetchUrl, setFetchUrl] = useState(`${baseUrl}/products${search}`);
  const { data, isLoading, error } = useSWR(`${fetchUrl}`, fetchProducts);
  const [params, setParams] = useSearchParams();
  const handleSearchInput = debounce((e) => {
    if (e.target.value) {
      setParams({ q: e.target.value });
      setFetchUrl(`${baseUrl}/products?q=${e.target.value}`);
    } else {
      setParams({});
      setFetchUrl(`${baseUrl}/products`);
    }
  }, 500);
  const updateFetchUrl = (url) => {
    const currentUrl = new URL(url);
    const newSearchParams = new URLSearchParams(currentUrl.search);
    const paramObject = Object.fromEntries(newSearchParams);
    setParams(paramObject);
    setFetchUrl(url);
  };
  const handleSort = (sortData) => {
    const sortParams = new URLSearchParams(sortData).toString();
    setParams(sortData);
    setFetchUrl(`${import.meta.env.VITE_API_URL}/products?${sortParams}`);
  };
  const numArr = Array.from({ length: 5 }, (_, index) => index + 1);
  return (
    <div className=" p-5 border rounded-xl shadow">
      <div className=" w-full flex justify-between items-center mb-3">
        <div className="relative w-1/3">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none pt-0.5">
            <HiSearch className=" w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            onChange={handleSearchInput}
            className="bg-gray-50 border border-gray-300 font-medium text-gray-900 text-sm rounded-lg w-full ps-10 p-2.5  "
            placeholder="Search"
          />
        </div>
        <Link
          to={"/dashboard/product/create"}
          className=" flex justify-center items-center py-2.5 px-6 bg-neutral-600 text-gray-50 text-sm rounded-lg font-medium  gap-2 border border-stone-700"
        >
          Add New Product
          <HiPlus className=" font-bold size-4" />
        </Link>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-700 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                <Sortable
                  children={"#"}
                  handleSort={handleSort}
                  sort_by={`id`}
                ></Sortable>
              </th>
              <th scope="col" className="px-6 py-3">
                <Sortable
                  children={"Product Name"}
                  handleSort={handleSort}
                  sort_by={`product_name`}
                ></Sortable>
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                <Sortable
                  children={"Price (MMK)"}
                  handleSort={handleSort}
                  sort_by={`price`}
                  align={"right"}
                ></Sortable>
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Created AT
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Updated AT
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              numArr.map((loader, i) => <SkeletonLoaderRows key={i} />)
            ) : data?.data.length > 0 ? (
              data?.data.map((product, index) => (
                <ProductRow key={product.id} product={product} index={index} />
              ))
            ) : (
              <EmptyRow />
            )}
          </tbody>
        </table>
      </div>
      {!isLoading && (
        <Pagination
          links={data?.links}
          meta={data?.meta}
          updateFetchUrl={updateFetchUrl}
        />
      )}
    </div>
  );
};

export default ProductTable;
