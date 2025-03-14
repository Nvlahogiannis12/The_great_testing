//Select Player Action Option
let playerActionsOptions = ['Attack', 'Shop', 'Skip']
let index = 0

window.addEventListener('keydown', (event) => {
    if(event.key === "ArrowRight" || event.key === "ArrowDown"){
        index++
        if (index > playerActionsOptions.length - 1) index = 0;
        for (let i = 0; i < playerActionsOptions.length; i++) {
            document.getElementsByClassName("selectionBox")[i].textContent = playerActionsOptions[i]
        }
        document.getElementsByClassName("selectionBox")[index].textContent = "> " + document.getElementsByClassName("selectionBox")[index].textContent;
    //alert(playerActionsOptions[index])
    }
else if (event.key === "ArrowLeft" || event.key === "ArrowUp"){
    index--
    if (index < 0) index = playerActionsOptions.length - 1;
    
    //alert(playerActionsOptions[index])
}
})
document.getElementById('firstOptionButton').innerHTML = "> " + playerActionsOptions[0]
document.getElementById('secondOptionButton').innerHTML = playerActionsOptions[1]
document.getElementById('thirdOptionButton').innerHTML = playerActionsOptions[2]
