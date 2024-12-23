import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Pagination = ({
  links: { prev, next },
  meta: { from, to, total, links },
  updateFetchUrl,
}) => {
  // const handlePrevBtn = () => {
  //   updateFetchUrl(prev);
  // };
  // const handleNextBtn = () => {
  //   updateFetchUrl(next);
  // };
  return (
    <div className="flex justify-between px-6 pt-2 pb-0 items-center font-medium">
      <span className="text-sm text-gray-700 ">
        Showing <span className="font-semibold text-gray-900 ">{from}</span> to{" "}
        <span className="font-semibold text-gray-900 ">{to}</span> of{" "}
        <span className="font-semibold text-gray-900 ">{total}</span> Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0 gap-1">
        {links.map((link) => {
          return (
            <button
              key={link.label}
              disabled={!link.url}
              onClick={() => updateFetchUrl(link.url)}
              className={`${
                link.active
                  ? " bg-neutral-600 text-neutral-50"
                  : " bg-neutral-50 text-neutral-700"
              }
                flex items-center justify-center size-10 text-sm    border border-neutral-600   disabled:opacity-50 disabled:pointer-events-none rounded-sm`}
            >
              {link.label === "&laquo; Previous" ? (
                <HiArrowLeft />
              ) : link.label === "Next &raquo;" ? (
                <HiArrowRight />
              ) : (
                link.label
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
