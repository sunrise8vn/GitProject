
var rows, cols;
var size = null;
var sout;

while(Number.isInteger(size) == false || parseInt(size) < 10) {
    size = parseInt(prompt('Nhập chiều rộng của trái tim >= 10'));
}

size = Math.round(size / 4);
sout = "<table border='0' width='600' cellspacing='0' cellpadding='6'>";

for (rows = 0; rows < size; rows++)
{
    sout += "<tr>";
    for (cols = 0; cols <= 4 * size; cols++)
    {
        let d = Math.sqrt( Math.pow(rows - size, 2) + Math.pow(cols - size, 2) );
        let e = Math.sqrt( Math.pow(rows - size, 2) + Math.pow(cols - 3 * size, 2) );
        if (d < size + 0.5 || e < size + 0.5 ) {
            sout += "<td>*</td>";
        }
        else {
            sout += "<td></td>";
        }
    }
    sout += "</tr>";
}

for (rows = 1; rows <= 2 * size; rows++)
{
    sout += "<tr>";
    for (cols = 0; cols < rows; cols++) {
        sout += "<td></td>";
    }
    for (cols = 0; cols < 4 * size + 1 - 2 * rows; cols++) {
        sout += "<td>*</td>";
    }
    sout += "</tr>";
}

sout += "</table>";
document.getElementById('heartShape').innerHTML = sout;