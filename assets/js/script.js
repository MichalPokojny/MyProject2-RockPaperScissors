// changing color for word "Game"
function changeColor(){
let i = 0;
let colors = ['black','blue', 'red', 'orange', 'pink'];
// Triggers every two second
function changeColor(){
    document.getElementById("game-heading").style.color = colors[i];
    i++; 
}
setInterval(changeColor, 2000);
}
changeColor();

// Add rules text when clicked
function rules (){
    let rulesText = document.getElementById("rules-open");
    rulesText.innerHTML = 
   `<ul>
    <li>Scissors cuts paper</li>
    <li>Paper covers rock</li>
    <li>Rock crushes lizard</li>
    <li>Lizard poisons Spock</li>
    <li>Spock smashes scissors</li>
    <li>Scissors decapitates lizard</li>
    <li>Lizard eats paper</li>
    <li>Paper disproves Spock</li>
    <li>Spock vaporizes rock, </li>
    <li>Rock crushes scissors</li>
    </ul>`   
} 
let rulesButton = document.getElementById("rules-list")
rulesButton.addEventListener("click", rules);


