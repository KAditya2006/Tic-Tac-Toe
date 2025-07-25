
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");
let messageDraw = document.querySelector("#msg-draw");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "") return; 

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        
        box.disabled = true;

        checkWinner();
        
    });
});


const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) => {
message.innerText = `Congratulations, player "${winner}" is win the match`;
msgContainer.classList.remove("hide");
message.style.backgroundColor = "green";
disableBoxes();

}


const showDraw = () => {
    message.innerText = "Oh no the game was draw ";
    msgContainer.classList.remove("hide");
   message.style.backgroundColor = "red";
}

const checkDraw = () => {
    let allFilled = true;

    boxes.forEach((box) => {
        if (box.innerText === "") {
            allFilled = false;
        }
    });

    if (allFilled) {
        showDraw();
    }
};





const checkWinner = () => {
    for(let pattern of winPatterns){
let pos1val = boxes[pattern[0]].innerText;
let pos2val = boxes[pattern[1]].innerText;
let pos3val = boxes[pattern[2]].innerText;

if(pos1val != "" && pos2val != "" && pos3val != ""){
    if(pos1val === pos2val && pos2val === pos3val){
showWinner(pos1val);
    }
}
    }
    
   checkDraw();
};



newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);







