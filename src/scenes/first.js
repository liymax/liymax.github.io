import Phaser from "phaser";

export default class extends Phaser.Scene{
	constructor(config){
		super(config)
	}

	preload(){
		this.load.setBaseURL('http://localhost:9001');
		this.load.image('face', '/pics/bw-face.png');
	}

	create (data){
		this.face = this.add.image(data.x, data.y, 'face');
	}
}
