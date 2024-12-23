import { getCookie } from "react-use-cookie";
import { baseUrl } from "../utils/constants";

export const fetchProducts = (url) =>
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  }).then((res) => res.json());

export const createProduct = (data) =>
  fetch(`${baseUrl}/products`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });

export const removeProduct = (id) =>
  fetch(`${baseUrl}/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });

export const editProduct = (data, id) =>
  fetch(`${baseUrl}/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
