let gameOver = new Audio("gameOver.mp3");
let audioTurn = new Audio("ting.mp3");
let turn = "X";
let isGamveOver = false;
let reset = document.getElementById("reset");

// function for turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// function for winning proposle
const checkWinn = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  win.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " won";
      isGamveOver = true;
      document.getElementsByClassName("win-img")[0].style.width = "200px";
    }
  });
};

// process of game logics
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      checkWinn();
      audioTurn.play();
      if (!isGamveOver) {
        document.getElementsByClassName(
          "info"
        )[0].innerText = `turn of ${turn}`;
      }
    }
  });
});

// reset all element onclick handler

reset.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerHTML = "";
    turn = "X";
    document.getElementsByClassName("info")[0].innerText = `turn of ${turn}`;
    isGamveOver = false;
    document.getElementsByClassName("win-img")[0].style.width = "0px";
  });
});
