const squareElements = Array.from(document.querySelectorAll(".square"));
const closeBtn = document.querySelector(".btn");
const winnerElement = document.querySelector(".winnerCard");
const blurElement = document.querySelector(".blur-element");
const winnerTitle = document.querySelector(".winnerCard .title");
let squares = squareElements.map((square) => square.innerHTML);

let currentPlay = "X";

for (let i = 0; i < squareElements.length; i++) {
  squareElements[i].addEventListener("click", () => {
    if (currentPlay === "X" && squares[i] === "") {
      squareElements[i].innerHTML = "X";
      currentPlay = "O";
    } else if (currentPlay === "O" && squares[i] === "") {
      squareElements[i].innerHTML = "O";
      currentPlay = "X";
    }
    updateArray();
    checkWinner();
  });
}

const updateArray = () => {
  squares = squareElements.map((square) => square.innerHTML);
};

const checkWinner = () => {
  // Check Rows
  for (let i = 0; i < 7; i += 3) {
    if (
      squares[i] === squares[i + 1] &&
      squares[i + 1] === squares[i + 2] &&
      squares[i] !== ""
    ) {
      displayWinner();
      return;
    }
  }

  //Check Columns
  for (let i = 0; i < 3; i++) {
    if (
      squares[i] === squares[i + 3] &&
      squares[i + 3] === squares[i + 6] &&
      squares[i] !== ""
    ) {
      displayWinner();
      return;
    }
  }

  //Check Diagonals
  if (
    squares[0] === squares[4] &&
    squares[4] === squares[8] &&
    squares[4] !== ""
  ) {
    displayWinner();
    return;
  } else if (
    squares[2] === squares[4] &&
    squares[4] === squares[6] &&
    squares[4] !== ""
  ) {
    displayWinner();
    return;
  }

  //Check Draw
  let counter = 0;
  for (let i = 0; i < 8; i++) {
    if (squares[i] !== "") {
      counter++;
    }
    if (counter === 8) {
      displayDraw();
    }
  }
};

closeBtn.addEventListener("click", () => {
  location.reload();
});

const displayWinner = () => {
  winnerElement.classList.remove("hidden");
  blurElement.classList.remove("hidden");
  currentPlay === "X"
    ? (winnerTitle.innerHTML = "O Wins!")
    : (winnerTitle.innerHTML = "X Wins!");
};

const displayDraw = () => {
  winnerElement.classList.remove("hidden");
  blurElement.classList.remove("hidden");
  winnerTitle.innerHTML = "No Winner!";
};
