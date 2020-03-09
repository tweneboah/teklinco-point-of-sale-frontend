import { FETCH_ALL_CUSTOMERS } from "../../actions/actionTypes";

const customersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CUSTOMERS:
      return [...action.payload];

    default:
      return state;
  }
};

export default customersReducer;
