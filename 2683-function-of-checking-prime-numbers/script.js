
for (let n = 1; n <= 10000; n++) {
	if (isPrime(n) == true){
	    document.getElementById('num').innerHTML += n + " ";
	}
}

function isPrime(num) {
    if (num < 2){
        return false;
    }
    let count = 0;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            count++;
        }
    }
    if (count == 0) {
      return true;
    }
    else {
      return false;
    }
}


    