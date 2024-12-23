import React from "react";

const EmptyRow = () => {
  return (
    <tr className="bg-white border-b font-semibold text-stone-700">
      <td colSpan={6} className="px-6 py-4 text-center">
        There is no products...
      </td>
    </tr>
  );
};

export default EmptyRow;
