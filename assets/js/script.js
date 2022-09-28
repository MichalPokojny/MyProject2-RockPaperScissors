// Declare variables for DOM elements
 
let buttons = document.getElementsByClassName("btn");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let playerImage = document.getElementById("player-image");
let computerImage = document.getElementById("computer-image");
let message = document.getElementById("message");
let rulesButton = document.getElementById("rules-list");
let rulesListOpen = document.getElementsByClassName("rules-open");
const choice = ["rock", "paper", "scissors", "lizard", "spock"];
const colors = ['black','blue', 'red', 'orange', 'pink'];

// Change color every 2 second for word "Game"

function changeColor(){

let i = 0;

function changed(){
    document.getElementById("game-heading").style.color = colors[i];
    i++; 
}
setInterval(changed, 2000);
}
changeColor();

// Add rules text when clicked

rulesButton.addEventListener("click", rules);

function rules (){
    let rulesText = document.getElementById("rules-open");
    if( rulesText.classList.contains("hide") ){
    rulesText.classList.remove("hide");
} else {
    rulesText.classList.add("hide");
}  
}


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

