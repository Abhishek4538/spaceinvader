class Alien {
	constructor(x, y, image) {
		this.image = image;
		this.x = x;
		this.y = y;
	}
	display() {
		imageMode(CENTER);
		image(
			this.image,
			this.x,
			this.y,
			this.image.width - 50,
			this.image.height - 50
		);
	}
}
