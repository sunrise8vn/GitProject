class Mobile {
	constructor(name, battery, storingMess, Mess, state, draftMessages) {
		this.name = name;
		this.battery = battery;	
		this.storingMess = storingMess;
		this.Mess = Mess;
		this.state = state;
		this.draftMessages = draftMessages;
	}

	setBattery(batt) {
		if(batt > 100)
			return 100;
		return batt;
	}

	getBattery() {
		return this.battery;
	}

	// setPowerBattery() {
	// 	if (this.battery <= 0){
	// 		this.battery = 0;
	// 		this.state = false;
	// 	}
	// 	else {
	// 		this.state = true;
	// 		this.battery -= 1;
	// 	}
	// }

	setChargeBattery() {
		if (this.battery >= 100){
			this.battery = 100;
		}
		else{
			this.battery += 1;
		}
	}

	setDraft(str) {
		this.draftMessages = str;
	}

	getDraft() {
		if (typeof this.draftMessages != 'undefined')
			return this.draftMessages;
		else
			return null;
	}

	resetDraft() {
		this.draftMessages = null;
	}

	setState(b) {
		this.state = b;
	}

	getState() {
		return this.state;
	}

	// getInboxMess() {
	// 	return this.Mess;
	// }
}

var inputNO = document.getElementById('inputNO');
var inputIP = document.getElementById('inputIP');

var Mess = [];
var messNokia = [];

var nokia = new Mobile();
var iphone = new Mobile();

nokia.name = "nokia";
nokia.battery = 5;
nokia.setState(false);

iphone.name = "iphone";
iphone.battery = 5;
iphone.setState(false);

var chargeNokia = false;
var chargeiPhone = false;

showHome('#NOKIA');
showHome('#IPHONE')
disableScreen("#NOKIA", true);
disableScreen("#IPHONE", true);


function chatNO() {
	var count = Mess.length + 1;
	if(nokia.getState() == true && inputNO.value.trim().length > 0){
		setSendMess(count, nokia.name, iphone.name, inputNO.value);	
		nokia.resetDraft();
		var text1 = "";
		text1 += "<li class='left clearfix'>";
		text1 += "<span class='chat-img pull-left'>";
		text1 += "<img src='http://placehold.it/50/55C1E7/fff&text=NO' alt='User Avatar' class='img-circle' />";
		text1 += "</span>";
		text1 += "<div class='chat-body clearfix'>";
		text1 += "<div class='header'>";
		text1 += "<strong class='primary-font'>" + iphone.name + "</strong>";
		text1 += "<small class='pull-right text-muted'><span class='glyphicon glyphicon-time'></span>" + getToday() + "</small>"
		text1 += "</div>";
		text1 += "<p>" + inputNO.value + "</p>";
		$("#NOKIA .composeNO").append(text1);
	}
}

function chatIP() {
	var count = Mess.length + 1;
	if(iphone.getState() == true && inputIP.value.trim().length > 0){
		setSendMess(count, iphone.name, nokia.name, inputIP.value);
		iphone.resetDraft();
		var text1 = "";
		text1 += "<li class='left clearfix'>";
		text1 += "<span class='chat-img pull-left'>";
		text1 += "<img src='http://placehold.it/50/55C1E7/fff&text=NO' alt='User Avatar' class='img-circle' />";
		text1 += "</span>";
		text1 += "<div class='chat-body clearfix'>";
		text1 += "<div class='header'>";
		text1 += "<strong class='primary-font'>" + nokia.name + "</strong>";
		text1 += "<small class='pull-right text-muted'><span class='glyphicon glyphicon-time'></span>" + getToday() + "</small>"
		text1 += "</div>";
		text1 += "<p>" + inputIP.value + "</p>";
		$("#IPHONE .composeIP").append(text1);
	}
}

function getToday() {
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	return date+' '+time;
}

function setSendMess(id, sender, receiver, content) {
	var mess = {
		id : id,
		sender : sender,
		receiver : receiver,
		content : content,
		date: getToday()
	};
	// mess.push({'send': sender, 'receiver': receiver, 'content': content});
	this.Mess.push(mess);
}


function inbox(idElement, deviceName, classElement, sender, receiver) {
	show_inbox(idElement);

	var eName = $(idElement).find("." + classElement);
	eName.html("");
	this.ib = Mess.filter(x => x.sender === sender && x.receiver === receiver);
	ib.reverse();

	for(let i = 0; i < ib.length; i++){
		var text1 = "";
		text1 += "<li class='right clearfix'>";
		text1 += "<span class='chat-img pull-right'>";
		text1 += "<img src='http://placehold.it/50/FA6F57/fff&text=" + deviceName + "' alt='User Avatar' class='img-circle' />";
		text1 += "</span>";
		text1 += "<div class='chat-body clearfix'>";
		text1 += "<div class='header'>";
		text1 += "<small class='text-muted'><span class='glyphicon glyphicon-time'></span>" + this.ib[i].date + "</small>"
		text1 += "<strong class='primary-font pull-right'>" + this.ib[i].sender + "</strong>";
		text1 += "</div>";
		text1 += "<p>" + this.ib[i].content + "</p>";
		eName.append(text1);
	}
}

function sent(idElement, deviceName, classElement, sender, receiver) {
	show_sent(idElement);

	var eName = $(idElement).find("." + classElement);
	eName.html("");
	this.ib = Mess.filter(x => x.sender === sender && x.receiver === receiver);
	ib.reverse();

	for(let i = 0; i < ib.length; i++){
		var text1 = "";
		text1 += "<li class='left clearfix'>";
		text1 += "<span class='chat-img pull-left'>";
		text1 += "<img src='http://placehold.it/50/55C1E7/fff&text=" + deviceName + "' alt='User Avatar' class='img-circle' />";
		text1 += "</span>";
		text1 += "<div class='chat-body clearfix'>";
		text1 += "<div class='header'>";
		text1 += "<strong class='primary-font'>" + this.ib[i].receiver + "</strong>";
		text1 += "<small class='pull-right text-muted'><span class='glyphicon glyphicon-time'></span>" + this.ib[i].date + "</small>"
		text1 += "</div>";
		text1 += "<p>" + this.ib[i].content + "</p>";
		eName.append(text1);
	}
}

function allMessage(idElement, deviceName, classElement, sender) {
	show_all(idElement);

	var eName = $(idElement).find("." + classElement);
	eName.html("");
	this.ib = Mess.filter(x => x.sender === sender || x.receiver === sender);
	ib.reverse();

	for(let i = 0; i < ib.length; i++){
		var text1 = "";
		if(this.ib[i].sender == sender) {
			text1 += "<li class='left clearfix'>";
			text1 += "<span class='chat-img pull-left'>";
			text1 += "<img src='http://placehold.it/50/55C1E7/fff&text=" + deviceName + "' alt='User Avatar' class='img-circle' />";
			text1 += "</span>";
			text1 += "<div class='chat-body clearfix'>";
			text1 += "<div class='header'>";
			text1 += "<strong class='primary-font'>" + this.ib[i].receiver + "</strong>";
			text1 += "<small class='pull-right text-muted'><span class='glyphicon glyphicon-time'></span>" + this.ib[i].date + "</small>"
			text1 += "</div>";
			text1 += "<p>" + this.ib[i].content + "</p>";
		}
		else {
			text1 += "<li class='right clearfix'>";
			text1 += "<span class='chat-img pull-right'>";
			text1 += "<img src='http://placehold.it/50/FA6F57/fff&text=" + deviceName + "' alt='User Avatar' class='img-circle' />";
			text1 += "</span>";
			text1 += "<div class='chat-body clearfix'>";
			text1 += "<div class='header'>";
			text1 += "<small class='text-muted'><span class='glyphicon glyphicon-time'></span>" + this.ib[i].date + "</small>"
			text1 += "<strong class='primary-font pull-right'>" + this.ib[i].sender + "</strong>";
			text1 += "</div>";
			text1 += "<p>" + this.ib[i].content + "</p>";
		}
		eName.append(text1);
	}
}

function setDraftNokia() {
	nokia.setDraft(inputNO.value);
}

function setDraftiPhone() {
	iphone.setDraft(inputIP.value);
}

function turnPowerNO(){
	this.onPowerNO = setInterval(function(){
		if (nokia.battery <= 0){
			nokia.battery = 0;
			document.getElementById('togglePowerNO').checked = false;
			nokia.state = false;
			showHome('#NOKIA');
			disableScreen("#NOKIA", true);
			clearInterval(onPowerNO);
		}
		else {
			nokia.state = true;
			nokia.battery -= 1;
		}
		// nokia.setPowerBattery();
		document.getElementById('batteryNO').innerHTML = " " + nokia.getBattery() + "%";
	}, 1500);
}

function turnPowerIP(){
	this.onPowerIP = setInterval(function(){
		if (iphone.battery <= 0){
			iphone.battery = 0;
			document.getElementById('togglePowerIP').checked = false;
			iphone.state = false;
			showHome('#IPHONE');
			disableScreen("#IPHONE", true);
			clearInterval(onPowerIP);
		}
		else {
			iphone.state = true;
			iphone.battery -= 1;
		}
		// iphone.setPowerBattery();
		document.getElementById('batteryIP').innerHTML = " " + iphone.getBattery() + "%";
	}, 1500);
}

function turnChargeNO(){
	this.onChargeNO = setInterval(function(){
		nokia.setChargeBattery();
		document.getElementById('batteryNO').innerHTML = " " + nokia.getBattery() + "%";
	}, 1000);
}

function turnChargeIP(){
	this.onChargeIP = setInterval(function(){
		iphone.setChargeBattery();
		document.getElementById('batteryIP').innerHTML = " " + iphone.getBattery() + "%";
	}, 1000);
}

function switchPowerNO() {
	if(nokia.getState() == false) {
		document.getElementById('togglePowerNO').checked;
		nokia.setState(true);
		turnPowerNO();
		disableScreen("#NOKIA", false);
	}
	else {
		nokia.setState(false);
		showHome('#NOKIA');
		disableScreen("#NOKIA", true);
		clearInterval(onPowerNO);
	}
}

function switchPowerIP() {
	if(iphone.getState() == false) {
		document.getElementById('togglePowerIP').checked;
		iphone.setState(true);
		turnPowerIP();
		disableScreen("#IPHONE", false);
	}
	else {
		iphone.setState(false);
		showHome('#IPHONE');
		disableScreen("#IPHONE", true);
		clearInterval(onPowerIP);
	}
}

function switchChargeNO() {
	if(chargeNokia == false) {
		document.getElementById('toggleChargeNO').checked;
		chargeNokia = true;
		turnChargeNO();
	}
	else {
		chargeNokia = false;
		clearInterval(onChargeNO);
	}
}

function switchChargeIP() {
	if(chargeiPhone == false) {
		document.getElementById('toggleChargeIP').checked;
		chargeiPhone = true;
		turnChargeIP();
	}
	else {
		chargeiPhone = false;
		clearInterval(onChargeIP);
	}
}

function showHome(id){
	$(id + " .homeMenu").css("display", 'block');
	$(id + " .div_compose").css("display", 'none');
	$(id + " .div_inbox").css("display", 'none');
	$(id + " .div_sent").css("display", 'none');
	$(id + " .div_allMessage").css("display", 'none');
	$(id + " .card").css("visibility", 'hidden');
}

function show_Compose() {
	$("#NOKIA .div_compose").css("display", 'block');
	$("#NOKIA .composeNO").html("");
	inputNO.value = nokia.getDraft();
	$("#NOKIA .homeMenu").css("display", 'none');
	$("#NOKIA .card").css("visibility", 'hidden');
}

function show_ComposeIP() {
	$("#IPHONE .div_compose").css("display", 'block');
	$("#IPHONE .composeIP").html("");
	inputIP.value = iphone.getDraft();
	$("#IPHONE .homeMenu").css("display", 'none');
	$("#IPHONE .card").css("visibility", 'hidden');
}

function show_inbox(id) {
	$(id + " .div_inbox").css("display", 'block');
	$(id + " .homeMenu").css("display", 'none');
	$(id + " .card").css("visibility", 'visible');
}

function show_sent(id) {
	$(id + " .div_sent").css("display", 'block');
	$(id + " .homeMenu").css("display", 'none');
}

function show_all(id) {
	$(id + " .div_allMessage").css("display", 'block');
	$(id + " .homeMenu").css("display", 'none');
}

function disableScreen(id, b) {
	$(id + " .btn_compose").attr("disabled", b);
	$(id + " .btn_inbox").attr("disabled", b);
	$(id + " .btn_sent").attr("disabled", b);
	$(id + " .btn_all").attr("disabled", b);
}
