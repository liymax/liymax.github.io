import { hot } from 'react-hot-loader';
import React from 'react';
//import {loadScript} from "../utils/common";
import HelloWorld from "./components/helloworld";

//loadScript('/js/tfjs@0.12.5.js');

function App(){
	return ( <HelloWorld /> );
}

export default hot(module)(App)
