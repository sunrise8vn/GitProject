

document.write(footToMeter(2));
document.write("<br/>");
document.write(meterToFoot(25));

function footToMeter(foot) {
	var meter = 0.305 * foot;
  	return meter;
}

function meterToFoot(meter) {
	var foot = 3.279 * meter;
	return foot;
}
