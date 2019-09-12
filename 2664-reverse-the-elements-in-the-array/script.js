var x = [-3, 5, 1, 3, 2, 10];
var first = 0;
var last = x.length - 1;

document.write("Mảng khởi tạo là: " + x + "<br>");

while (first < last) {
	let tempo = x[first];
	x[first] = x[last];
	x[last] = tempo;
	first++;
	last--;
}

document.write("Mảng đảo ngược là: " + x + "<br>");