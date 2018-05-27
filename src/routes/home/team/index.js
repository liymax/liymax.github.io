import React from 'react';
import styled from 'styled-components';
import Header from '../common/header';

import {Nav, ExpandOps, ImgWrapper, Title, QrCode,Privacy, Em} from '../common/styledComponent';

const Profile = styled.div`
	padding: 20px 80px 40px;
	display: flex;
	font-size: 26px;
	color: #4A4A4A;
	line-height: 50px;
`;

const PersonIntro = styled.div`
	padding: 40px 80px 0;
	display: flex;
	&>img{
		width: 196px;
		height: 262px;
		font-size: 0;
		margin-right: 40px;
	}
	&>section{
		display: inline-flex;
		flex-direction: column;
		&>h3{
			font-size: 34px;
			color: #4A4A4A;
		}
		&>i{
			width: 22px;
			height: 2px;
			background-color: #F8B500;
			margin: ${props=>props.space||20}px 0;
		}
		&>p{
			font-size: 24px;
			color: #4A4A4A;
			line-height: 36px;
			&:nth-of-type(2){
				font-size: 20px;
				color: #4A4A4A;
				line-height: 32px;
			}
		}
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
				<h1>Team Members</h1>
				<h2>团队成员</h2>
			</Title>
			<Profile>配配租团队拥有强大的科技和互联网基因。核心创始成员毕业于国内外知名高校，拥有硬件与传感器科技，
				人工智能与模式识别，互联网与大数据等学术背景，拥有智能硬件渠道运营与供应链，
				互联网连续创业的产业背景。</Profile>
			<PersonIntro>
				<img src='../assets/timg.jpg' />
				<section>
					<h3>曹林全</h3> <i />
					<p>联合创始人<br />负责渠道线下运营</p><i />
					<p>IT、家电、数码行业连续创业十年<br />线下渠道资源丰富</p>
				</section>
			</PersonIntro>
			<PersonIntro space={15}>
				<img src='../assets/timg.jpg' />
				<section>
					<h3>薛德文</h3> <i />
					<p>联合创始人<br />负责选品，线上运营</p><i />
					<p>哈工大本硕<br />先后就职于IBM、希捷、华大基因，<br />对黑科技与健康科技产品有丰富资源</p>
				</section>
			</PersonIntro>
			<PersonIntro space={15}>
				<img src='../assets/timg.jpg' />
				<section>
					<h3>郑阳平</h3> <i />
					<p>CTO<br />负责技术研发</p><i />
					<p>西安交大本硕<br />华为大数据部，PMP认证<br />飞泊通联合创始人</p>
				</section>
			</PersonIntro>
			<PersonIntro space={15}>
				<img src='../assets/timg.jpg' />
				<section>
					<h3>苏敬勇</h3> <i />
					<p>首席科学家<br />负责科技战略，设计区块链和人工智能<br />在新零售的应用</p><i />
					<p>FSU博士，Texas Tech. University 统计学大数据教授<br />IEEE Member<br />
						在物联网大数据脑科学，模式识别，区块链加密算法等领域有非常深的造诣</p>
				</section>
			</PersonIntro>
			<PersonIntro>
				<img src='../assets/timg.jpg' />
				<section>
					<h3>焦木生</h3> <i />
					<p>联合创始人<br />负责供应链运营</p><i />
					<p>7年创始人合作 经历<br />配配租项目发起者之一</p>
				</section>
			</PersonIntro>
			<PersonIntro space={15}>
				<img src='../assets/timg.jpg' />
				<section>
					<h3>汪晓婉</h3> <i />
					<p>品牌运营<br />负责品牌建设，市场运营传播</p><i />
					<p>8年品牌创建、市场运营经验<br />国内知名设计公司任职<br />丰富互联网创业经验</p>
				</section>
			</PersonIntro>
			<QrCode>
				<p><img src='../assets/timg.jpg'/><span>配配租官方微信公众号</span></p>
				<p><img src='../assets/timg.jpg'/><span>配配租客户服务微信号</span></p>
			</QrCode>
			<Privacy>版权所有<Em>©️</Em>2017深圳市配配租科技有限公司<br />粤ICP备17069825号</Privacy>
		</div>
	}
}