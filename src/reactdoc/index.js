import "babel-polyfill";
import "whatwg-fetch";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import Article from "src/model/Article";
import ShowState from "src/model/ShowState";
import Main from "./main";

const stores = {
  article: new Article(),
  showState: new ShowState()
};

const App = () => (
  <Provider {...stores}>
    <Main />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
