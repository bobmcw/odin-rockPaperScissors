let answers = ['rock','paper','scissors']
//generate computers answer
function getComputersAnswer(){
    let randomNumber = Math.floor(Math.random() * 3)
    return(answers[randomNumber])
}
//get players answer
function getPlayersAnswer(){
    while(true)
    {
        let playersAnswer = prompt("what do you pick (rock,paper,scissors)")

        if(answers.includes(playersAnswer.toLowerCase()))
        {
            return(playersAnswer.toLowerCase())
        }
        else
        {
            console.log("you did not pick a valid option")
            
        }
    }

}
// console.log(getPlayersAnswer())

//decide the winner
function DecideWinner(computerA,playerA){
    console.log(`computers answer is ${computerA}`)
    console.log(`players answer is ${playerA}`)

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
function playGame(){
    let playerScore = 0
    let computerScore = 0
    while(playerScore < 5 && computerScore < 5)
    {
        let result = DecideWinner(getComputersAnswer(),getPlayersAnswer())
        if(result == "computer")
        {
            console.log("computer wins")
            computerScore++
        }
        else if(result == "player")
        {
            console.log("player wins")
            playerScore++
        }
        else{
            console.log("draw")
        }
        console.log(`players score is ${playerScore} and computers score is ${computerScore}`)
    }
    if (playerScore > computerScore)
    {
        console.log("player wins!")
    }
    else
    {
        console.log("computer wins")
    }
}
playGame()
