import { getCookie } from "react-use-cookie";
import { baseUrl } from "../utils/constants";

export const fetchVouchers = (url) =>
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  }).then((res) => res.json());

export const destroyVoucher = (id) => {
  return fetch(`${baseUrl}/vouchers/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};
