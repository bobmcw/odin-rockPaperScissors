let answers = ['rock','paper','scissors']
//generate computers answer
function getComputersAnswer(){
    let randomNumber = Math.floor(Math.random() * 3)
    return(answers[randomNumber])
}
console.log(getComputersAnswer())
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
console.log(DecideWinner("rock","paper"))
//game