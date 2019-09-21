var good = false;
var cheap = false;
var fast = false;

function Good() {
	if(!good) {
		if (cheap ==  true) {
			if (fast ==  true) {
				toggleCheckbox(document.getElementById('toggleFast'));
				fast = false;
			}
		}
		good = true;
	}
	else 
		good = false;
}

function Cheap() {
	if(!cheap) {
		if (fast ==  true) {
			if (good ==  true) {
				toggleCheckbox(document.getElementById('toggleGood'));
				good = false;
			}
		}
		cheap = true;
	}
	else
		cheap = false;
}

function Fast() {
	if(!fast) {
		if (good ==  true) {
			if (cheap ==  true) {
				toggleCheckbox(document.getElementById('toggleCheap'));
				cheap = false;
			}
		}
		fast = true;
	}
	else
		fast = false;
}

function toggleCheckbox(element)
 {
   element.checked = !element.checked;
 }