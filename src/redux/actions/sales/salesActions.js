import axios from "axios";
import { API_URL } from "../../../config/urls";
import { FETCH_ALL_SALES } from "../actionTypes";

export const fetchAllSales = () => {
  return async (dispatch) => {
    try {
      const salesResponse = await axios({
        method: "GET",
        url: `${API_URL}/sales`
      });

      dispatch({
        type: FETCH_ALL_SALES,
        payload: salesResponse.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};
