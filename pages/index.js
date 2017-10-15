import React from "react";
import {observer} from 'mobx-react';
import { observable,action,computed,autorun,reaction } from 'mobx';

@observer
export default class extends React.Component{

	static async getInitialProps() {
		return observable({
			count : 0
		});
	}

	render(){
		let {count}=this.props;
		return <div>
			<label>{count}</label><button onClick={action(()=>this.props.count+=1)} >+1</button>
			<img src="/static/demo.png"/>
			<ul>
				<li><a href="/public/about">about</a></li>
				<li><a href="/public/readme">readme</a></li>
			</ul>
		</div>
	}
}