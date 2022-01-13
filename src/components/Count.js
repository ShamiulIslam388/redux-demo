import React from "react";
import { connect } from "react-redux";
import { DECREMENT, INCREMENT, RESET } from "../state/actions/actionTypes";

const Count = (props) => {
  return (
    <div className="bg-gray-200 text-red-500 h-screen w-screen flex flex-col items-center justify-center">
      <div className="text-black text-5xl mb-4 font-bold">
        {props.count}
        <span
          className={`text-sm text-gray-700 font-normal ${
            props.count % 2 === 0 ? "text-blue-600" : "text-green-600"
          }`}
        >
          {props.count % 2 === 0 ? "Even" : "Odd"}
        </span>
      </div>
      <div className="flex flex-row gap-x-2">
        <button
          onClick={props.increment}
          className="px-3 py-1 border border-gray-400 rounded-full"
        >
          increment
        </button>
        <button
          onClick={props.decrement}
          className="px-3 py-1 border border-gray-400 rounded-full"
        >
          decrement
        </button>
        <button
          onClick={props.reset}
          className="px-3 py-1 border border-gray-400 rounded-full"
        >
          reset
        </button>
      </div>
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
