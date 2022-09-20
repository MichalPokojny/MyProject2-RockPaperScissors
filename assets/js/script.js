let i = 0;
let colors = ['black','blue', 'red', 'orange', 'pink'];
// Triggers every two second
function changeColor(){
    document.getElementById("game-heading").style.color = colors[i];
    i++;
    
}
setInterval(changeColor, 2000);