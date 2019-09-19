class Date {
	constructor(day, month, year){
		this.day = day;
		this.month = month;
		this.year = year;

	}
	getDay() {
		return this.day;
	}
	getMonth() {
		return this.month;
	}
	getYear() {
		return this.year;
	}
	setDay(day) {
		this.day = day;
	}
	setMonth(month) {
		this.month = month;
	}
	setYear(year) {
		this.year = year;
	}
	setDate(day, month, year) {
		this.day = day;
		this.month = month;
		this.year = year;
	}
	toString() {
		return this.day + "/" + this.month + "/" + this.year;
	}
}

let date = new Date(3, 5, 2003);

document.write(date.toString());
date.setDay(5);
document.write('<br>');
document.write(date.getDay());
date.setMonth(12);
document.write('<br>');
document.write(date.getMonth());
date.setYear(2019);
document.write('<br>');
document.write(date.getYear());
document.write('<br>');
document.write(date.toString());