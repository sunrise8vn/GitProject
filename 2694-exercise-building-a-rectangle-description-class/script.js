class Rectangle {
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}

	getArea() {
		return this.width * this.height;
	}

	getPerimeter() {
		return 2 * (this.width + this.height);
	}

	setOnCanvas() {
		var ctx = document.getElementById('myCanvas').getContext('2d');
		var color = getRandomColor();
		const area = this.getArea();
		const perimeter = this.getPerimeter();
		ctx.beginPath();
		ctx.font = "30px Arial";
		ctx.fillText("Perimeter: " + perimeter, 10, 30);
		ctx.fillText("Area: " + area, 10, 80);
		ctx.fillStyle = color;
		ctx.fillRect(20, 120, this.width, this.height);
		ctx.stroke();
	}
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

var recWidth = Math.floor(Math.random() * 1200 + 50);
var recHeight = Math.floor(Math.random() * 500 + 50)

let rec = new Rectangle(recWidth, recHeight, getRandomColor());
rec.setOnCanvas();