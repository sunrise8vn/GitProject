
function swapUpperLowerCase() {
  var str = document.getElementById('stringCharacter').value;
  var strUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var strLower = 'abcdefghijklmnopqrstuvwxyz';
  var result = [];
  console.log(strUpper);
    
    for(let x = 0; x < str.length; x++)
    {
      if(strUpper.indexOf(str[x]) !== -1)
      {
        result.push(str[x].toLowerCase());
      }
      else if(strLower.indexOf(str[x]) !== -1)
      {
        result.push(str[x].toUpperCase());
      }
      else 
      {
        result.push(str[x]);
      }
    }
  document.getElementById('result').innerHTML = result.join('');
}
