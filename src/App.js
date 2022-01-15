import "./styles.css";
import { Provider } from "react-redux";

import store from "./state/store/index";

//components

import Count from "./components/Count";
import Toggle from "./components/Toggle";
import FetchData from "./components/FetchData";

export default function App() {
  return (
    <Provider store={store}>
      {/* <Count /> */}
      {/* <Toggle /> */}
      <FetchData />
    </Provider>
  );
}
