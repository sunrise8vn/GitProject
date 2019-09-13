
var b = document.getElementById('carogame');

var board = [];
var data = "";

for (let i = 0; i < 5; i++) {
    board[i] = new Array(0, 0, 0, 0, 0);
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    data += "<br/>";
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}
b.innerHTML = data;

function changeValue() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "X";
    for (let i = 0; i < 5; i++) {
        data += "<br/>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;";
        }
    }
    b.innerHTML = data;
}

function changeValue() {
    let positionX = prompt("X: "),
        positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "x";
    for (let i = 0; i < 5; i++) {
        data += "<br/>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;";
        }
    }
    b.innerHTML = data;
}

