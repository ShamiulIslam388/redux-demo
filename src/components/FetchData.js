import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../state/actions/actionCreators";

const FetchData = (props) => {
  useEffect(() => {
    props.onfetchData();
  }, []);
  console.log("props", props);
  return (
    <div className="text-center p-4 flex flex-col items-center">
      <div className="text-4xl mb-4 font-semibold">List of Users</div>
      {props.error && <div>{props.error}</div>}
      {props.users &&
        props.users.map((user) => {
          return (
            <div
              key={user.id}
              className="text-sm text-gray-600 py-1 my-2 border border-indigo-600 rounded-md cursor-pointer w-1/2"
            >
              {user.name}
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.dataReducer.data,
    error: state.dataReducer.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onfetchData: () => dispatch(fetchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchData);
