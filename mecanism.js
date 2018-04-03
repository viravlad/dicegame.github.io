var player=1;
var result=0;
var scores=[0,0]



function add(){

 var randomNumber=Math.floor(Math.random()*6)+1;
 result+=randomNumber;
 
if(randomNumber!==1){
 	document.getElementById("player-score"+player).innerHTML=result;
}else{
	if(player===0){
		player=1;
		result=0
		document.getElementById("player-score0").innerHTML=0;
	}else if(player===1){
		player=0
		result=0
		document.getElementById("player-score1").innerHTML=0;
	}
}




}

function stop(){
    
	scores[player]+=result;
	var a=document.getElementById("getScore"+player).innerHTML=scores[player];
	nextPlayer();
	if(a>=100){
		alert("PLAYER"+player+"is the winner!")
	}
}

function nextPlayer(){
	if(player===0){
		player=1;
		result=0
		document.getElementById("player-score0").innerHTML=0;
	}else if(player===1){
		player=0
		result=0
		document.getElementById("player-score1").innerHTML=0;
	}
}

function start(){
	document.getElementById("player-score0").innerHTML=0;
	document.getElementById("player-score1").innerHTML=0;
	document.getElementById("getScore0").innerHTML=0;
	document.getElementById("getScore1").innerHTML=0;
}