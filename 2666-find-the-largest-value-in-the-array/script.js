
var x = [-3, 5, 1, 3, 2, 10];
var max = x[0];
var index = 0;

for (let i = 1; i< x.length; i++) {
	if (x[i] > max) {
		max = x[i];
		index = i;
	}
}

alert("max: " + max + " at position " + index);