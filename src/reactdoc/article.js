import React from 'react';
import {observer,inject} from 'mobx-react';
import ReactMarkdown from 'react-markdown';

@inject('article') @observer
export default class extends React.Component{
	render(){
		let {article,style}=this.props;
		return <div style={style}>
			<ReactMarkdown source={article.content} />
		</div>
	}
}