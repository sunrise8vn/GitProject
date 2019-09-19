class Circle {
	constructor(radius, color) {
		this.radius = radius;
		this.color = color;
	}
	getColor() {
		return this.color;
	}
	getRadius() {
		return this.radius;
	}
	getArea() {
		return Math.PI * radius * radius;
	}
}

let circle = new Circle(2, "red");
let color = circle.getColor();
let radius = circle.getRadius();
let area = circle.getArea();

document.write("Radius: " + radius + "; Area: " + area + "; Color: " + color);

let circle2 = new Circle(5, "Green");
color = circle2.getColor();
radius = circle2.getRadius();
area = circle2.getArea();

document.write("<br>Radius: " + radius + "; Area: " + area + "; Color: " + color);

let circle3 = new Circle(15, "Blue");
color = circle3.getColor();
radius = circle3.getRadius();
area = circle3.getArea();

document.write("<br>Radius: " + radius + "; Area: " + area + "; Color: " + color);