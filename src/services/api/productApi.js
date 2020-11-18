import  apiUrl  from "../../config/config";
import { defaultHeaders } from "./api";

const prefix = `${apiUrl}/v1/products`;

const showProduct = (id) => (
  fetch(`${prefix}/${id}`, {
    method: 'GET',
    headers: defaultHeaders,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success && data.payload.product) {
        return data.payload.product;
      }
    })
);

const getProductPlugById = (product_id, plug_id) => (
  fetch(`${prefix}/${product_id}/${plug_id}`, {
    method: 'GET',
    headers: defaultHeaders,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success && data.payload) {
        return data.payload.plug;
      }
    })
);

const getProductPlugs = (product_id) => (
  fetch(`${prefix}/${product_id}/interfaces`, {
    method: 'GET',
    headers: defaultHeaders,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success && data.payload.interfaces) {
        return data.payload.interfaces;
      }
    })
);

export {
  showProduct,
  getProductPlugById,
  getProductPlugs,
};
