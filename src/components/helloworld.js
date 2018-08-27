import React from 'react';
import Phaser from "phaser";


import InitScene from "../scenes/init";
import Empty from "../scenes/empty";
import First from "../scenes/first";
export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.config = {
			type: Phaser.AUTO,
			parent: 'phaser-example',
			width: 800,
			height: 600,
			pixelArt: true,
			physics: {
				default: 'arcade',
				arcade: {
					gravity: { y: 100 }
				}
			},
			scene:[Empty,InitScene]
		};
	}

	componentDidMount(){
		const game = new Phaser.Game(this.config);
	}

	render() {
		const style = {textAlign:'center'};
		return <React.Fragment>
		  <h2 style={style}>Hello phaser game</h2>
			<div style={style} id="phaser-example" />
		</React.Fragment>
	}
}
