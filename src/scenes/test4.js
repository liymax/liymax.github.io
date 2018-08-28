import Phaser from "phaser";

let ship,cursors,w=1280,h=1280;
export default class extends Phaser.Scene{
	constructor(){
		super({key:"test4"});
	}

	preload(){
		this.load.image('ship', '/sprites/fmship.png');

		this.load.tilemapTiledJSON('map', '/tilemaps/maps/super-mario.json');
		this.load.image('tiles1', '/tilemaps/tiles/super-mario.png');
		this.load.tilemapTiledJSON('d_map', '/tilemaps/maps/desert.json');
		this.load.image('d_tiles', '/tilemaps/tiles/tmw_desert_spacing.png');
	}

	create (){
		this.cameras.main.setBounds(0, 0, w, h);
		this.physics.world.setBounds(0, 0, w, h);

		/*let map = this.make.tilemap({ key: 'map' });
		let tileset = map.addTilesetImage('SuperMarioBros-World1-1', 'tiles1');
		let layer = map.createStaticLayer('World1', tileset, 0, 0);*/

		let map = this.make.tilemap({ key: 'd_map' });
		let tileset = map.addTilesetImage('Desert', 'd_tiles');
		map.createStaticLayer('Ground', tileset, 0, 0);

		cursors = this.input.keyboard.createCursorKeys();

		// ship = this.physics.add.image(400, 100, 'ship').setAngle(90).setCollideWorldBounds(true);
		ship = this.add.image(400, 100, 'ship').setAngle(90);
		this.cameras.main.startFollow(ship, true, 0.08, 0.08);
		this.cameras.main.setZoom(1.5);
	}

	update (time, delta) {
		//console.log(time,delta)
		if (cursors.left.isDown && ship.x > 0) {
			ship.setAngle(-90);
			ship.x -= 2.5;
		} else if (cursors.right.isDown && ship.x < w) {
			ship.setAngle(90);
			ship.x += 2.5;
		}

		if (cursors.up.isDown && ship.y > 0) {
			ship.setAngle(0);
			ship.y -= 2.5;
		} else if (cursors.down.isDown && ship.y < h) {
			ship.setAngle(180);
			ship.y += 2.5;
		}
	}
}
