import React from "react";
import {observer} from 'mobx-react';
import { observable,action,computed,autorun,reaction } from 'mobx';

@observer
export default class extends React.Component{
	@observable clickCount = 0;
	static async getInitialProps() {
		return {}
	}

	render(){
		return <div>
			<label>{this.clickCount}</label><button onClick={()=>this.clickCount+=1} >+1</button>
			<button onClick={action(()=>this.clickCount+=1)} >+1(action)</button>
			<img src="/static/demo.png"/>
			<ul>
				<li><a href="/public/about">about</a></li>
				<li><a href="/public/readme">readme</a></li>
			</ul>
			<link rel="preload" href="/static/test/test.js" as="script"/>
		</div>
	}
}