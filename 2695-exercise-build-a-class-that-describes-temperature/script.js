class Temperature {
	constructor(tempC) {
		this.tempC = tempC;
	}

	getTempC() {
		if(this.tempC < -273)
			return -273
		return this.tempC;
	}

	convertC2F() {
		return this.getTempC() * 9 / 5 + 32;
	}

	convertC2K() {
		return this.getTempC() + 273.15;
	}

	getInfoTemp() {
		return "Temperature:<br>°C = " + this.getTempC() + "°" + "<br>°K = " + this.convertC2K() + "°" + "<br>°F = " + this.convertC2F() + "°";
	}
}

var tempObj = new Temperature();
tempObj.tempC = 25;
tempObj.getTempC();
document.write(tempObj.getInfoTemp());