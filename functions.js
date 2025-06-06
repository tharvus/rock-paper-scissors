
let humanScore = 0;
let computerScore = 0;
let roundNo = 1;
const MAX_SCORE = 5;
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

    const msgNode = document.querySelector("div.resultsDiv .resultOfRound");
    console.log(newMsg);

    msgNode.textContent = newMsg;

}

const updateScore = (recipient) => {
    /**
     * Update the scoreboard
     */

    const humanScoreNode = document.querySelector(".humanScore");
    const computerNodeScore = document.querySelector(".computerScore");
    const roundNoNode = document.querySelector("#roundNo");
    if (recipient === "human") {
        humanScore += 1;
        roundNo += 1;
        humanScoreNode.textContent = humanScore;

    } else {
        // update score for computer
        computerScore += 1;
        roundNo += 1;
        computerNodeScore.textContent = computerScore;
    }

    if (humanScore === MAX_SCORE) {

        // show some message
        // updating the node takes time so add this to the callback queue
        setTimeout(() => {
            alert("You win this game!!");
            humanScoreNode.textContent = 0;
            computerNodeScore.textContent = 0;
            roundNoNode.textContent = "Round 1";
            roundNo = 1;
            humanScore = 0;
            computerScore = 0;
            updateMsg("")
        }, 100)

    } else if (computerScore === MAX_SCORE) {
        // show some message

        setTimeout(() => {
            alert("You lose this game!!");
            humanScoreNode.textContent = 0;
            computerNodeScore.textContent = 0;
            roundNoNode.textContent = "Round 1";
            roundNo = 1;
            humanScore = 0;
            computerScore = 0;
            updateMsg("");
        }, 100)

    }

    roundNoNode.textContent = `Round ${roundNo}`;
    return;
}

const playRound = (e) => {
    // closest traverses element and its parent by going to the root and checks for the argument
    console.log(e.target.closest("[data-value]"));
    const nodeToCheck = e.target.closest("[data-value]");

    // console.log(e.target.value);
    const humanChoice = nodeToCheck.dataset.value;
    const computerChoice = getComputerChoice();
    const roundNoNode = document.querySelector("#roundNo");
    let msg = "";
    console.log(typeof humanChoice);
    console.log(typeof computerChoice);
    if (humanChoice === computerChoice) {
        msg = "No one won! Its a tie!!";
        roundNo += 1
        roundNoNode.textContent = `Round ${roundNo}`;
        updateMsg(msg);
        return;
    }
    console.log(`Human's choice: ${humanChoice}`);
    console.log(`Computer's choice: ${computerChoice}`);

    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
        msg = "You win! You get 1 point!";
        updateMsg(msg);
        updateScore("human");

    } else {
        // only update score for computer
        msg = "You lose! Computer gets 1 point!";
        updateMsg(msg);
        updateScore("computer");

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
