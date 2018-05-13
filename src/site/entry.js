import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import "whatwg-fetch";
import { injectGlobal } from "styled-components";
injectGlobal`
	* {
		margin: 0;
		padding: 0;
		border: 0;
		background-color: #fff;
	}
	ol, ul {
		list-style: none;
		a{
		  color:red;
		}
	}
  body {
    margin: 0;
    line-height: 1;
  }
`;
import App from "./app";

ReactDOM.render(<App />, document.getElementById("root"));
