
var height = null;
var width = null;

while(Number.isInteger(height) == false || parseInt(height) < 1) {
	height = parseInt(prompt('Nhập chiều cao'));
}

while(Number.isInteger(width) == false || parseInt(width) < 1) {
    width = parseInt(prompt('Nhập chiều rộng'));
}

printRectangle("*", height, width);


function printRectangle(text, height, width) {
	var sout;
	sout = "<table border='0' width='" + width * 30 + "' cellspacing='0' cellpadding='6'>";

    for (i = 0; i < height; i++)
    {
        sout = sout + "<tr>";
        for (j = 0; j < width; j++)
            if (i == 0 || i == height - 1 || j == 0 || j == width - 1)
                sout = sout + "<td>" + text + "</td>";
            else
                sout = sout + "<td></td>";
        sout = sout + "</tr>";
    }
    sout = sout + "</table>";
    document.getElementById('rectangle').innerHTML = sout;
}
