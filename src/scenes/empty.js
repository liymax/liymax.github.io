import Phaser from "phaser";

export default class extends Phaser.Scene{
	constructor(){
		super({key:"empty"});
	}
	preload(){
		this.load.image('block', '/sprites/block.png');
		this.load.image('clown', '/sprites/clown.png');
		this.load.image('mushroom', '/sprites/mushroom2.png');
		this.load.image('ball', '/sprites/shinyball.png');
	}

	create (){
		this.physics.world.setBounds(0, 0, 800, 600);
		let block = this.physics.add.staticImage(600, 300, 'block');
		let clown = this.physics.add.image(200, 300, 'clown');
		this.physics.accelerateToObject(clown, block, 60, 300, 300);
		clown.setCollideWorldBounds(true);
		//clown.setOrigin(0.5, 0);
		clown.setVelocity(40, 30);
		clown.setBounce(1, 1);
		console.log('acceleration', clown.body.acceleration.x);
		console.log('maxVelocity', clown.body.maxVelocity.x);

		let collider = this.physics.add.overlap(clown, block, function (clownOnBlock) {
			clownOnBlock.setVelocity(0, 60).setAcceleration(0,50).setDrag(60);
			//this.physics.world.removeCollider(collider);
		}, null, this);

		let text = this.add.text(10, 50, 'my text', { font: '18px Courier', fill: 'blue' });
		text.setText("perfect phaser dev");
		/*let camera = this.cameras.add(100, 100, 500, 400);
		camera.startFollow(clown,false,0.01,0.01);
		camera.setBackgroundColor('rgba(10, 222, 20, 0.5)');*/
		//this.cameras.main.startFollow(clown);
		this.cameras.main.setBackgroundColor('rgba(220, 222, 220, 0.7)');

		let sprite = this.physics.add.image(400, 300, 'mushroom');
		let group = this.physics.add.staticGroup({
			key: 'ball',
			frameQuantity: 30
		});

		Phaser.Actions.PlaceOnRectangle(group.getChildren(), new Phaser.Geom.Rectangle(84, 84, 616, 416));
		group.refresh();
		sprite.setVelocity(100, 500).setBounce(1, 1).setCollideWorldBounds(true).setGravityY(200).setMass(4);

		this.physics.add.collider(sprite, group);
	}

	update (time, delta) {
		//console.log(time,delta)
	}
}
