const rockButton = document.querySelector("button.rock")
const paperButton = document.querySelector("button.paper")
const scissorsButton = document.querySelector("button.scissors")
const score = document.querySelector("div.score")
const playerAnswer = document.querySelector("p.playersAnswer")
const computerAnswer = document.querySelector("p.computersAnswer")
const winner = document.querySelector("div.winner")

rockButton.addEventListener('click',() => playGame("rock"))
paperButton.addEventListener('click',() => playGame("paper"))
scissorsButton.addEventListener('click',() => playGame("scissors"))


let answers = ['rock','paper','scissors']
//generate computers answer
function getComputersAnswer(){
    let randomNumber = Math.floor(Math.random() * 3)
    return(answers[randomNumber])
}
//decide the winner
function DecideWinner(computerA,playerA){

    if (computerA == playerA)
    {
        return("draw")
    }
    if(computerA == "rock" && playerA == "scissors"){
        return("computer")
    }
    else if(computerA == "paper" && playerA == "rock")
    {
        return("computer")
    }
    else if(computerA == "scissors" && playerA == "paper")
    {
        return("computer")
    }
    else{
        return("player")
    }
}
//game
let playerScore = 0
let computerScore = 0

function updateUI(computersA,playersA,result){
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`
    playerAnswer.textContent = `players answer: ${playersA}`
    computerAnswer.textContent = `computers answer: ${computersA}`
    winner.textContent = `winner is: ${result}`
}
function playGame(playersA){
        let currentComputerAnswer = getComputersAnswer()
        let result = DecideWinner(currentComputerAnswer,playersA)
        if(result == "computer")
        {
            computerScore++
        }
        else if(result == "player")
        {
            playerScore++
        }
        else{
        }
        updateUI(currentComputerAnswer,playersA,result)
        if (playerScore >= 5 || computerScore >= 5)
        {
            if(playerScore > computerScore)
            {
                alert("player won")
                location.reload()
            }
            else
            {
                alert("computer won")
                location.reload()
            }
        }

}
//playGame()
