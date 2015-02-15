var messageList = [];
var messageQueue = [];

var playing = false;
var soldiers = 0;
var dollars = 0;

$('img').on('dragstart', function(event) { event.preventDefault(); });

function spanPopulate(){
	$(".soldiers").html(soldiers);
	$(".dollars").html(dollars);

	setTimeout(spanPopulate, 100);
}

function makeid(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

$(document).ready(function(){
	if(localStorage.getItem("save") == undefined){
		gameSave();
	}

	gameLoad();

	spanPopulate();
	
	console.log('textWar starting');
	setTimeout(function(){
		$("#app").html('');
		$("#app").append("<div id='messages'></div>");
		start();
	}, 2000);
	setTimeout(queuer, 2000);
});

function clear(){
	for(i = 0; i < messageList.length; i++){
		$("#"+messageList[i]).remove();
	}
}

function addQueue(text, contType){
	messageQueue.push({"text": text, "contType": contType, "duration": (text.length*100)+500});
}

function queuer(){
	if(messageQueue.length > 0){
		message(messageQueue[0].text, messageQueue[0].contType);
		setTimeout(queuer, messageQueue[0].duration);
		messageQueue.shift();
	}else{
		setTimeout(queuer, 100);
	}
}

function message(text, containerType){
	var id = makeid();
	messageList.push(id);
	$("#messages").append("<"+containerType+" id='"+id+"'></"+containerType+">");
	typeIt("#"+id, text);
	if(messageList.length > 5){
		$("#"+messageList[0]).remove();
		messageList.shift();
	}
	return text.length*100;
}

function typeIt(container, text){
	var id = makeid();
	$(container).append('<div id="'+id+'"></div>');

	var handler = $("#"+id);
	var i = 0;
	function f(){
    	handler.append(text[i]);
    	i++;
    	if( i < text.length ){
        	setTimeout( f, 100);
    	}
	}
	f();

	return id;
}

function gameSave(){
	var save = {
		"playing": playing,
		"soldiers": soldiers,
		"dollars": dollars
	}

	var json = JSON.stringify(save);

	localStorage.setItem("save", Base64.encode(json));
}

function gameLoad(){
	var save = Base64.decode(localStorage.getItem("save"));
	var json = JSON.parse(save);

	playing = json.playing;
	soldiers = json.soldiers;
	dollars = json.dollars;
}