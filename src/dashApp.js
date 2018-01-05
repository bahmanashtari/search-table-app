import React from "react";
import { Provider } from "react-redux";
import TestPage from "./components/TestPage";
import { store } from "./redux/store";

const DashApp = () => (
  <Provider store={store}>
    <div>
      <TestPage />
    </div>
  </Provider>
);

export default DashApp;