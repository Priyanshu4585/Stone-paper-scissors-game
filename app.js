let userScor = 0
let compScor = 0
const choices = document.querySelectorAll(".choice")

const msg = document.querySelector(".msg")

const userScr = document.querySelector("#userScr")
const compScr = document.querySelector("#compScr")


const genCompChoice =()=>{
const options =["rock","paper","scissor"]
 const randomIdx = Math.floor (Math.random()*3)
 return options[randomIdx]
}

const drawGame = ()=>
{ 
 msg.innerText= "game draw"
 msg.style.backgroundColor = "rgb(44, 3, 3)"
}

const showWinner = (userWin,userChoice,compChoice)=>
{   if(userWin){
    userScor ++
    msg.innerText = `you win your ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = "green"
    userScr.innerText = userScor
   
}else{
    compScor ++
    msg.innerText = `you lose ${compChoice} beats your ${userChoice}`
    msg.style.backgroundColor = "red"
    compScr.innerText = compScor
   
}         
}


const playGame = (userChoice)=>{
const compChoice = genCompChoice()

if(userChoice===compChoice){
drawGame()
}else{
let userWin = true
if(userChoice==="rock"){

    userWin = compChoice==="paper"? false:true;

}else if(userChoice==="paper")
{   
    userWin = compChoice==="scissor"? false:true;     
}else 
{
  userWin = compChoice==="rock"? false:true; 
}
showWinner(userWin,userChoice,compChoice)
}
}

choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id")
    playGame(userChoice)
})
})