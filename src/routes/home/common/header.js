import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	display: flex;
	height: 88px;
	align-items: center;
	justify-content: space-between;
	background-color: #242424;
	padding: 0 18px;
	&>em{
		color: #fff;
		font-size: 30px;
		&:nth-of-type(1){
		 position: relative;
		 padding-left: 22px;
		}
	}
`;

const LeftArrow =styled.i`
	display: inline-block;
	width:19px;
	height:34px;
	position: absolute;
	left: 0;top:-3px;
	&:after,&:before{
		content: '';
		width: 20px;
		height: 2px;
		background-color: #fff;
		position: absolute;
		top:16px;
		left: 0;
		transform-origin: 0 1px;
		transform: rotate(44deg);
	}
	&:before{
		transform: rotate(-44deg);
	}
`;
const RightOps = styled.i`
	display: inline-block;
	position: relative;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: #fff;
	margin-right: 15px;
	&:after,&:before{
		content: "";
		position: absolute;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: #fff;
		top:0;
		left: 15px;
	}
	&:before{
		left: -15px;
	}
`;



export default class extends React.PureComponent {
	constructor(props){
		super(props);
		this.state={}
	}
	render(){
		return (
			<Header>
				<em><LeftArrow /><span>返回</span></em>
				<em><span>配配租</span></em>
				<em><RightOps /></em>
			</Header>)
	}
}