// changing color every 2 second for word "Game"
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
    if( rulesText.textContent === ""){
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
    <li>Spock vaporizes rock</li>
    <li>Rock crushes scissors</li>
    </ul>`;  
} else {
    rulesText.innerHTML = "";
}  
} 
let rulesButton = document.getElementById("rules-list");
rulesButton.addEventListener("click", rules);


// Declare variables for DOM elements
 
let buttons = document.getElementsByClassName("btn");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let playerImage = document.getElementById("player-image");
let computerImage = document.getElementById("computer-image");
let message = document.getElementById("message");
let choice = ["rock", "paper", "scissors", "lizard", "spock"];

// Add event listeners to buttons

for (let button of buttons) {
    button.addEventListener("click", function() {
        let playerChoice = parseInt(this.getAttribute("data-choice"));
        playGame(playerChoice);
    });
}

// Adding image to chosen gesture

function playGame(playerChoice) {
    playerImage.src = `assets/images/${choice[playerChoice]}.png`;
    playerImage.alt = choice[playerChoice];
    
    let computerChoice = parseInt(Math.floor(Math.random() * 5));
    computerImage.src = `assets/images/${choice[computerChoice]}.png`;
    computerImage.alt = choice[computerChoice];
    checkAnswer(playerChoice, computerChoice);
}

// Checks both answers and pritining result

function checkAnswer (playerChoice, computerChoice) {
    if(playerChoice == computerChoice) {
        message.innerHTML= `<p>Draw</p>`;
    } else if (playerChoice === 0 && computerChoice === 1){
        message.innerHTML= `<p>Computer Wins!</p>`;
        ComputerWins();
    } else if (playerChoice === 0 && computerChoice === 2){
        message.innerHTML= `<p>Player Wins!</p>`;
        playerWins();
    } else if (playerChoice === 0 && computerChoice === 3){
        message.innerHTML= `<p>Player Wins!</p>`;
        playerWins();
    } else if (playerChoice === 0 && computerChoice === 4){
        message.innerHTML= `<p>Computer Wins!</p>`;
        ComputerWins();
    } else if (playerChoice === 1 && computerChoice === 0){
        message.innerHTML= `<p>Player Wins!</p>`;
        playerWins();
    } else if (playerChoice === 1 && computerChoice === 2){
        message.innerHTML= `<p>Computer Wins!</p>`;
        ComputerWins();
    } else if (playerChoice === 1 && computerChoice === 3){
        message.innerHTML= `<p>Computer Wins!</p>`;
        ComputerWins();
    } else if (playerChoice === 1 && computerChoice === 4){
        message.innerHTML= `<p>Player Wins!</p>`;
        playerWins();
    } else if (playerChoice === 2 && computerChoice === 0){
        message.innerHTML= `<p>Computer Wins!</p>`;
        ComputerWins();
    } else if (playerChoice === 2 && computerChoice === 1){
        message.innerHTML= `<p>Player Wins!</p>`;
        playerWins();
    } else if (playerChoice === 2 && computerChoice === 3){
        message.innerHTML= `<p>Player Wins!</p>`;
        playerWins();
    } else if (playerChoice === 2 && computerChoice === 4){
        message.innerHTML= `<p>Computer Wins!</p>`;
        ComputerWins();
    } else if (playerChoice === 3 && computerChoice === 0){
        message.innerHTML= `<p>Computer Wins!</p>`;
        ComputerWins();
    } else if (playerChoice === 3 && computerChoice === 1){
        message.innerHTML= `<p>Player Wins!</p>`;
        playerWins();
    } else if (playerChoice === 3 && computerChoice === 2){
        message.innerHTML= `<p>Computer Wins!</p>`;
        ComputerWins();
    } else if (playerChoice === 3 && computerChoice === 4){
        message.innerHTML= `<p>Player Wins!</p>`;
        playerWins();
    } else if (playerChoice === 4 && computerChoice === 0){
        message.innerHTML= `<p>Player Wins!</p>`;
        playerWins();
    } else if (playerChoice === 4 && computerChoice === 1){
        message.innerHTML= `<p>Computer Wins!</p>`;
        ComputerWins();
    } else if (playerChoice === 4 && computerChoice === 2){
        message.innerHTML= `<p>Player Wins!</p>`;
        playerWins();
    } else if (playerChoice === 4 && computerChoice === 3){
        message.innerHTML= `<p>Computer Wins!</p>`;
        ComputerWins();
    }              
}
// Function for adding score for player or computer
function playerWins(){
    ++playerScore.innerHTML;
}
function ComputerWins(){
    ++computerScore.innerHTML;
}