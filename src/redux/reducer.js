import { combineReducers } from "redux";
import { SET_NAME, SET_AGE } from "../utilities/constants";

const initialState = {
  name: "",
  age: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };

    case SET_AGE:
      return {
        ...state,
        age: action.payload,
      };

    default:
      return state;
  }
};

const reducer = combineReducers({
  user: userReducer,
});

export default reducer;
