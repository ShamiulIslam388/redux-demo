import { combineReducers } from "redux";
import { countreducer } from "./countreducer";
import { dataReducer } from "./fetchData";

const rootReducer = combineReducers({
  countreducer,
  dataReducer
});

export default rootReducer;
