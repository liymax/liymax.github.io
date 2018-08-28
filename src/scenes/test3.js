import Phaser from "phaser";
let bob,graphics,offset,cursors,player;
export default class extends Phaser.Scene{
	constructor(){
		super({key:"test3"});
	}

	preload(){
		this.load.image('block', '/sprites/block.png');
		this.load.image('clown', '/sprites/clown.png');
		this.load.image('mushroom', '/sprites/mushroom2.png');
		this.load.image('ball', '/sprites/shinyball.png');
		this.load.image('pic', '/pics/kris-jovo.jpg');
		this.load.image('face', '/pics/bw-face.png');
		this.load.image('bg', '/pics/the-end-by-iloe-and-made.jpg');
	}

	create (){
		this.cameras.main.setBounds(0, 0, 1920 , 1080 );
		this.physics.world.setBounds(0, 0, 1920, 1080);
		//this.add.image(400, 300, 'pic').setAlpha(0.5);
		//this.add.image(400, 300, 'face');
		this.add.image(0, 0, 'bg').setOrigin(0);
		cursors = this.input.keyboard.createCursorKeys();
		player = this.physics.add.image(400, 300, 'mushroom');
		player.setCollideWorldBounds(true);
		this.cameras.main.startFollow(player, true, 0.1, 0.1);
		//this.cameras.main.setFollowOffset(400,300);

		/*bob = this.add.image(400, 300, 'pic');
		let cropWidth = 200,cropHeight = 100;

		bob.setCrop(0, 0, cropWidth, cropHeight);

		offset = bob.getTopLeft();

		this.input.on('pointermove', function (pointer) {
			bob.setCrop(
				(pointer.x - offset.x) - cropWidth / 2,
				(pointer.y - offset.y) - cropHeight / 2,
				cropWidth,
				cropHeight
			);
		});*/
		//graphics = this.add.graphics();
	}

	update (time, delta) {
		//console.log(time,delta)

		if (cursors.left.isDown) {
			console.log("left");
			player.setVelocityX(-200);
		} else if (cursors.right.isDown) {
			console.log("right");
			player.setVelocityX(200);
		}
		if (cursors.up.isDown){
			console.log("up");
			player.setVelocityY(-200);
		} else if (cursors.down.isDown) {
			console.log("down");
			player.setVelocityY(200);
		}
	}
}
