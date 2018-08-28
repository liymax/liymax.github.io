import React from 'react';
import Phaser from "phaser";

import Test1 from "../scenes/test1";
import Test2 from "../scenes/test2";
import Test3 from "../scenes/test3";
import Test4 from "../scenes/test4";
import AfterLoad from "../scenes/after_load_scene";
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
					//gravity: { y: 100 }
				}
			},
			scene:[Test4,Test3,Test2,Test1]
		};
	}

	componentDidMount(){
		const game = new Phaser.Game(this.config);
		//game.scene.add('load', AfterLoad, true, { x: 400, y: 300 });
	}

	render() {
		const style = {textAlign:'center'};
		return <React.Fragment>
		  <h2 style={style}>Hello phaser game</h2>
			<div style={style} id="phaser-example" />
		</React.Fragment>
	}
}
