import axios from "axios";

import { API_URL } from "../../../config/urls";
import { FETCH_ALL_PRODUCTS } from "../actionTypes";

export const fetchAllProducts = () => {
  return (dispatch) => {
    axios
      .get(`${API_URL}/products`)
      .then((res) => {
        dispatch({
          type: FETCH_ALL_PRODUCTS,
          payload: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
