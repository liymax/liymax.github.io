import React from "react";
import ReactDOM from "react-dom";
import {observer} from 'mobx-react';
import { observable,action,computed,autorun,reaction } from 'mobx';

@observer
class App extends React.Component{
	@observable clickCount = 0;
	constructor(props){
		super(props);
		this.state={

		}
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
		</div>
	}
}

ReactDOM.render(<App />,document.getElementById('root'),(who)=>{
	console.log(who);
});