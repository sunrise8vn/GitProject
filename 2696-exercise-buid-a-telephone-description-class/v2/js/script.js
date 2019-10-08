class Mobile {
	constructor(name, battery, state, draft) {
		this.name = name;
		this.battery = battery;	
		this.archiveMess = [];
		this.newMess = [];
		this.state = state;
		this.draft = draft;
	}

	setBattery(batt) {
		if(batt > 100)
			return 100;
		return batt;
	}

	getBattery() {
		return this.battery;
	}

	setChargeBattery() {
		if (this.battery >= 100){
			this.battery = 100;
		}
		else{
			this.battery += 1;
		}
	}

	setMess(id, sender, receiver, content, date) {
		// function add(arr) {
			const found = this.archiveMess.some(el => el.id === id);
			if (!found) {
				this.archiveMess.push({
					id : id,
					sender : sender,
					receiver : receiver,
					content : content,
					date: date, 
					status: 0
				});
				this.newMess.push({
					id : id,
					sender : sender,
					receiver : receiver,
					content : content,
					date: date, 
					status: 0
				});
			// } 
		}
	}


	getArchiveMess() {
		// return this.archiveMess;
		var items =  this.archiveMess.filter(function(item) {
			return item.status == 0;
		});
		return items;
	}

	getNewMess() {
		// return this.newMess;
		var items =  this.archiveMess.filter(function(item) {
			return item.status == 0;
		});
		return items;
	}
	clearNewMess() {
		this.newMess = [];
	}

	setDraft(str) {
		this.draft = str;
	}

	getDraft() {
		if (typeof this.draft != 'undefined')
			return this.draft;
		else
			return null;
	}

	resetDraft() {
		this.draft = null;
	}

	setState(b) {
		this.state = b;
	}

	getState() {
		return this.state;
	}
}

var txtNO = document.getElementById('txtNO');
var txtIP = document.getElementById('txtIP');

var Mess = [];

var nokia = new Mobile();
nokia.name = "nokia";
nokia.battery = 65;
$('#NOKIA').find(".txt-battery").html(" " + nokia.getBattery() + "%");
$("#NOKIA .charging").css("display", 'none');
setBatterColor(nokia, "#NOKIA");
nokia.state = false;

var iphone = new Mobile();
iphone.name = "iphone";
iphone.battery = 65;
$('#IPHONE').find(".txt-battery").html(" " + iphone.getBattery() + "%");
$("#IPHONE .charging").css("display", 'none');
setBatterColor(iphone, "#IPHONE");
iphone.state = false;

var chargeNokia = false;
var chargeiPhone = false;

showHomeNO();
showHomeIP();
disableScreen("#NOKIA", "none", 0.4);
disableScreen("#IPHONE", "none", 0.4);

function chatNO() {
	let count = Mess.length + 1;
	if(nokia.getState() == true && txtNO.value.trim().length > 0){
		setSendMess(count, nokia.name, iphone.name, txtNO.value);	
		nokia.resetDraft();
		let text1 = "";
		text1 += "<li class='left clearfix'>";
		text1 += "<span class='chat-img pull-left'>";
		text1 += "<img src='http://placehold.it/50/55C1E7/fff&text=NO' alt='User Avatar' class='img-circle' />";
		text1 += "</span>";
		text1 += "<div class='chat-body clearfix'>";
		text1 += "<div class='header'>";
		text1 += "<strong class='primary-font'>" + iphone.name + "</strong>";
		text1 += "<small class='pull-right text-muted'><span class='glyphicon glyphicon-time'></span>" + getToday() + "</small>"
		text1 += "</div>";
		text1 += "<p>" + txtNO.value + "</p>";
		$("#NOKIA .compose").append(text1);
	}
}

function chatIP() {
	let count = Mess.length + 1;
	if(iphone.getState() == true && txtIP.value.trim().length > 0){
		setSendMess(count, iphone.name, nokia.name, txtIP.value);
		iphone.setMess(count, iphone.name, nokia.name, txtIP.value, getToday());
		iphone.resetDraft();
		// let element = $('#IPHONE').find(".compose");
		let text1 = "";
		text1 += "<li class='left clearfix'>";
		text1 += "<span class='chat-img pull-left'>";
		text1 += "<img src='http://placehold.it/50/55C1E7/fff&text=NO' alt='User Avatar' class='img-circle' />";
		text1 += "</span>";
		text1 += "<div class='chat-body clearfix'>";
		text1 += "<div class='header' style='width: 100%;'>";
		text1 += "<strong class='primary-font' style='margin-top: -3px;'>" + nokia.name + "</strong>";
		text1 += "<small class='pull-right text-muted' style='float: left;'><span class='glyphicon glyphicon-time'></span>" + getToday() + "</small>"
		text1 += "</div>";
		text1 += "<p style='text-align: left;'>" + txtIP.value + "</p>";
		// element.append(text1);
		$("#IPHONE .compose").append(text1);
		// alert('message?: DOMString');
	}
}

function getToday() {
	let today = new Date();
	let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
	let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	return date + ' ' + time;
}

function setSendMess(id, sender, receiver, content) {
	let mess = {
		id : id,
		sender : sender,
		receiver : receiver,
		content : content,
		date: getToday()
	};
	// mess.push({'send': sender, 'receiver': receiver, 'content': content});
	this.Mess.push(mess);
}


function getInboxNO(idElement, deviceName, sender, receiver) {
	showInbox(idElement);
	changeBackgroundColorNO('inbox');	
	// $("#iphone-draggable-home").css("background-color", "#2e2e2f");	

	let element = $(idElement).find(".inbox");
	this.ib = Mess.filter(x => x.sender === sender && x.receiver === receiver);
	// ib.reverse();

	for(let i = 0; i < ib.length; i++){
		nokia.setMess(ib[i].id, ib[i].sender, ib[i].receiver, ib[i].content, ib[i].date);
	}

	this.m = nokia.getNewMess();

	if (m.length > 0) {
		for (let i = 0; i < m.length; i++) {
			let text1 = "";
			text1 += "<li class='right clearfix  w3-animate-top mess'>";
			text1 += "<span class='chat-img pull-right'>";
			text1 += "<img src='http://placehold.it/50/FA6F57/fff&text=" + deviceName + "' alt='User Avatar' class='img-circle' />";
			text1 += "</span>";
			text1 += "<div class='chat-body clearfix'>";
			text1 += "<div class='divhode' style='width: 30px; line-height: 50px; float: left;'>";
			text1 += "<input type='checkbox'></div>"
			text1 += "<div class='header'>";
			text1 += "<small class='pull-left text-muted'><span class='glyphicon glyphicon-time'></span>" + m[i].date + "</small>"
			text1 += "<strong class='primary-font'>" + m[i].sender + "</strong>";
			text1 += "</div>";
			text1 += "<p>" + m[i].content + "</p>";
			element.append(text1);
		}
		nokia.clearNewMess();
	}
}

function getInboxIP(idElement, deviceName, receiver) {
	showInbox(idElement);
	changeBackgroundColorIP();	

	let element = $(idElement).find(".inbox");
	this.ib = Mess.filter(x => x.receiver === receiver);
	ib.reverse();

	for(let i = 0; i < ib.length; i++){
		iphone.setMess(ib[i].id, ib[i].sender, ib[i].receiver, ib[i].content, ib[i].date);
	}

	this.m = iphone.getNewMess();

	if (m.length > 0) {
		for (let i = 0; i < m.length; i++) {
			let text1 = "";
			text1 += "<li id='mess" + m[i].id + "' class='right clearfix  w3-animate-bottom mess'>";
			text1 += "<span class='chat-img pull-right'>";
			text1 += "<img src='http://placehold.it/50/FA6F57/fff&text=" + deviceName + "' alt='User Avatar' class='img-circle' />";
			text1 += "</span>";
			text1 += "<div class='chat-body clearfix'>";
			text1 += "<div class='divhode' style='width: 30px; line-height: 50px; float: left;'>";
			text1 += "<input type='checkbox' name='messip[]' value='"+ m[i].id +"'></div>"
			text1 += "<div class='header'>";
			text1 += "<small class='pull-left text-muted'><span class='glyphicon glyphicon-time'></span>" + m[i].date + "</small>"
			text1 += "<strong class='primary-font'>" + m[i].sender + "</strong>";
			text1 += "</div>";
			text1 += "<p style='text-align: left'>" + m[i].content + "</p>";
			// element.append(text1);
			element.prepend(text1);
		}
		iphone.clearNewMess();
		cancelIP();
	}

}

function sent(idElement, deviceName, classElement, sender, receiver) {
	showSent(idElement);
	changeBackgroundColorIP();

	let eName = $(idElement).find("." + classElement);
	eName.html("");
	this.ib = Mess.filter(x => x.sender === sender && x.receiver === receiver);
	ib.reverse();

	for(let i = 0; i < ib.length; i++){
		let text1 = "";
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

function allMessageNO(idElement, deviceName, classElement, sender) {
	showAll(idElement);
	changeBackgroundColorNO('all');

	let eName = $(idElement).find("." + classElement);
	eName.html("");
	this.ib = Mess.filter(x => (x.sender === sender || x.receiver === sender) && x.status == 0);
	ib.reverse();

	for(let i = 0; i < ib.length; i++){
		let text1 = "";
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
			text1 += "<small class='pull-left text-muted'><span class='glyphicon glyphicon-time'></span>" + this.ib[i].date + "</small>"
			text1 += "<strong class='primary-font'>" + this.ib[i].sender + "</strong>";
			text1 += "</div>";
			text1 += "<p style='text-align: left'>" + this.ib[i].content + "</p>";
		}
		eName.append(text1);
	}
}

function showAllMessageIP(idElement, deviceName, classElement, sender) {
	showAll(idElement);
	changeBackgroundColorIP();

	let eName = $(idElement).find("." + classElement);
	eName.html("");
	this.ib = Mess.filter(x => x.sender === sender || x.receiver === sender);
	ib.reverse();

	for(let i = 0; i < ib.length; i++){
		iphone.setMess(ib[i].id, ib[i].sender, ib[i].receiver, ib[i].content, ib[i].date);
	}

	this.newMess = iphone.getNewMess();

	// this.newMess = iphone.getArchiveMess();

	if (newMess.length > 0) {
		for(let i = 0; i < this.newMess.length; i++){
			let text1 = "";
			if(this.newMess[i].sender == sender) {
				text1 += "<li id='mess" + newMess[i].id + "' class='right clearfix mess'>";
				text1 += "<span class='chat-img pull-right'>";
				text1 += "<img src='http://placehold.it/50/55C1E7/fff&text=" + newMess[i].receiver.substring(0, 2).toUpperCase() + "' alt='User Avatar' class='img-circle' />";
				text1 += "</span>";
				text1 += "<div class='chat-body clearfix'>";
				text1 += "<div class='divhode' style='width: 30px; line-height: 50px; float: left;'>";
				text1 += "<input type='checkbox' name='messip[]' value='"+ newMess[i].id +"'></div>"
				text1 += "<div class='header'>";
				text1 += "<small class='pull-left text-muted'><span class='glyphicon glyphicon-time'></span>" + this.newMess[i].date + "</small>"
				text1 += "<strong class='primary-font'>" + this.newMess[i].receiver + "</strong>";
				text1 += "</div>";
				text1 += "<p style='text-align: left'>" + this.newMess[i].content + "</p>";
				// eName.prepend(text1);
			}
			else {
				text1 += "<li id='mess" + newMess[i].id + "' class='right clearfix mess'>";
				text1 += "<span class='chat-img pull-right'>";
				text1 += "<img src='http://placehold.it/50/FA6F57/fff&text=" + newMess[i].sender.substring(0, 2).toUpperCase() + "' alt='User Avatar' class='img-circle' />";
				text1 += "</span>";
				text1 += "<div class='chat-body clearfix'>";
				text1 += "<div class='divhode' style='width: 30px; line-height: 50px; float: left;'>";
				text1 += "<input type='checkbox' name='messip[]' value='"+ newMess[i].id +"'></div>"
				text1 += "<div class='header'>";
				text1 += "<small class='pull-left text-muted'><span class='glyphicon glyphicon-time'></span>" + this.newMess[i].date + "</small>"
				text1 += "<strong class='primary-font'>" + this.newMess[i].sender + "</strong>";
				text1 += "</div>";
				text1 += "<p style='text-align: left'>" + this.newMess[i].content + "</p>";
				// eName.prepend(text1);
			}
			// eName.append(text1);
			eName.prepend(text1);
		}
	}
	
}

function editIP() {
	$("#IPHONE .divhode").css("display", 'block');
	$("#IPHONE .delete").css("display", 'block');
	$("#IPHONE .cancel").css("display", 'block');
}

function cancelIP() {
	unCheckAll();
	$("#IPHONE .divhode").css("display", 'none');
	$("#IPHONE .delete").css("display", 'none');
	$("#IPHONE .cancel").css("display", 'none');
}

function setDraftNokia() {
	nokia.setDraft(txtNO.value);
}

function setDraftiPhone() {
	iphone.setDraft(txtIP.value);
}

function turnPowerNO(){
	this.onPowerNO = setInterval(function(){
		if (nokia.battery <= 0){
			nokia.battery = 0;
			document.getElementById('togglePowerNO').checked = false;
			nokia.state = false;
			showHomeNO();
			disableScreen("#NOKIA", "none", 0.4);
			clearInterval(onPowerNO);
			clearTimeout(clocktime);
		}
		else {
			nokia.state = true;
			nokia.battery -= 1;
		}
		setBatterColor(nokia, "#NOKIA");
		$('#NOKIA').find(".txt-battery").html(" " + nokia.getBattery() + "%");
	}, 1500);
}

function turnPowerIP(){
	this.onPowerIP = setInterval(function(){
		if (iphone.battery <= 0){
			iphone.battery = 0;
			document.getElementById('togglePowerIP').checked = false;
			iphone.state = false;
			showHomeIP();
			disableScreen("#IPHONE", "none", 0.4);
			clearInterval(onPowerIP);
		}
		else {
			iphone.state = true;
			iphone.battery -= 1;
		}
		setBatterColor(iphone, "#IPHONE");
		$('#IPHONE').find(".txt-battery").html(" " + iphone.getBattery() + "%");
	}, 1500);
}

function turnChargeNO(){
	this.onChargeNO = setInterval(function(){
		nokia.setChargeBattery();
		$('#NOKIA').find(".txt-battery").html(" " + nokia.getBattery() + "%");
	}, 1000);
}

function turnChargeIP(){
	this.onChargeIP = setInterval(function(){
		iphone.setChargeBattery();
		$('#IPHONE').find(".txt-battery").html(" " + iphone.getBattery() + "%");
	}, 1000);
}

function switchPowerNO() {
	if(nokia.getState() == false) {
		document.getElementById('togglePowerNO').checked;
		nokia.setState(true);
		turnPowerNO();
		time();
		disableScreen("#NOKIA", "auto", 1);
	}
	else {
		clearTimeout(clocktime);
		nokia.setState(false);
		showHomeNO();
		disableScreen("#NOKIA", "none", 0.4);
		clearInterval(onPowerNO);
	}
}

function switchPowerIP() {
	if(iphone.getState() == false) {
		document.getElementById('togglePowerIP').checked;
		iphone.setState(true);
		turnPowerIP();
		disableScreen("#IPHONE", "auto", 1);
	}
	else {
		iphone.setState(false);
		showHomeIP();
		disableScreen("#IPHONE", "none", 0.4);
		clearInterval(onPowerIP);
	}
}

function switchChargeNO() {
	if(chargeNokia == false) {
		document.getElementById('toggleChargeNO').checked;
		chargeNokia = true;
		turnChargeNO();
		$("#NOKIA .charged").css("display", 'none');
		$("#NOKIA .charging").css("display", 'block');
	}
	else {
		chargeNokia = false;
		clearInterval(onChargeNO);
		$("#NOKIA .charged").css("display", 'block');
		$("#NOKIA .charging").css("display", 'none');
		setBatterColor(nokia, "#NOKIA");
	}
}

function switchChargeIP() {
	if(chargeiPhone == false) {
		document.getElementById('toggleChargeIP').checked;
		chargeiPhone = true;
		turnChargeIP();
		$("#IPHONE .charged").css("display", 'none');
		$("#IPHONE .charging").css("display", 'block');
	}
	else {
		chargeiPhone = false;
		clearInterval(onChargeIP);
		$("#IPHONE .charged").css("display", 'block');
		$("#IPHONE .charging").css("display", 'none');
		setBatterColor(iphone, "#IPHONE");
	}
}

function showHomeNO(){
	$("#NOKIA .home-menu").css("display", 'block');
	$("#NOKIA .div-compose").css("display", 'none');
	$("#NOKIA .div-inbox").css("display", 'none');
	$("#NOKIA .div-sent").css("display", 'none');
	$("#NOKIA .div-all").css("display", 'none');
	$("#NOKIA .card").css("visibility", 'hidden');
	$("#NOKIA .img-battery").css("border", "1px solid #fff");	
	$("#NOKIA .top").css("background-color", "#fff");	
	$("#NOKIA .txt-battery").css("color", "#fff");	
	$("#NOKIA .nokia-base-color").css("opacity", 0);	
	$("#NOKIA .time").css("color", "#fff");	
	$("#NOKIA .charge1, #NOKIA .charge2, #NOKIA .charge3, #NOKIA .charge4").css("background-color", "#52d668");
}

function showHomeIP(){
	$("#IPHONE .home-menu").css("display", 'block');
	$("#IPHONE .div-compose").css("display", 'none');
	$("#IPHONE .div-inbox").css("display", 'none');
	$("#IPHONE .div-sent").css("display", 'none');
	$("#IPHONE .div-all").css("display", 'none');
	$("#IPHONE .card").css("visibility", 'hidden');
	$("#iphone-draggable-home").css("display", "none");	
	$("#iphone-draggable-home").css("background-color", "#fff");	
	$("#IPHONE .iphone-img").css("background-image", "url('img/iphone4x6.png')");	
	$("#IPHONE .img-battery").css("border", "1px solid #fff");	
	$("#IPHONE .top").css("background-color", "#fff");	
	$("#IPHONE .txt-battery").css("color", "#fff");	
	$("#IPHONE .un-check-all").css("display", 'none');
    $("#IPHONE .select-all").css("display", 'block');
	cancelIP();
}

function changeBackgroundColorNO(label) {
		
	
	// $("#NOKIA .txt-battery").css("color", "#607d8b");
	$("#NOKIA .nokia-base-color").css("opacity", 1);	
	// $("#NOKIA .time").css("color", "#607d8b");
	switch(label) {
		case 'compose':
			$("#NOKIA .nokia-base-color").css("background-color", "#fafcff");
			$("#NOKIA .img-battery").css("border", "1px solid #9E9E9E");	
			$("#NOKIA .top").css("background-color", "#9E9E9E");
			$("#NOKIA .txt-battery").css("color", "#607d8b");
			$("#NOKIA .time").css("color", "#607d8b");
			$("#NOKIA .div-all").css("color", "#000");
			$("#NOKIA .div-all .text-muted").css("color", "#000 !important");
			$("#NOKIA .charge1, #NOKIA .charge2, #NOKIA .charge3, #NOKIA .charge4").css("background-color", "#52d668");
			break;
		case 'inbox':
			$("#NOKIA .nokia-base-color").css("background-color", "#cc4477");
			$("#NOKIA .img-battery").css("border", "1px solid #fff");
			$("#NOKIA .top").css("background-color", "#fff");
			$("#NOKIA .txt-battery").css("color", "#fff");
			$("#NOKIA .time").css("color", "#fff");
			$("#NOKIA .div-inbox").css("color", "#fff");
			$("#NOKIA .div-inbox .text-muted").css("color", "#fff !important");
			break;
		case 'all':
			$("#NOKIA .nokia-base-color").css("background-color", "#59ca3c");
			$("#NOKIA .img-battery").css("border", "1px solid #fff");
			$("#NOKIA .top").css("background-color", "#fff");
			$("#NOKIA .txt-battery").css("color", "#fff");
			$("#NOKIA .time").css("color", "#fff");
			$("#NOKIA .div-all").css("color", "#fff");
			$("#NOKIA .div-all .text-muted").css("color", "#fff !important");
			$("#NOKIA .charge1, #NOKIA .charge2, #NOKIA .charge3, #NOKIA .charge4").css("background-color", "#fff");
			break;
	}

}

function changeBackgroundColorIP() {
	$("#IPHONE  #iphone-draggable-home").css("display", "block");	
	$("#IPHONE  #iphone-draggable-home").css("background-color", "#49494e");	
	$("#IPHONE  .iphone-img").css("background-image", "url('img/iphone4x6child.png')");	
	$("#IPHONE  .img-battery").css("border", "1px solid #9E9E9E");	
	$("#IPHONE  .top").css("background-color", "#9E9E9E");
	$("#IPHONE  .txt-battery").css("color", "#607d8b");
}

function showComposeNO() {
	$("#NOKIA .div-inbox").css("display", 'none');
	$("#NOKIA .div-sent").css("display", 'none');
	$("#NOKIA .div-all").css("display", 'none');
	$("#NOKIA .div-compose").css("display", 'block');
	$("#NOKIA .compose").html("");
	txtNO.value = nokia.getDraft();
	$("#NOKIA .home-menu").css("display", 'none');
	$("#NOKIA .card").css("visibility", 'hidden');
	changeBackgroundColorNO('compose');
}

actionClickInboxNO('#NOKIA .home-inbox');

function actionClickInboxNO(elementId) {
	let longpress = false;

    $(elementId).on('click', function (e) {
        (longpress) ?  e.preventDefault() : getInboxNO('#NOKIA', 'NO', 'iphone', 'nokia');
    });
    
    let startTime, endTime;
    $(elementId).on('mousedown', function () {
        startTime = new Date().getTime();
    });

    $(elementId).on('mouseup', function () {
        endTime = new Date().getTime();

        if (endTime - startTime < 200) {
            longpress = false;
        } else {
            longpress = true;
        }
        startTime = endTime = 0;
    });
}

actionClickAllNO('#NOKIA .home-all');

function actionClickAllNO(elementId) {
	let longpress = false;

    $(elementId).on('click', function (e) {
        (longpress) ?  e.preventDefault() : allMessageNO('#NOKIA', 'NO', 'all', 'nokia');
    });
    
    let startTime, endTime;
    $(elementId).on('mousedown', function () {
        startTime = new Date().getTime();
    });

    $(elementId).on('mouseup', function () {
        endTime = new Date().getTime();

        if (endTime - startTime < 200) {
            longpress = false;
        } else {
            longpress = true;
        }
    });
}


actionClickInboxIP('#IPHONE .home-inbox');

function actionClickInboxIP(elementId) {
	let longpress = false;

    $(elementId).on('click', function (e) {
        (longpress) ?  e.preventDefault() : getInboxIP('#IPHONE', 'IP', 'iphone');
    });
    
    let startTime, endTime;
    $(elementId).on('mousedown', function () {
        startTime = new Date().getTime();
    });

    $(elementId).on('mouseup', function () {
        endTime = new Date().getTime();

        if (endTime - startTime < 200) {
            longpress = false;
        } else {
            longpress = true;
        }
    });
}


actionClickAllIP('#IPHONE .button-home');

function actionClickAllIP(elementId) {
	let longpress = false;

    $(elementId).on('click', function (e) {
        (longpress) ?  e.preventDefault() : showAllMessageIP('#IPHONE', 'IP', 'all', 'iphone');
    });
    
    let startTime, endTime;
    $(elementId).on('mousedown', function () {
        startTime = new Date().getTime();
    });

    $(elementId).on('mouseup', function () {
        endTime = new Date().getTime();

        if (endTime - startTime < 200) {
            longpress = false;
        } else {
            longpress = true;
        }
    });
}

function showComposeIP() {
	$("#IPHONE .div-inbox").css("display", 'none');
	$("#IPHONE .div-sent").css("display", 'none');
	$("#IPHONE .div-all").css("display", 'none');
	$("#IPHONE .div-compose").css("display", 'block');
	$("#IPHONE .compose").html("");
	txtIP.value = iphone.getDraft();
	$("#IPHONE .home-menu").css("display", 'none');
	$("#IPHONE .card").css("visibility", 'hidden');
	changeBackgroundColorIP();
	cancelIP();
}

function showInbox(id) {
	$(id + " .div-inbox").css("display", 'block');
	$(id + " .div-compose").css("display", 'none');
	$(id + " .div-sent").css("display", 'none');
	$(id + " .div-all").css("display", 'none');
	$(id + " .home-menu").css("display", 'none');
	$(id + " .card").css("visibility", 'visible');
}

function showSent(id) {
	$(id + " .div-sent").css("display", 'block');
	$(id + " .home-menu").css("display", 'none');
}

function showAll(id) {
	$(id + " .div-all").css("display", 'block');
	$(id + " .div-inbox").css("display", 'none');
	$(id + " .div-compose").css("display", 'none');
	$(id + " .div-sent").css("display", 'none');
	$(id + " .home-menu").css("display", 'none');
	$(id + " .card").css("visibility", 'visible');
}

function disableScreen(id, point, opac) {
	$(id + " .panel-primary").css("pointer-events", point);
	$(id + " .panel-primary").css("opacity", opac);
}

function setBatterColor(deviceName, id) {
	if (deviceName.getBattery() <= 20) {
		$(id + " .charged").css("background-color", "red");
	}
	else {
		$(id + " .charged").css("background-color", "#43c743");	
	}
	let perc = deviceName.getBattery() * 27 / 100;
	$(id + " .charged").css("width", perc);
}

$(function() {
	$("#iphone-draggable-home").draggable({ axis: "y" });
	$("#iphone-draggable-home").draggable({ revert: true });
	$("#iphone-draggable-home").draggable({
		stop: function() {
        	var x = $("#iphone-draggable-home").position();
        	if (x.top >= 10) {
        		showHomeIP();
        	}
		}
	});

	$("#iphone-draggable").draggable({ axis: "y" });
	$("#iphone-draggable").draggable({ revert: true });
	$("#iphone-draggable").draggable({
        stop: function() {
        	// coordinates('#draggable-iphone');
        	let top = $("#iphone-draggable").position().top;
        	if (top >= 20) {
        		showAllMessageIP('#IPHONE', 'IP', 'all', 'iphone');
        		// getInboxIP('#IPHONE', 'IP', 'nokia', 'iphone');
        	}
		}
	});

	$("#nokia-draggable").draggable({ axis: "y" });
	$("#nokia-draggable").draggable({ revert: true });
	$("#nokia-draggable").draggable({
		drag: function(){
        },
        stop: function() {
			let top = $("#nokia-draggable").position().top;
        	if (top >= 20) {
        		getInboxNO('#NOKIA', 'NO', 'iphone', 'nokia');
        	}
		}
	});
} );

// var coordinates = function(element) {
//     element = $(element);
//     let top = element.position().top;
//     if (top >= 50) {
//     	inbox('#IPHONE', 'IP', 'inboxIP', 'nokia', 'iphone');
//     }
// }

$.fn.mouseHold = function(time, callback) {
    var timer;
    $(this).on("mousedown", function(e){
        e.preventDefault();
        timer = setTimeout(callback.bind(this, e), time);
    }.bind(this)).on("mouseup", function(e){
        clearTimeout(timer);
    });
};

//divhode delete message
$('#nokia-draggable').mouseHold(1000, function() {
	$("#NOKIA .divhode").css("display", 'block');
});

$('#iphone-draggable').mouseHold(1000, function() {
	$("#IPHONE .divhode").css("display", 'block');
	editIP();
});


function selectAll() {
    var checkboxes = document.getElementsByName('messip[]');
    for (var i = 0; i < checkboxes.length; i++){
    	checkboxes[i].checked = true;
    }

    $("#IPHONE .select-all").css("display", 'none');
    $("#IPHONE .un-check-all").css("display", 'block');
    
}

function unCheckAll() {
    var checkboxes = document.getElementsByName('messip[]');
    for (var i = 0; i < checkboxes.length; i++){
    	checkboxes[i].checked = false;
    }

    $("#IPHONE .un-check-all").css("display", 'none');
    $("#IPHONE .select-all").css("display", 'block');
}

function deleteMessage() {
	// var lis = document.querySelectorAll('#IPHONE ul li');
	// var mes = document.getElementsByName('name[]');
	
	// for(var i=0; li=lis[i]; i++) {
	// 	if (mes[i].checked) {
	// 		var myCoolDiv = document.getElementById("mess"+mes[i].value);
	// 	    // li.parentNode.removeChild(li);
	// 	    myCoolDiv.remove();
	// 	}
	// }

	var checkboxes = document.getElementsByName('messip[]');
	var arr = [];
    for (let i = 0; i < checkboxes.length; i++){
    	if(checkboxes[i].checked == true) {
    		arr.push(checkboxes[i].value);
    	}
    }

    for (let i = 0; i < arr.length; i++) {
    	var myCoolDiv = document.getElementById("mess"+arr[i]);
		myCoolDiv.remove();

		const ios = iphone.archiveMess.filter((item) => {
	       if (item.id == arr[i]) {
	           item.status = 4;
	        }
        });
    }
    cancelIP();
    
}


