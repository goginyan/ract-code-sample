import { combineReducers } from "redux";
import products from "./products";
import categories from "./categories";
import baskets from "./baskets";
import components from "./components";
import interfaces from "./interfaces";

export default combineReducers({ products,categories,baskets, components,interfaces });
