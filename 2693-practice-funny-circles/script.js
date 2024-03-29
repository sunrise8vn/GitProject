// class Circle {
// 	constructor(x, y, radius) {
// 		this.x = x;
// 		this.y = y;
// 		this.radius = radius;
// 	}
// }

function Circle(x, y, radius) {
	this.x = x;
	this.y = y;
	this.radius = radius;
}

function getRandomHex() {
	return Math.floor(Math.random() * 255);
}

function getRandomColor() {
	var red = getRandomHex();
	var green = getRandomHex();
	var blue = getRandomHex();
	return "rgb(" + red + "," + blue + "," + green + ")";
}

function createCircle() {
	var ctx = document.getElementById('myCanvas').getContext('2d');
	var circle = new Circle(650, 300, 80);
	ctx.beginPath();
	ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
	ctx.fill();
}

function createCircleRandomRadius() {
	var ctx = document.getElementById('myCanvas').getContext('2d');
	var radius = Math.floor(Math.random() * 150);
	var circle = new Circle(650, 300, radius);
	ctx.beginPath();
	ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
	ctx.fill();
}

function createCircleRandomColor() {
	var ctx = document.getElementById('myCanvas').getContext('2d');
	var radius = Math.floor(Math.random() * 150);
	var color = getRandomColor();
	var circle = new Circle(650, 300, radius);
	ctx.beginPath();
	ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
	ctx.fillStyle = color;
	ctx.fill();	
}

function createCircleRandomPosition() {
	var ctx = document.getElementById('myCanvas').getContext('2d');
	var radius = Math.floor(Math.random() * 80);
	var color = getRandomColor();
	var x = Math.random() * ctx.canvas.width;
	var y = Math.random() * ctx.canvas.height;
	if (x < radius) x = radius;
	if (x > ctx.canvas.width - radius) x = ctx.canvas.width - radius; 
	if (y < radius) y = radius;
	if (y > ctx.canvas.height - radius) y = ctx.canvas.height - radius; 
	var circle = new Circle(x, y, radius);
	ctx.beginPath();
	ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
	ctx.fillStyle = color;
	ctx.fill();	
}

function createMultipleCircle(n){
	for (let i = 1; i <= n; i++){
		createCircleRandomPosition();
	}
}


// createCircle();

// createCircleRandomRadius();

// createCircleRandomColor();

// createCircleRandomPosition();
// createCircleRandomPosition();

createMultipleCircle(80);