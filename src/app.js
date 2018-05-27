import React from "react";

import WithContext from "./utils/WithContext";
import store from "./reducers/index";
import actions from "./actions/index";
import { StoreContext } from "./context";
import Router from "./routes/index";
const StoreProvider = WithContext(store, actions, StoreContext);

export default function App() {
  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  );
}
