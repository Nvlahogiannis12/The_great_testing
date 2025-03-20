//Select Player Action Option
let playerTurn = true
let playerActionsOptions = ["Attack", "Damage", "Option",];
let index = 0;
let playerHP = 100;
isPlayerTurn()
updatePlayerActionOption()

function playerKeyDowns(event){
  if(playerTurn === false) return;
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    index++;
    updatePlayerActionOption()
    if (index > playerActionsOptions.length - 1) index = 0;
} else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
  index--;
  updatePlayerActionOption()
  if (index < 0) index = playerActionsOptions.length - 1;
} else if (event.key === 'Enter'){
  playerActionOptionSelected()
}
}

function updatePlayerActionOption(){
  for (let i = 0; i < playerActionsOptions.length; i++) {
    document.getElementsByClassName("selectionBox")[i].textContent =
      playerActionsOptions[i];
  }
  document.getElementsByClassName("selectionBox")[index].textContent =
      "> " + document.getElementsByClassName("selectionBox")[index].textContent;
}

function isPlayerTurn(){
  if (playerTurn === true){
window.addEventListener("keydown", playerKeyDowns);
  } else{
window.removeEventListener("keydown", playerKeyDowns);
  }
}



//ENTER KEY EVENT LISTENER & Move Output
function playerActionOptionSelected(){
if (playerTurn === false) return;
if (index === 0) {
  alert("one");
} else if (index === 1) {
  if(playerHP <= 0){
    //return stops function
    playerHP = 0;
    return;
  }
  playerHP -= 10;
  gameWin();
  alert(playerHP);
} else if (index === 2) {
  playerHP = 0;
  gameWin();
}
}

     
//  GETS BUTTON OPTIONS TO STOP FUNCTIONING!!!
//function words(){
//    playerBattleOptionMenu = false
//}



//HEALTH SYSTEMS

function gameWin() {
  let healthbar = document.getElementById("playerHealth");
        healthbar.setAttribute("style", `width: ${playerHP}%;`);
  if (playerHP <= 0) {
    alert("GAME OVER");
  }
}



//opponent turn stuff
/*
function(){
disable player stuff
delay
opponent move
re able moves
}
*/



//DEBUG STUFF (KEEP ON BOTTOM OF YOU'RE CODE):
window.addEventListener("keydown", (event) => {
  if(event.key === '!'){
   debugMode()
   alert("Debug Mode Active")
  }
})

function debugMode(){
  playerTurn = false;
  isPlayerTurn()
}
