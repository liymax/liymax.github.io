import React from 'react';
import styled from 'styled-components';
import Header from '../common/header';

import {Nav, ExpandOps, ImgWrapper, Title, QrCode,Privacy, Em} from '../common/styledComponent';

const Profile = styled.div`
	padding: 20px 80px 40px;
	font-size: 26px;
	color: #4A4A4A;
	text-align: justify;
	line-height: 50px;
`;

const Milestone = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 30px 0;
	&>p{
		flex:1 0 44%;
		font-size: 24px;
		color: #4D4D4D;
		line-height: 34px;
		&:nth-of-type(1){
		  justify-self: flex-end;
		  text-align: right;
		}
	}
	&>em{
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: #F8B500;
		margin: 0 30px;
		position: relative;
		&:after,&:before{
			content: "";
			width:4px;
			height: 55px;
			position: absolute;
			left: 8px;
			background-color: #979797;
			bottom: 20px;
		}
		&:before{
			top:20px;
		}
	}
`;

const DNode = styled.em`
	font-size: 32px;
	color: #F8B500;
`;
const Remain = styled.p`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 20px;
	&>i{
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background-color: #979797;
		margin-top:4px;
	}
`;

export default class extends React.PureComponent{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		const {display} = this.props;
		const styles = [{width:'100%',height:540},
			{width:76,height:168, marginBottom:0}];
		return <div style={display}>
			<Header />
			<Nav>
				<a><img src='../assets/logo.jpg'/></a>
				<a>智能硬件社区新零售平台运营商</a>
				<ExpandOps />
			</Nav>
			<ImgWrapper>
				<img src='../assets/timg.jpg' style={styles[0]} />
			</ImgWrapper>
			<Title>
				<h1>Development History</h1>
				<h2>发展历程</h2>
			</Title>
			<Profile>配配租是一家严谨而开放的科技公司，作为智能时代的先锋，从模式验证，
				到自主产权的平台部署，每一步都秉承为用户和商家创造核心价值的理念，敢为人先，
				砥砺前行。</Profile>
			<ImgWrapper>
				<img src='../assets/timg.jpg' style={styles[1]} />
			</ImgWrapper>
			<Milestone>
				<p><DNode>2017.06</DNode><br />配配租官网商城</p>
				<em />
				<p>用户可以在线下单<br />购买高性价比商品</p>
			</Milestone>
			<Milestone>
				<p>用户可以在线<br />租用体验商品</p>
				<em />
				<p><DNode>2017.07</DNode><br />公众号租用体验上线</p>
			</Milestone>
			<Milestone>
				<p><DNode>2017.08</DNode><br />与快递公众号合作</p>
				<em />
				<p>用户可以在第三方<br />公众号进入配配租</p>
			</Milestone>
			<Milestone>
				<p>合伙人在线实时<br />查看自己承包社区</p>
				<em />
				<p><DNode>2017.09</DNode><br />合伙人登陆上线</p>
			</Milestone>
			<Milestone>
				<p><DNode>2017.10</DNode><br /> 接入芝麻信用</p>
				<em />
				<p>用户凭电子信用<br />实现0押金</p>
			</Milestone>
			<Milestone>
				<p>检验用户需求</p>
				<em />
				<p><DNode>2017.11</DNode><br />试点小区</p>
			</Milestone>
			<Milestone>
				<p><DNode>2018.02</DNode><br /> 智能柜入场</p>
				<em />
				<p>首批智能柜</p>
			</Milestone>
			<Remain><i /><i /><i /></Remain>
			<QrCode>
				<p><img src='../assets/timg.jpg'/><span>配配租官方微信公众号</span></p>
				<p><img src='../assets/timg.jpg'/><span>配配租客户服务微信号</span></p>
			</QrCode>
			<Privacy>版权所有<Em>©️</Em>2017深圳市配配租科技有限公司<br />粤ICP备17069825号</Privacy>
		</div>
	}
}