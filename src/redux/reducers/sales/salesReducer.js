import { FETCH_ALL_SALES } from "../../actions/actionTypes";

const salesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_SALES:
      return [...action.payload];
    default:
      return state;
  }
};

export default salesReducer;
