function playGame() {
	var rangeUser = null;
	var guessUser = null;
	var random = 0;
	var counts = 1;
	var success = false;

	while (Number.isInteger(rangeUser) == false) {
		rangeUser = parseInt(prompt('Bạn muốn đoán trong khoảng nào?'));
	}
	while (Number.isInteger(guessUser) == false) {
		guessUser = parseInt(prompt('Nhập giá trị máy tính sẽ chọn trong khoảng trên'));
	}

	random = Math.floor(Math.random() * (rangeUser + 1));

	while (counts < 3 && !success) {
		if (guessUser > random) {
			var conf = confirm("Bạn đoán lớn hơn so với máy tính, bạn có muốn chọn lại ");
			if (conf) {
				do {
					guessUser = parseInt(prompt('Nhập giá trị máy tính sẽ chọn trong khoảng trên'));
				}
				while (Number.isInteger(guessUser) == false)
				counts++;
			}
			else {
				break;
			}
		}

		if (guessUser < random){
			var conf = confirm("Bạn đoán nhỏ hơn so với máy tính, bạn có muốn chọn lại ");
			if (conf) {
				do {
					guessUser = parseInt(prompt('Nhập giá trị máy tính sẽ chọn trong khoảng trên'));
				}
				while (Number.isInteger(guessUser) == false)
				counts++;
			}
			else {
				break;
			}
		}

		if (guessUser == random) {
			success = true;
			alert("Chúc mừng bạn đã đoán đúng");
		}
	}

	if (!success) {
		alert("Máy tính dự đoán là " + random + ", bạn đã thua cuộc.");
	}
}