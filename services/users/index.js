import axios from "axios";
import { GET_USER } from "../endpoints";

export const getUser = (email) => {
  return fetch(GET_USER, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  }).then((response) => response.json());
};
