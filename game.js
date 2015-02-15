var modal;

function start(){
	if(playing == false){
		intro();
	}else{
		gameStart();
	}
}

function intro(){
	addQueue("Welcome to textWar", "h1");
	addQueue("A game about WW II.", "h2");
	addQueue("Let's play!", 'a onclick="init()" ');
}

function init(){
	clear();
	addQueue("Date: 1 September 1939", "b");
	addQueue("Alright Sergeant,", "h1");
	addQueue("Europe is at war, Nazi Germany has invaded Poland. We'd better be prepared.", "p");

	addQueue("Start defending your country.", 'a onclick="first()" ');
}

function first(){
	playing = true;
	gameSave();

	gameStart();
}

function gameStart(){
	clear();

	addQueue("Welcome back!", "h1");

	initButtons();
	addSomeModal();
}

function initButtons(){
	$("#app").append("<div id='buttons' class='bottom'></div>");
	$("#buttons").append("<button onclick='recruit()'>Recruit</button>");
	$("#buttons").append("<button onclick='develop()'>Develop</button>");
	$("#buttons").append("<button onclick='money()'>Money</button>");
	$("#buttons").append("<button onclick='war()'>War</button>");
}

function addSomeModal(){
	$("#app").append('<div id="modal" class="mainModal"></div>');
	modal = $("#modal");

    modal.easyModal({
    	top: 100,
		overlayOpacity: 0.2
    });
}

function recruit(){
	openModal('recruit');
}
function develop(){
	openModal('develop');
}
function money(){
	openModal('money');
}
function war(){
	openModal('war');
}


function openModal(type){
	modal.html('');

	switch (type) {
    	case "recruit":
    		modal.append("<h1>Recruit:</h1> <div class='right-header'>Balance: $ <span class='dollars'></span></div><br>");
    		modal.append("<button>Soldier</button> <span class='soldiers'></span> soldiers.<br>");
        	break;
    	case "develop":
    		modal.append("<h1>Develop:</h1> <div class='right-header'>Balance: $ <span class='dollars'></span></div><br>");
       		break;
       	case "money":
       		modal.append("<h1>Money:</h1> <div class='right-header'>Balance: $ <span class='dollars'></span></div><br>");
       		break;
       	case "war":
       		modal.append("<h1>War:</h1> <div class='right-header'>Balance: $ <span class='dollars'></span></div><br>");
       		break;
	}

	modal.trigger('openModal');
}