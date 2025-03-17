//Select Player Action Option
let playerActionsOptions = ["Attack", "Damage", "Skip"];
let index = 0;

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

//ENTER KEY EVENT LISTENER
let playerBattleOptionMenu = true;
window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (playerBattleOptionMenu === true) {
      if (index === 0) {
        alert("one");
      } else if (index === 1) {
        alert("two");
      } else if (index === 2) {
        alert("three");
      }
    }
  }
});

//  GETS BUTTON OPTIONS TO STOP FUNCTIONING!!!
//function words(){
//    playerBattleOptionMenu = false
//}


//HEALTH SYSTEMS
