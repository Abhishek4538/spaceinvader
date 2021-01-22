class Invader {
	constructor(x, image) {
		this.rowcount = 8;
		this.y = 50;
		this.x = x;
		this.alienIMG = image;
		this.aliens = [];
		this.columncount = 6;
		this.alienLasers = [];
		this.xdir = 0;
		//this.totalnumberofaliens=this.rowcount*this.columncount
	}
	initialiseAliens() {
		var x;
		var y = this.y;
		for (var i = 0; i < this.rowcount; i++) {
			y = y + 40;
			x = this.x;

			for (var j = 0; j < this.columncount; j++) {
				var alien = new Alien(x, y, this.alienIMG);
				this.aliens.push(alien);
				x = x + 50;
			}
		}
		console.log(this.aliens);
	}
	drawAliens() {
		for (var i = 0; i < this.aliens.length; i++) {
			this.aliens[i].display();
		}
	}
	moveleft() {
		if (this.xdir === 0) {
			for (var i = this.aliens.length - 1; i >= 0; i--) {
				// console.log(d)ist(x,y,currentAlien.x,currentAlien.y)

				if (this.aliens[i]) {
					if (this.aliens[i].x <= 0) {
						this.xdir = 1;
					} else {
						this.aliens[i].x -= 2;
					}
				}
			}
		}
	}
	moveright() {
		if (this.xdir === 1) {
			for (var i = this.aliens.length - 1; i >= 0; i--) {
				// console.log(d)ist(x,y,currentAlien.x,currentAlien.y)
				if (this.aliens[i]) {
					if (this.aliens[i].x >= windowWidth) {
						this.xdir = 0;
					} else {
						this.aliens[i].x += 2;
					}
				}
			}
		}
	}
	checkCollision(x, y) {
		for (var i = this.aliens.length - 1; i >= 0; i--) {
			var currentAlien = this.aliens[i];
			// console.log(d)ist(x,y,currentAlien.x,currentAlien.y)
			if (dist(x, y, currentAlien.x, currentAlien.y) <= 15) {
				this.aliens.splice(i, 1);
				return true;
			}
		}
		return false;
	}
	bottomAlienShoot() {
		var randomalien = Math.round(random(0, this.aliens.length - 1));
		if (this.aliens.length > 0) {
			var alienLaser = new Laser(
				this.aliens[randomalien].x,
				this.aliens[randomalien].y
			);
			this.alienLasers.push(alienLaser);
		}
	}
	DrawAleinLasers() {
		for (let i = 0; i < this.alienLasers.length - 1; i++) {
			this.alienLasers[i].draw();
			this.alienLasers[i].y += 8;
		}
	}
	checkCollided() {
		for (let i = 0; i < this.alienLasers.length - 1; i++) {
			if (player.CheckCollided(this.alienLasers[i].x, this.alienLasers[i].y)) {
				this.alienLasers.splice(i, 1);
			}
		}
	}
}
