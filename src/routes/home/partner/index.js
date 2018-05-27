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

const GroupShow = styled.div`
	padding: 40px 80px 30px;
	&>h3{
		font-size: 30px;
		color: #4A4A4A;
		padding-left: 16px;
		border-left: 4px solid #F8B500;
	}
	&>section{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding-top: 28px;
		&>img{
			padding-bottom: 6px;
			font-size: 0;
			width: 292px;
			height: 180px;
		}
	}
`;
const SP = styled.p`
	display: flex;
	font-size: 24px;
	color: #777777;
	line-height: 40px;
	margin-top: 26px;
	&>img{
		font-size: 0;
		vertical-align: middle;
		margin-right: 4px;
	}
`;

const Note = styled.p`
	padding-top: 30px;
	padding-left: 32px;
	position: relative;
	&:before{
	  content: "";
	  position: absolute;
		width: 12px;
		height: 12px;
		background-color: #D8D8D8;
		left: 0;top:40px;
	}
	&>span{
		display: inline-block;
		font-size: 24px;
		color: #777777;
		word-break: break-all;
		line-height: 36px;
	}
`;

const SingleNote = Note.extend`
	padding-top: 10px;
	&:before{
	  top:20px;
	}
`;
const PL = styled.ul`
	display: flex;
	padding-top: 22px;
	align-items: center;
	flex-wrap: wrap;
	&>li{
		flex: 1 0 50%;
	}
`;
const BrandShow = styled.ul`
	margin: 30px 66px;
	display: flex;
	border-bottom:1px solid #f2f2f2;
	border-right:1px solid #f2f2f2;
	flex-wrap: wrap;
	&>li{
		width: 122px;
		height: 56px;
		border-top:1px solid #f2f2f2;
		border-left:1px solid #f2f2f2;
		text-align: center;
	}
`;

const Remain = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 20px;
	&>i{
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background-color: #979797;
		margin:0 3px;
	}
`;

const items = ['社区开发巨头分众传媒战略合作','物业巨头垂直合作10+','意向高校10+',
		'合作孵化器2+','意向医院 1+','科技，居家，餐饮，宠物等自媒体合作5+'];
const items1 = ['顶级展会合作 10+ ', '一二线品牌厂家 40+',
	'工业设计公司 5+', '考察代工厂 100+'];
export default class extends React.PureComponent{
	constructor(props){
		super(props);
		this.state={}
	}
	render(){
		const {display} = this.props;
		const styles = [{width:'100%',height:540},
			{width:160,height:80}];
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
				<h1>Partners</h1>
				<h2>合作伙伴</h2>
			</Title>
			<Profile>配配租凭借强大的团队优势，创新的业务模式，和高效的执行力，成立之初就迅速在技术合作，
				智能硬件产品供给，线上线下社区开发运营等模块与行业独角兽深度合作。</Profile>
			<GroupShow>
				<h3>智能柜</h3>
				<section>
					<img src='../assets/timg.jpg' />
					<img src='../assets/timg.jpg' />
					<img src='../assets/timg.jpg' />
					<img src='../assets/timg.jpg' />
				</section>
				<Note>
					<span>配配租已与国内两大快递柜公司顺丰丰巢、中集E栈 签约合作并完成系统对接。</span>
				</Note>
				<Note>
					<span>现有两家公司在全国78个城市完成12万+快递柜布局，每年以20%速度增加。</span>
				</Note>
				<Note>
					<span>配配租积极与国内主要智能零售终端设备提供商探索未来合作方案。</span>
				</Note>
				<Note>
					<span>并与智能零售解决方案供应商深蓝科技等公司探讨合作研发人脸识别无感支付方案。</span>
				</Note>
			</GroupShow>
			<GroupShow>
				<h3>社群</h3>
				<SP>配配租与分众传媒，物业巨头，创业孵化器，高校医院等典型社群领军者全面铺开线下社群；</SP>
				<SP>配配租与自媒体，文化培训机构等展开合作，形成虚拟社群的配套覆盖：</SP>
				<SP style={{paddingBottom:30}} >
					<img src='../assets/logo.jpg' style={styles[1]} />
					<img src='../assets/logo.jpg' style={styles[1]} />
					<img src='../assets/logo.jpg' style={styles[1]} />
				</SP>
				{items.map((e, idx)=>{
					return <SingleNote key={idx}>
						<span>{e}</span>
					</SingleNote>;
				})}
			</GroupShow>
			<GroupShow>
				<h3>供应链</h3>
				<PL>
					{items1.map((e, idx)=>{
						return <li key={idx}><SingleNote >
							<span>{e}</span>
						</SingleNote></li>
					})}
				</PL>
			</GroupShow>
			<BrandShow>
				{(new Array(25).fill(0)).map((e, idx)=>{
					return <li key={idx}>{idx}</li>
				})}
			</BrandShow>
			<Remain>{(new Array(6).fill(0)).map((e, idx)=>{
				return <i key={idx} />
			})}</Remain>
			<QrCode>
				<p><img src='../assets/timg.jpg'/><span>配配租官方微信公众号</span></p>
				<p><img src='../assets/timg.jpg'/><span>配配租客户服务微信号</span></p>
			</QrCode>
			<Privacy>版权所有<Em>©️</Em>2017深圳市配配租科技有限公司<br />粤ICP备17069825号</Privacy>
		</div>
	}
}