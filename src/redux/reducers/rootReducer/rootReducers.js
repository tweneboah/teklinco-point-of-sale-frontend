import { combineReducers } from "redux";
import usersReducer from "../userAuth/userAuthReducer";
import productsReducer from "../products/productsReducer";
import customersReducer from "../customers/customersReducer";
import salesReducer from "../sales/salesReducer";

const rootReducer = combineReducers({
  user: usersReducer,
  products: productsReducer,
  customers: customersReducer,
  sales: salesReducer
});

export default rootReducer;
