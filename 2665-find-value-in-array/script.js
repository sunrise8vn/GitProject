
let value = prompt("Enter a number: ");
var x = [-3, 5, 1, 3, 2, 10];

for (let i = 0; i < x.length; i++) {
	if (value == x[i]) {
		alert("Value " + x[i] + " founds at " + i);
	}
}