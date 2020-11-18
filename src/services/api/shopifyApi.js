import  apiUrl  from "../../config/config";
import { defaultHeaders } from "./api";

const prefix = `${apiUrl}/check-cart-data`;

const shopify = (data) => (
  fetch(`${prefix}`, {
    method: 'POST',
    headers: defaultHeaders,
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => data)
);

export {shopify};
