import React from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

const Sortable = ({ children, handleSort, sort_by, align }) => {
  return (
    <span
      className={`flex items-center gap-1 ${
        align === "right" ? "justify-end" : "justify-start"
      }`}
    >
      <span className=" flex flex-col">
        <button
          className=" hover:bg-stone-300"
          onClick={handleSort.bind(null, {
            sort_by: sort_by,
            sort_direction: "desc",
          })}
        >
          <LuChevronUp />
        </button>
        <button
          className=" hover:bg-stone-300"
          onClick={handleSort.bind(null, {
            sort_by: sort_by,
            sort_direction: "asc",
          })}
        >
          <LuChevronDown />
        </button>
      </span>
      <span>{children}</span>
    </span>
  );
};

export default Sortable;
