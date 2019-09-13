var dicEn = ["red", "blue", "green", "yellow", "orange", "white", "black"];
var dicVn = ["Màu đỏ", "Màu xanh lục", "Màu xanh dương", "Màu vàng", "Màu cam", "Màu trắng", "Màu đen"];

function translateEV() {
	let value = document.getElementById('stringCharacter').value;
	console.log(value);
	for (let i = 0; i < dicEn.length; i++) {
		if (value == dicEn[i]) {
			document.getElementById('result').textContent = dicVn[i]; 
			break;
		}
		else {
			document.getElementById('result').textContent = "Not found"; 	
		}
	}
}
