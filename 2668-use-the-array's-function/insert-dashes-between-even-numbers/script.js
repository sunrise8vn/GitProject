
function addNumberToString() {
    var num = document.getElementById('num').value;
    document.getElementById('demo').innerHTML = num;
}

function joinArray() {
    const str = document.getElementById('demo').textContent;
    const result = [str[0]];

    for(let x = 1; x < str.length; x++)
    {
        if((str[x - 1] % 2 === 0) && (str[x] % 2 === 0))
        {
            result.push('-', str[x]);
        }
        else
        {
            result.push(str[x]);
        }
    }
    document.getElementById('result').innerHTML += result.join('');
}
