import { FETCHDATA, ERROR } from "./actionTypes";
import axios from "axios";

export const fetchData = () => {
  return (dispatch) => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch({
          type: FETCHDATA,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: ERROR,
          payload: error.message
        });
      });
  };
};
