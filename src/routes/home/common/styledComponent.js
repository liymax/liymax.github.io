import styled from "styled-components";

export const Nav = styled.nav`
	display: flex;
	height: 120px;
	align-items: center;
	padding: 0 24px;
	justify-content: space-between;
	&>a{
		&:nth-of-type(1)>img{
			width: 188px;
			height: 88px;
			font-size: 0;
		}
		&:nth-of-type(2){
			font-size: 24px;
			color: #9B9B9B;
		}
	}
`;

const opsHeight = 24;
export const ExpandOps = styled.a`
	width: 44px;
	height: ${opsHeight}px;
	border-bottom: 4px solid #9B9B9B;
	border-top: 4px solid #9B9B9B;
	&:after{
		content:'';
		position: absolute;
		width: 44px;
		height: 4px;
		background-color: #9B9B9B;
		margin-top: ${opsHeight/2 - 2}px;
	}
`;

export const QrCode = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 100px;
	&>p{
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		&>img{
			width: 240px;
			height: 240px;
		}
		&>span{
			font-size: 18px;
			color: #777777;
			padding-top: 24px;
		}
	}
`;

export const ImgWrapper = styled.p`
	display: flex;
	justify-content: center;
	font-size: 0;
`;

export const Title = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px 0;
	&>h1{
		font-size: 40px;
		color: #9B9B9B;
		padding-bottom: 16px;
	}
	&>h2{
		font-size: 32px;
		color: #4A4A4A;
		position: relative;
		&:after{
			content: '';
			position: absolute;
			height: 0;
			width: 220px;
			border-bottom: 2px solid  #F8B500;
			left: 50%;top:40px;
			transform: translateX(-50%);
		}
	}
`;

export const Privacy = styled.h6`
	text-align: center;
	font-size: 18px;
	line-height: 26px;
	color: #9B9B9B;
	padding-bottom: 48px;
`;

export const Em = styled.em`
	font-weight: bolder;
	font-size: 35px;
	color: #333;
	position: relative;
	padding: 0 3px;
	top:6px;
`;

export const Profile = styled.div`
	padding: 20px 80px 40px;
	font-size: 26px;
	color: #4A4A4A;
	line-height: 1.8;
	display: inline-flex;
`;