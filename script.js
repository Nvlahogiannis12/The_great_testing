//Select Player Action Option
let playerTurn = true
let playerActionsOptions = ["Attack", "Damage", "Option",];
let index = 0;
isPlayerTurn()

function isPlayerTurn(){
if(playerTurn === true){
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    index++;
    if (index > playerActionsOptions.length - 1) index = 0;
    for (let i = 0; i < playerActionsOptions.length; i++) {
      document.getElementsByClassName("selectionBox")[i].textContent =
        playerActionsOptions[i];
    }
    document.getElementsByClassName("selectionBox")[index].textContent =
      "> " + document.getElementsByClassName("selectionBox")[index].textContent;
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    index--;
    if (index < 0) index = playerActionsOptions.length - 1;
    for (let i = 0; i < playerActionsOptions.length; i++) {
      document.getElementsByClassName("selectionBox")[i].textContent =
        playerActionsOptions[i];
    }
    document.getElementsByClassName("selectionBox")[index].textContent =
      "> " + document.getElementsByClassName("selectionBox")[index].textContent;
  }
});
document.getElementById("firstOptionButton").innerHTML =
  "> " + playerActionsOptions[0];
document.getElementById("secondOptionButton").innerHTML =
  playerActionsOptions[1];
document.getElementById("thirdOptionButton").innerHTML =
  playerActionsOptions[2];



//ENTER KEY EVENT LISTENER & Move Output
let playerBattleOptionMenu = true;
window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (playerBattleOptionMenu === true) {
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
  }
});
//  GETS BUTTON OPTIONS TO STOP FUNCTIONING!!!
//function words(){
//    playerBattleOptionMenu = false
//}
} else if(playerTurn === false){
  alert('working...')
}
}



//HEALTH SYSTEMS
let playerHP = 100;

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
  playerTurn = false
  isPlayerTurn()
}