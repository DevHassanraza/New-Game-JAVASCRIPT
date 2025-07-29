let userScore = 0;
let compScore = 0;

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const radnidx = Math.floor(Math.random()*3);
    return options[radnidx];
}

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const drawgame = ()=>{
    
    msg.innerText = "Draw .play again";
    msg.style.backgroundColor = "black";
}
 
const showWinner = (userWin , userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;

        
        msg.innerText = `You are win!! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        
        msg.innerText = `You lose!!  ${compChoice} beats your${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) =>{
    
    const compChoice = genCompChoice();
    


    if(userChoice === compChoice){
        drawgame();
    }else{
        let userWin = true;

        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice,compChoice);
    }


}

choices.forEach((choice) => {
    
    choice.addEventListener("click", () =>{
        const userChoice= choice.getAttribute("id");
        
        playgame(userChoice);
    })

});