function start(){
	intro();
}

function intro(){
	addQueue("Welcome to textWar", "h1");
	addQueue("A game about WW II.", "h2");
	addQueue("Let's play!", 'a onclick="init()" ');
}

function init(){
	clear();
	addQueue("Date: 1 September 1939", "b");
	addQueue("Alright Sergeant", "h1");
	addQueue("Europe is in war, we'd better be prepared. Nazi germany has invaded Poland.", "p");

	addQueue("Start defending your country.", 'a onclick="gameStart()" ');
}

function gameStart(){
	
}