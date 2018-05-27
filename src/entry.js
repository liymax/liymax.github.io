import React from "react";
import { render } from "react-dom";

import 'src/utils/viewport';
import { hot } from "react-hot-loader";
import App from "./app";
const HotApp = hot(module)(App);
render(<HotApp />, document.getElementById("root"));
