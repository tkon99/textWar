var messageList = [];
var messageQueue = [];

$('img').on('dragstart', function(event) { event.preventDefault(); });

function makeid(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

$(document).ready(function(){
	console.log('textWar starting');
	start();
	setTimeout(function(){
		$("#app").html('');
		$("#app").append("<div id='messages'></div>");
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