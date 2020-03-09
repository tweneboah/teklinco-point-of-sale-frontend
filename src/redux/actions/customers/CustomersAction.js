import axios from "axios";
import { API_URL } from "../../../config/urls";
import { FETCH_ALL_CUSTOMERS } from "../actionTypes";

export const fetchAllCustomers = () => {
  return async (dispatch) => {
    try {
      const customersResponse = await axios({
        method: "GET",
        url: `${API_URL}/customers`
      });

      dispatch({
        type: FETCH_ALL_CUSTOMERS,
        payload: customersResponse.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};
