
var money = null;
var month = null;
var interest_rate = null;
var bank_interest = 0;
var total_money = 0;
var i = 1;

while (Number.isInteger(money) == false)
{
	money = parseInt(prompt('Nhập số tiền vay ngân hàng'));
	bank_interest = money;
}

while (Number.isInteger(month) == false)
{
	month = parseInt(prompt('Nhập số tháng kỳ hạn vay'));
}

while (Number(interest_rate) == false)
{
	interest_rate = parseFloat(prompt('Nhập số lãi suất hàng tháng'));
}

while (i <= month) {
	total_money = bank_interest + bank_interest * interest_rate;
	bank_interest = total_money;
	i++;
}

money = money.toLocaleString({ minimumFractionDigits: 0 });
total_money = total_money.toLocaleString({ minimumFractionDigits: 0 });
document.getElementById("money").textContent = "Số tiền vay từ ngân hàng (hệ số tăng dần): " + money + " VNĐ";
document.getElementById("month").textContent = "Kỳ hạn vay: " + month + " tháng";
document.getElementById("interest_rate").textContent = "Lãi suất hàng tháng: " + interest_rate + " %";
document.getElementById("totalMoney").textContent = "Tổng tiền cần phải trả: " + total_money + " VNĐ";