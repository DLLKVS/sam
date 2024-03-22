let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const gencomputerchoice = () => {
     const options = ["rock", "paper" ,"scissors"];
     const randIdx =  Math.floor(Math.random() * 3);
     return options[randIdx];
    //rock, paper,scissor
};
const drawgame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was draw."
};

const showwinner = (userwin ,userchoice, computerchoice) => {
    if(userwin) {
        console.log("you win!");
        msg.innerText = "You win!"
        msg.Style.backgroundcolor = "green";
    }
    else{
        console.log("you loose!!");
        msg.innerText = "You loos!!"
        msg.Style.backgroundcolor = "red";
    }
}

const playgame = (userchoice) => {
    console.log("user choice = ",userchoice);
    const computerchoice = gencomputerchoice();
    console.log( "computer choice = ", computerchoice);
    //generate computer choice -> modular

    if(userchoice === computerchoice){
        drawgame();
    }
    else {
        let userwin = true;
        if(userchoice === "rock"){
           userwin =  computerchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
             userwin = computerchoice === "scissors" ? false : true;
        }
        else{
            computerchoice === "rock" ? false : true;
        }
        showwinner(userwin , userchoice, computerchoice);
    }

};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
       // console.log("choice was clicked" ,userchoice);
        playgame(userchoice);

    });
});