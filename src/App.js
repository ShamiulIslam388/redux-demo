import "./styles.css";
import { Provider } from "react-redux";

import Count from "./components/Count";
import store from "./state/store/index";

export default function App() {
  return (
    <Provider store={store}>
      <Count />
    </Provider>
  );
}
