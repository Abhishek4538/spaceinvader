var gamestate = "Play";

function preload() {
	bg = loadImage("black.png ");
	alein1IMG = loadImage("enemyRed1.png");
	alein2IMG = loadImage("enemyBlack1.png");
	restart = loadImage("restart.png");
	GameOverImg = loadImage("gameover.png");
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	invader = new Invader(300, alein1IMG);
	invader2 = new Invader(800, alein2IMG);
	player = new Player(windowWidth / 2, windowHeight - 100, 30, 30);
	Gameover = createSprite(windowWidth / 2, windowHeight / 2);
	Gameover.addImage(GameOverImg);
	Restart = createSprite(windowWidth / 2, windowHeight / 1.5, 300, 100);
	Restart.addImage(restart);
	invader.initialiseAliens();
	invader2.initialiseAliens();
}

function draw() {
	background(bg);
	if (gamestate === "Play") {
		Gameover.visible = false;
		Restart.visible = false;

		invader.drawAliens();
		invader2.drawAliens();
		player.display();
		if (frameCount % 10 === 0) {
			invader.bottomAlienShoot();
			invader2.bottomAlienShoot();
		}
		invader.DrawAleinLasers();
		invader2.DrawAleinLasers();
		invader.checkCollided();
		invader2.checkCollided();
		if (invader2.xdir === 0) {
			invader.xdir = 0;
		}

		invader.moveleft();
		invader.moveright();

		if (invader.xdir === 1) {
			invader2.xdir = 1;
		}
		invader2.moveright();
		invader2.moveleft();
		textSize(30);
		text(player.lives, 100, 50);
		if (keyIsDown(32)) {
			player.shoot();
		}
		if (keyDown(LEFT_ARROW)) {
			player.moveLeft();
		} else if (keyDown(RIGHT_ARROW)) {
			player.moveRight();
		}
		if (
			player.lives === 0 ||
			(invader.aliens.length === 0 && invader2.aliens.length === 0)
		) {
			gamestate = "End";
		}
	} else if (gamestate === "End") {
		if (player.lives > 0) {
			textSize(50);
			fill("yellow");
			text("You Win", 604, 310);
			Restart.visible = true;
		} else {
			Gameover.visible = true;
			Restart.visible = true;
		}
		if (mousePressedOver(Restart)) {
			reset();
		}
	}
	drawSprites();
}
function keyIsDown() {}
function reset() {
	gamestate = "Play";
	invader = new Invader(300, alein1IMG);
	invader2 = new Invader(800, alein2IMG);
	player = new Player(windowWidth / 2, windowHeight - 100, 30, 30);
	invader.initialiseAliens();
	invader2.initialiseAliens();
}
