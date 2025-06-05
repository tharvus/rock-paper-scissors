
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    /**
     * Returns a choice between rock, paper and scissors from the computer. 
     */
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);

    return choices[randomNum];
}

const updateMsg = (newMsg) => {
    // get element
    const divNode = document.querySelector("div.resultsDiv");
    const msgNode = document.querySelector("div.resultsDiv .resultOfRound");
    console.log(msgNode.textContent);

    msgNode.textContent = newMsg;

}

const updateScore = (recipient) => {
    /**
     * Update the scoreboard
     */

    const humanScoreNode = document.querySelector(".humanScore");
    const computerNodeScore = document.querySelector(".computerScore");
    if (recipient === "human") {
        humanScore += 1;
        humanScoreNode.textContent = humanScore;
    } else {
        // update score for computer
        computerScore += 1;
        computerNodeScore.textContent = computerScore;
    }

    if (humanScore === 5) {
        // show some message
        alert("You win this game!!");
        // reset variables
        humanScoreNode.textContent = 0;
        computerNodeScore.textContent = 0;
        
        
    } else if (computerScore === 5) {
        // show some message
        alert("You lose this game!!");
        humanScoreNode.textContent = 0;
        computerNodeScore.textContent = 0;
        humanScore = 0;
        computerScore = 0;
    }
    

    return;
}

const playRound = (e) => {
    // closest traverses element and its parent by going to the root and checks for the argument
    console.log(e.target.closest("[data-value]"));
    const nodeToCheck = e.target.closest("[data-value]");

    // console.log(e.target.value);
    const humanChoice = nodeToCheck.dataset.value;
    const computerChoice = getComputerChoice();
    let msg = "";

    if (humanChoice === computerChoice) {
        msg = "No one won! Its a tie!!";
        updateMsg(msg);
        return;
    }
    console.log(`Human's choice: ${humanChoice}`);
    console.log(`Computer's choice: ${computerChoice}`);
    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
        msg = "You win! You get 1 point!";
        
        updateScore("human");
        updateMsg(msg);
        
    } else {
        // only update score for computer
        msg = "You lose! Computer gets 1 point!";
        updateScore("computer");
        updateMsg(msg);
    }

    return;
}

// create an event listener
const optionBtnRock = document.querySelector(".optionBtnRock");
const optionBtnScissors = document.querySelector(".optionBtnScissors");
const optionBtnPaper = document.querySelector(".optionBtnPaper");

optionBtnRock.addEventListener("click", playRound);
optionBtnPaper.addEventListener("click", playRound);
optionBtnScissors.addEventListener("click", playRound);
