import React from "react";
import {observer,inject} from 'mobx-react';
import Home from "src/reactdoc/home";
import Article from "src/reactdoc/article";

@inject('article','showState') @observer
export default class extends React.Component{

	componentDidMount(){

	}

	getDisplayStyle(id){
		const {showState}=this.props;
		let {showId}=showState;
		if(id===showId){
			return {display:'block'};
		}
		return {display:'none'};
	}

	render(){
		const {article,showState}=this.props;
		console.log(article);
		let {renderedIds}=showState;
		return <div>
			{renderedIds.includes('home') && <Home style={this.getDisplayStyle('home')} />}
			{renderedIds.includes('article') && <Article style={this.getDisplayStyle('article')} />}
		</div>
	}
}