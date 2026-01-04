let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIndex = Math.floor(Math.random()*3);
    return options[randIndex];
}
const drawGame= ()=>{
    msg.innerText = "Game draw!";
    msg.style.backgroundColor = "#03071e";
}

const showWinner = (userWin)=>{
    if(userWin){
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
        userScore++;
        (document.querySelector("#user_score")).innerText = userScore;
    }else{
        msg.innerText = "Comp win!";
        msg.style.backgroundColor = "red";
        compScore++;
        (document.querySelector("#comp_score")).innerText = compScore;
    }

}

const playGame = (userChoice)=>{
    //generate computer choice
    const compChoice = genCompChoice();

    // when the game is draw
    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            // comp will either choose paper or scissor
            userWin = compChoice === "paper"? false:true;
        }else if(userChoice === "paper"){
            // comp will either choose rock or scissor
            userWin = compChoice === "rock"? true : false;
        }else{
            // comp will either choose paper or rock
            userWin = compChoice === "paper"? true:false;
        }
        showWinner(userWin);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})