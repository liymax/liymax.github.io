import React from 'react';
import styled from 'styled-components';
import Header from '../common/header';

import {Nav, ExpandOps, Title, ImgWrapper, QrCode, Privacy, Em} from '../common/styledComponent';
const ContactItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	&>em{
		display: inline-flex;
		white-space: nowrap;
		align-items: center;
		padding-bottom: 16px;
		&>img{
			width: 28px;
			height: 36px;
			margin-right: 12px;
		}
		&>span{
			font-size: 28px;
			color: #777777;
			position: relative;
			top:2px;
		}
	}
	&>p{
		font-size: 26px;
		color: #4A4A4A;
		text-align: center;
		line-height: 44px;
	}
`;
const Gap = styled.p`
	position: relative;
	padding: 25px 0;
	&:after{
		content: '';
		width: 24px;
		height: 2px;
		background-color: #F8B500;
		position: absolute;
		top:24px;
		left: 50%;
		transform: translateX(-50%);
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
			{width:590,height:314, paddingBottom:50}];
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
				<h1>Contact Us</h1>
				<h2>联系我们</h2>
			</Title>
			<ImgWrapper>
				<img src='../assets/timg.jpg' style={styles[1]} />
			</ImgWrapper>
			<ContactItem>
				<em><img src='../assets/address.svg'/><span>公司地址</span></em>
				<p>深圳市南山区高新南九道45号<br />三航科技大厦1118室</p>
			</ContactItem>
			<Gap />
			<ContactItem>
				<em><img src='../assets/tel.svg'/><span>客服电话</span></em>
				<p>400-666-0365</p>
			</ContactItem>
			<Gap />
			<ContactItem>
				<em><img src='../assets/email.svg'/><span>用户请联络</span></em>
				<p>customer@trynpay.cn</p>
			</ContactItem>
			<Gap />
			<ContactItem>
				<em><img src='../assets/email.svg'/><span>商家请联络</span></em>
				<p>jiaoms@trynpay.cn</p>
			</ContactItem>
			<Gap />
			<ContactItem>
				<em><img src='../assets/email.svg'/><span>投资人请联络</span></em>
				<p>michael@trynpay.cn</p>
			</ContactItem>
			<Gap />
			<ContactItem>
				<em><img src='../assets/email.svg'/><span>招贤纳士</span></em>
				<p>michael@trynpay.cn</p>
			</ContactItem>
			<QrCode>
				<p><img src='../assets/timg.jpg'/><span>配配租官方微信公众号</span></p>
				<p><img src='../assets/timg.jpg'/><span>配配租客户服务微信号</span></p>
			</QrCode>
			<Privacy>版权所有<Em>©️</Em>2017深圳市配配租科技有限公司<br />粤ICP备17069825号</Privacy>
		</div>
	}
}
