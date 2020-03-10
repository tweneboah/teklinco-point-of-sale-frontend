import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer/rootReducers";

const middlewares = [thunk];

const composeEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, composeEnhancer);

export default store;
