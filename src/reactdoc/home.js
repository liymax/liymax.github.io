import React from "react";
import {inject, observer} from "mobx-react/index";

@inject('showState','article') @observer
export default class extends React.Component{

	shiftToSomeArticle(name){
		let {showState,article}=this.props;
		showState.selectShowId('article');
		article.loadContentByName(name);
	}

	render(){
		let {style}=this.props;
		return <div style={style}>
			<h2>决定你成为什么样的人的，不是你的能力，而是你的选择</h2>
			<section>
				<ul>
					<li><a onClick={this.shiftToSomeArticle.bind(this,'poems')}>致敬我们伟大的古代诗人</a></li>
					<li><a onClick={this.shiftToSomeArticle.bind(this,'css3-3d')}>关于css3的3d效果的一些摸索</a></li>
				</ul>
			</section>
		</div>
	}
}