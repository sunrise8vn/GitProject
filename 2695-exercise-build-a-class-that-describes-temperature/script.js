class Temperature {
	constructor(tempC) {
		this.tempC = function() {
			this.tempC = tempC;
		}
	}

	convertC2F() {
		if(this.tempC < -273)
			this.tempC = -273;
		return this.tempC * 9 / 5 + 32;
	}

	convertC2K() {
		if(this.tempC < -273)
			this.tempC = -273;
		return this.tempC + 273.15;
	}

	getInfoTemp() {
		return "Temperature:<br>°C = " + this.tempC + "°" + "<br>°K = " + this.convertC2K() + "°" + "<br>°F = " + this.convertC2F() + "°";
	}
}

var tempObj = new Temperature();
tempObj.tempC = 25;
document.write(tempObj.getInfoTemp());