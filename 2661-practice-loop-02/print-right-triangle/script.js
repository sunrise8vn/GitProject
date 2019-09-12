
var height = null;
while(Number.isInteger(height) == false || parseInt(height) < 1) {
	height = parseInt(prompt('Nhập chiều cao của tam giác'));
}

printRightTriangleLeftDown("*", height);

printRightTriangleLeftTop("*", height);

printRightTriangleTopRight("*", height);

printRightTriangleDownRight("*", height);

function printRightTriangleLeftDown(text, length) {
	var sout;
	sout = "<table border='0' width='" + length * 30 + "'' cellspacing='0' cellpadding='6'>"

	for(i = length; i >= 1; i--)
    {
    	sout = sout + "<tr>";
    	for(k = i; k <= length; k++)
        {
        	sout = sout + "<td>" + text + "</td>";
        }
        sout = sout + "</tr>";
    } 
    sout = sout + "</table>";
    document.getElementById('rightTriangleLeftDown').innerHTML = sout;
}

function printRightTriangleLeftTop(text, length) {
	var sout;
	sout = "<table border='0' width='" + length * 30 + "'' cellspacing='0' cellpadding='6'>"

	for(i = length; i >= 1; i--)
    {
    	sout = sout + "<tr>";
    	for(k = 1; k <= i; k++)
        {
        	sout = sout + "<td>" + text + "</td>";
        }
        sout = sout + "</tr>";
    } 
    sout = sout + "</table>";
    document.getElementById('rightTriangleLeftTop').innerHTML = sout;
}

function printRightTriangleTopRight(text, length) {
	var sout;
	sout = "<table border='0' width='" + length * 30 + "' cellspacing='0' cellpadding='6'>";

	for(i = length; i >= 1; i--)
    {
    	sout = sout + "<tr>";
    	for(k = length; k > i; k--)
        {
        	sout = sout + "<td></td>";
        }
    	for(k = 1; k <= i; k++)
        {
        	sout = sout + "<td>" + text + "</td>";
        }
    	
        sout = sout + "</tr>";
    } 
    sout = sout + "</table>";
    document.getElementById('rightTriangleTopRight').innerHTML = sout;
}

function printRightTriangleDownRight(text, length) {
	var sout;
	sout = "<table border='0' width='" + length * 30 + "'' cellspacing='0' cellpadding='6'>"

	for(i = length; i >= 1; i--)
    {
    	sout = sout + "<tr>";
    	for(k = 1; k < i; k++)
        {
        	sout = sout + "<td></td>";
        }
        for(k = i; k <= length; k++)
        {
        	sout = sout + "<td>" + text + "</td>";
        }
        sout = sout + "</tr>";
    } 
    sout = sout + "</table>";
    document.getElementById('rightTriangleDownRight').innerHTML = sout; 
}