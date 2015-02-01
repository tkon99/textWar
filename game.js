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

	addQueue("Start defending your country.", 'a onclick="gameStart()" ');
}

function gameStart(){
	clear();

	playing = true;
	gameSave();

	addQueue("Let's get started.", "b");
	initButtons();
}

function initButtons(){
	$("#app").append("<div id='buttons' class='bottom'></div>");
	$("#buttons").append("<button>Recruit</button>");
	$("#buttons").append("<button>Develop</button>");
	$("#buttons").append("<button>Money</button>");
	$("#buttons").append("<button>War</button>");
}