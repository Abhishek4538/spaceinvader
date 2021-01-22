class Player {
	constructor(x, y, w, h) {
		this.image = loadImage("playerShip1_green.png");
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.lasers = [];
		this.lives = 3;
		this.score = 0;
	}

	display() {
		imageMode(CENTER);
		image(this.image, this.x, this.y, this.w, this.h);
		this.drawLaser();
		this.updateLaser();
	}
	moveLeft() {
		this.x -= 15;
	}
	moveRight() {
		this.x += 15;
	}
	shoot() {
		var laser1 = new Laser(this.x, this.y);
		this.lasers.push(laser1);
	}
	drawLaser() {
		for (var i = 0; i < this.lasers.length; i++) {
			this.lasers[i].draw();
			this.lasers[i].y -= 8;
		}
	}
	updateLaser() {
		for (var i = this.lasers.length - 1; i >= 0; i--) {
			var currentLaser = this.lasers[i];
			if (
				invader.checkCollision(currentLaser.x, currentLaser.y) ||
				invader2.checkCollision(currentLaser.x, currentLaser.y)
			) {
				this.lasers.splice(i, 1);
			}
		}
	}
	CheckCollided(x, y) {
		if (dist(x, y, this.x, this.y) <= this.w / 2) {
			this.lives -= 1;
			var a = new Audio(
				"y2mate.com - Minecraft Damage Oof  Sound Effect HD.mp3"
			);
			a.play();
			return true;
		}

		return false;
	}
}
