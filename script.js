function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  return getHumanChoice(number);
}

function getHumanChoice(number) {
  if (number == 0) return "rock";
  if (number == 1) return "paper";
  if (number == 2) return "scissors";
}

function playRound(humanC, computerChoice) {
  let humanChoice = humanC.toLowerCase();
  if (humanChoice === "rock" && computerChoice === "rock") return "It's a tie!";
  if (humanChoice === "rock" && computerChoice === "paper")
    return "You lose! Paper beats Rock.";
  if (humanChoice === "rock" && computerChoice === "scissors")
    return "You win! Rock beats Scissors.";
  if (humanChoice === "paper" && computerChoice === "paper")
    return "It's a tie!";
  if (humanChoice === "paper" && computerChoice === "rock")
    return "You win! Paper beats Rock.";
  if (humanChoice === "paper" && computerChoice === "scissors")
    return "You lose! Scissors beats Paper.";
  if (humanChoice === "scissors" && computerChoice === "scissors")
    return "It's a tie!";
  if (humanChoice === "scissors" && computerChoice === "rock")
    return "You lose! Rock beats Scissors.";
  if (humanChoice === "scissors" && computerChoice === "paper")
    return "You win! Scissors beats Paper.";
  else return "Error";
}

function checkWin(){
  if (playerScore == 5 || computerScore == 5){
    btn1.setAttribute('disabled', '');
    btn2.setAttribute('disabled','');
    btn3.setAttribute('disabled','');
    const ending = document.createElement("div");
    ending.textContent = "We have a winner! Refresh the page to play again."
    ending.style.cssText = "font-size: 40px; margin-top: 20px; display: flex; justify-content: center;";
    document.body.appendChild(ending);
  }
}

const holder = document.querySelector("#holder");
let playerScore = 0, computerScore = 0;
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

btn1.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("round-result");
  div.textContent = playRound(btn1.textContent, getComputerChoice());
  holder.appendChild(div);
  if(div.textContent.includes("win")){
    playerScore++;
    const playerPlus = document.querySelector("#player-score");
    playerPlus.textContent = `Player:  ${playerScore}`;
  }
  if(div.textContent.includes("lose")){
    computerScore++;
    const computerPlus = document.querySelector("#computer-score");
    computerPlus.textContent = `Computer:  ${computerScore}`;
  }
  checkWin();
  
});

btn2.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("round-result");
  div.textContent = playRound(btn2.textContent, getComputerChoice());
  holder.appendChild(div);
  if(div.textContent.includes("win")){
    playerScore++;
    const playerPlus = document.querySelector("#playerScore");
    playerPlus.textContent = "Player:  ${playerScore}";
  }
  if(div.textContent.includes("lose")){
    computerScore++;
    const computerPlus = document.querySelector("#computer-score");
    computerPlus.textContent = `Computer:  ${computerScore}`;
  }
  checkWin();
});

btn3.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("round-result");
  div.textContent = playRound(btn3.textContent, getComputerChoice());
  holder.appendChild(div);
  if(div.textContent.includes("win")){
    playerScore++;
    const playerPlus = document.querySelector("#playerScore");
    playerPlus.textContent = "Player:  ${playerScore}"
  }
  if(div.textContent.includes("lose")){
    computerScore++;
    const computerPlus = document.querySelector("#computer-score");
    computerPlus.textContent = "Computer:  ${computerScore}";
  }
  checkWin();
});

