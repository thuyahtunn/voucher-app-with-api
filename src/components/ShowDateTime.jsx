import React from "react";

const ShowDateTime = ({ timestamp, time }) => {
  const date = new Date(timestamp);
  const dateOption = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const dateShower = date.toLocaleDateString("en-GB", dateOption);
  const timeOption = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const timeShower = date.toLocaleTimeString("en-GB", timeOption);
  return (
    <td className="px-6 py-4 text-end">
      <p className=" text-sm">{dateShower}</p>
      {time && <p className=" text-sm">{timeShower}</p>}
    </td>
  );
};

export default ShowDateTime;
