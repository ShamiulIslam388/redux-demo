import { FETCHDATA, ERROR } from "../actions/actionTypes";

const initialState = {
  data: [],
  error: ""
};

export const dataReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCHDATA:
      return {
        ...state,
        data: payload
      };
    case ERROR:
      return {
        data: [],
        error: payload
      };
    default:
      return state;
  }
};
