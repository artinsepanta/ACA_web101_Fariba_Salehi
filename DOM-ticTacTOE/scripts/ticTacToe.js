
  function startGame(){
    document.trun="X" ;

    setMessage(document.turn + " gets to start.");

  }
  function setMessage(msg){
    document.getElementById("message").innerText=msg;
  }
  function nextMove(square){
   square.innerText=document.turn;
   switchTurn();
  }
  function switchTurn(){
    if (document.turn=="X"){
        document.turn="O";
    } else{
         document.turn="X";
    }
       setMessage("It's"= document.turn+ " 's turn!");
  }

var gameMarker=document.getElementsById("x").innerHTML;
 
function markSquare(){
  
  document.getElementsByClassName("square")[0 ,1,2,3,4,5,6,7,8.].innerHTML="x";
}
function  changeMarkerToX(){
  var gameMarker = "X"
  console.log("The x button was clicked!");
}
function  changeMarkerO(){
  var gameMarker = "0"
  console.log("The x button was clicked!");
}

function placeMark(){ 
  var whenEachSquareIsClicked=document.getElementsById("").innerHTML,
}

