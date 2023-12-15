let user = 0;
let computer = 0;

const choices = document.querySelectorAll(".ch");
const msg = document.querySelector("#msg");

const userScore = document.querySelector("#user-score");
const compscore = document.querySelector("#computer-score");

const computerId = () =>{
    const options = ["stone", "paper", "scissors"];
    //rock, paper, scissors
    const rId = Math.floor(Math.random() * 3); //to create math floor random number by JS
    return options[rId];
};
const drawGame = () =>{
    msg.innerText = "Game was Draw! Play again.";
    msg.style.backgroundColor = "rgb(6, 111, 111)";
};
const showWinner = (uWin, userId, compId)=>{
    if(uWin){
        user++;
        userScore.innerText = user;
        msg.innerText = `You win! your ${userId} beats ${compId}`;
        msg.style.backgroundColor = "green";
    }else{
        computer++;
        compscore.innerText = computer;
        msg.innerText = `You lost. ${compId} beats your ${userId}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame =(userId) =>{
    console.log("User choice = ", userId);
    //Generate computer choice -> modular
    const compId = computerId();
    console.log("Computer choice = ", compId);

    if(userId === compId){
        //draw game;
        drawGame();
    }else{
        let uWin =true;
        if(userId === "stone"){
            //scissors or paper
            uWin = compId === "paper" ? false : true;
        } else if(userId === "paper"){
            //stone or scissors
            uWin = compId === "scissors"? false : true;
        } else{
            //userId = scissors | compId = stone or paper
            uWin = compId === "stone"? false : true;
        }
        showWinner(uWin, userId, compId);
    }
};
choices.forEach((ch)=>{
    ch.addEventListener("click", ()=> {
        const userId = ch.getAttribute("id");
        playGame(userId);
    });
});

