import React from "react";
import { connect } from "react-redux";
import { DECREMENT, INCREMENT, RESET } from "../state/actions/actionTypes";

const Count = (props) => {
  console.log("props count", props.count);
  return (
    <div>
      <div>{props.count}</div>
      <button onClick={props.increment}>increment</button>
      <button onClick={props.decrement}>decrement</button>
      <button onClick={props.reset}>reset</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.countreducer.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: INCREMENT }),
    decrement: () => dispatch({ type: DECREMENT }),
    reset: () => dispatch({ type: RESET })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
