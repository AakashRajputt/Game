function playGame(userChoice){

let choices = ["rock","paper","scissors"]

let computerChoice = choices[Math.floor(Math.random()*3)]

document.getElementById("user-choice").innerHTML = "You chose: " + userChoice

document.getElementById("computer-choice").innerHTML = "Computer chose: " + computerChoice

let result = ""

if(userChoice === computerChoice){
result = "It's a Tie!"
}
else if(
(userChoice === "rock" && computerChoice === "scissors") ||
(userChoice === "paper" && computerChoice === "rock") ||
(userChoice === "scissors" && computerChoice === "paper")
){
result = "You Win!"
}
else{
result = "Computer Wins!"
}

document.getElementById("result").innerHTML = result

}