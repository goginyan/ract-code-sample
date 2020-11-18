import  apiUrl  from "../../config/config";
import { defaultHeaders } from "./api";

const url = `${apiUrl}/v1/categories`;

const index = () => (
  fetch(url, {
    method: 'GET',
    headers: defaultHeaders,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success && data.payload.categories) {
        return data.payload.categories;
      }
    })
);

const show = (id) => (
  fetch(`${url}/${id}`, {
    method: 'GET',
    headers: defaultHeaders,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success && data.payload.category) {
        return data.payload.category;
      }
    })
);

export {
  index,
  show,
};