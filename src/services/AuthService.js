import { baseUrl } from "../utils/constants";

export const register = (data) => {
  return fetch(`${baseUrl}/register`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export const login = (data) => {
  return fetch(`${baseUrl}/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
