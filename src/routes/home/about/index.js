import React from 'react';
import styled from 'styled-components';
import Header from '../common/header';

import {Nav, ExpandOps, ImgWrapper, Title, QrCode,Privacy, Em, Profile} from '../common/styledComponent';

const IntroItem =styled.div`
	text-align: center;
	margin-top: 30px;
	&>img{
		width: 206px;
		height: 206px;
		margin: 0 250px 30px;
		border-radius: 50%;
		font-size: 0;
	}
	&>p{	
		display: inline-block;
		text-align: center;
		font-size: 26px;
		color: #4A4A4A;
		line-height: 44px;
	}
`;
const CEM = styled.em`
	color: #F8B500;
`;
const Future = styled.ul`
	display: flex;
	padding: 0 5%;
	margin-top: 50px;
	&>li{
		flex:1 0 45%;
		display: inline-flex;
		flex-direction: column;
		padding-left: 15px;
		&:nth-of-type(1){
			padding-left: 50px;
		}
		&>h3{
			font-size: 36px;
			color: #9B9B9B;
			&:before{
				content: "";
				width: 4px;
				height: 34px;
				background-color: #F8B500;
				position: absolute;
				margin-left: -14px;
			}
		}
		&>h4{
			font-size: 28px;
			color: #4A4A4A;
			margin: 15px 0 24px;
			font-weight: bold;
		}
		&>dt{
			font-size: 22px;
			color: #9B9B9B;
			margin-bottom: 16px;
		}
		&>dd{
			font-size: 26px;
			color: #4A4A4A;
			font-weight: bold;
		}
	}
`;
const cw = 75;
const ThreeCircle = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 50px;
	padding-bottom: 100px;
	position: relative;
	&>section{
		text-align: center;
		width: 284px;
		height: 284px;
		border-radius: 50%;
		background-color: #F4D322;
		&>em{
			display: inline-block;
			padding-top: 40px;
			font-size: 20px;
			color: #4A4A4A;
			text-align: center;
			line-height: 24px;
		}
	}
	&>p{
		position: absolute;
		width: 284px;
		height: 284px;
		border-radius: 50%;
		background-color: #65C7B5;
		opacity: 0.7;
		top:112px;
		left: 50%;
		transform: translateX(${-cw}px);
		&>em{
			display: inline-block;
			font-size: 20px;
			color: #FFFFFF;
			text-align: center;
			line-height: 24px;
			margin-left: 160px;
			margin-top: 140px;
		}
		
		&:nth-of-type(1){
			&>em{
				margin-left: 30px;
				margin-top: 140px;
			}
		  background-color: #82AAD2;
			transform: translateX(${cw-284}px);
		}
	}
	&>img{
		width: 110px;
		height: 52px;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top:208px;
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
				<h1>Company Introduction</h1>
				<h2>公司简介</h2>
			</Title>
			<Profile>
				配配租是一家专注于打造智能硬件社区新零售平台的运营商。我们要解决目前智能硬件产品的线上
				零售商无法实现的购前体验需求和线下零售商无法实现的最后一公里的实地体验问题。
			</Profile>
			<Profile>
				我们致力于成为社区用户的黑科技选品人，让亿万都市人足不出户实现科技产品的快速体验式消
				费，为冲动的线上消费提供理性的线下体验；我们同时致力于成为智能硬件厂商在社区的代言人，
				通过大数据和人工智能的科技手段让优质的智能产品快速精准的的传递到千家万户。
			</Profile>
			<IntroItem>
				<img src='../assets/timg.jpg' />
				<p>
					我们致力于建设——<br />以社区为颗粒的
					<CEM>OMO基础设施<br />-智能硬件产品无人体验式零售柜</CEM>
				</p>
			</IntroItem>
			<IntroItem>
				<img src='../assets/timg.jpg' />
				<p>
					我们的实现途径——<br />无人<CEM>智能体验柜</CEM>扫码取货的便捷交付方式
					<br />社区<CEM>合伙人制</CEM>轻资产运营途径
					<br />用<CEM>AI</CEM>和<CEM>区块链</CEM>技术实现人和货的精准匹配
					<br />为社区用户提供智能硬件产品体验式消费解决方案
				</p>
			</IntroItem>
			<IntroItem>
				<img src='../assets/timg.jpg' />
				<p>
					我们的目标<br />社区客户体验式购买<CEM>真正需要的智能硬件产品</CEM>
					<br />智能硬件商家实现<CEM>快速精准</CEM>的<CEM>用户覆盖</CEM>
				</p>
			</IntroItem>
			<Future>
				<li>
					<h3>Mission</h3>
					<h4>使命</h4>
					<dt>Pay For Value</dt>
					<dd>让价格回归价值</dd>
				</li>
				<li>
					<h3>Vision</h3>
					<h4>愿景</h4>
					<dt>Community IoT On Demand</dt>
					<dd>体验共享社区物联</dd>
				</li>
			</Future>
			<ThreeCircle>
				<section><em>社区<br />物联平台</em></section>
				<p><em>商家<br />快速传递</em></p>
				<p><em>客户<br />体验式消费</em></p>
				<img src='../assets/logo.jpg' />
			</ThreeCircle>
			<QrCode>
				<p><img src='../assets/timg.jpg'/><span>配配租官方微信公众号</span></p>
				<p><img src='../assets/timg.jpg'/><span>配配租客户服务微信号</span></p>
			</QrCode>
			<Privacy>版权所有<Em>©️</Em>2017深圳市配配租科技有限公司<br />粤ICP备17069825号</Privacy>
		</div>
	}
}