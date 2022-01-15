import { TOGGLE } from "../actions/actionTypes";

const initialState = {
  toggle: false
};

const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        toggle: !state.toggle
      };
    default:
      return state;
  }
};

export default toggleReducer;
