import  apiUrl  from "../../config/config";
import { defaultHeaders } from "./api";

const url = `${apiUrl}/v1/plugs`;

const getPlugProducts = (id) => (
  fetch(`${url}/${id}/products`, {
    method: 'GET',
    headers: defaultHeaders,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success && data.payload) {
        return data.payload;
      }
    })
);

const showPLug = (id) => (
  fetch(`${url}/${id}`, {
    method: 'GET',
    headers: defaultHeaders,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success && data.payload) {
        return data.payload;
      }
    })
);

export {
  getPlugProducts,
  showPLug,
};