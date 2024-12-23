import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import useSWR from "swr";
import VoucherTableRow from "./VoucherTableRow";
import { debounce } from "lodash";
import { useLocation, useSearchParams } from "react-router-dom";
import { baseUrl } from "../../../utils/constants";
import { fetchVouchers } from "../../../services/voucher";
import SkeletonLoaderRows from "../../../components/SkeletonLoaderRows";
import EmptyRow from "../../../components/EmptyRow";
import Pagination from "../../../components/Pagination";
import Sortable from "../../../components/Sortable";

const VoucherTable = () => {
  const { search } = useLocation();
  const [fetchUrl, setFetchUrl] = useState(`${baseUrl}/vouchers${search}`);
  const { data, isLoading, error } = useSWR(`${fetchUrl}`, fetchVouchers);
  const [params, setParams] = useSearchParams();

  const handleSearchInput = debounce((e) => {
    if (e.target.value) {
      setParams({ q: e.target.value });
      setFetchUrl(`${baseUrl}/vouchers?q=${e.target.value}`);
    } else {
      setParams({});
      setFetchUrl(`${baseUrl}/vouchers`);
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
    setFetchUrl(`${baseUrl}/vouchers?${sortParams}`);
  };
  const numArr = Array.from({ length: 5 }, (_, index) => index + 1);
  return (
    <>
      <div className="relative overflow-x-auto border  shadow-md rounded-lg">
        <div className=" w-full flex justify-start items-center py-3.5 px-5">
          <div className="relative w-1/3">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none pt-0.5">
              <HiSearch className=" w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              onChange={handleSearchInput}
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 font-medium text-gray-900 text-sm rounded-lg w-full ps-10 p-2.5  "
              placeholder="Search"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-700 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3 text-start">
                <Sortable
                  children={"#"}
                  handleSort={handleSort}
                  sort_by={`id`}
                ></Sortable>
              </th>
              <th scope="col" className="px-6 py-3 text-start">
                <Sortable
                  children={"VoucherID"}
                  handleSort={handleSort}
                  sort_by={`voucher_id`}
                ></Sortable>
              </th>
              <th scope="col" className="px-6 py-3 text-start">
                <Sortable
                  children={"Customer Name"}
                  handleSort={handleSort}
                  sort_by={`customer_name`}
                ></Sortable>
              </th>
              <th scope="col" className="px-6 py-3 text-start">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                CREATED AT
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                <Sortable
                  children={"Total"}
                  handleSort={handleSort}
                  sort_by={`total`}
                  align={"right"}
                ></Sortable>
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
              data?.data.map((voucher) => (
                <VoucherTableRow key={voucher.id} voucher={voucher} />
              ))
            ) : (
              <EmptyRow />
            )}
          </tbody>
        </table>
      </div>
      {data && (
        <Pagination
          links={data.links}
          meta={data.meta}
          updateFetchUrl={updateFetchUrl}
        />
      )}
    </>
  );
};

export default VoucherTable;
