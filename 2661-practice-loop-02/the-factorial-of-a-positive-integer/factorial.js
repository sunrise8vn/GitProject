
var num = null;
while(Number.isInteger(num) == false || parseInt(num) < 1) {
	num = parseInt(prompt('Nhập vào số nguyên dương'));
}

// đệ quy
function factorial(n) {
	if (n == 1)
		return 1;
	return n * factorial(n - 1);
}

// vòng lặp
// function factorial(n) {
// 	let fac = 1;
// 	for (i = 1; i <= n; i++)
//         fac *= i;
//     return fac;
// }

document.getElementById('demo').innerHTML = factorial(num);