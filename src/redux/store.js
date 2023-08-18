import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import reduxThunk from "redux-thunk";
import { applyMiddleware } from "redux";

const store = configureStore(
  { reducer: reducer },
  {},
  applyMiddleware(reduxThunk)
);

export default store;
