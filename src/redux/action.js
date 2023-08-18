import { SET_NAME, SET_AGE } from "../utilities/constants";

export const updateName = (name) => {
  return (dispatch) => {
    dispatch({
      type: SET_NAME,
      payload: name,
    });
  };
};

export const updateAge = (age) => {
  return (dispatch) => {
    dispatch({
      type: SET_AGE,
      payload: age,
    });
  };
};
