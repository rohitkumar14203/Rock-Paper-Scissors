// const computerScore = document.querySelector(".js-cmp-score");
// const playerScore = document.querySelector(".js-ply-score");
// const ruleBtn = document.getElementById("js-rul-btn");
// const selectedMoves = document.querySelector(".js-inner-elements");
// // Next button
// const nxtBtn = document.getElementById("js-nxt-btn");
// let imgVisible = false;
// let img;
// ruleBtn.addEventListener("click", () => {
//   if (!imgVisible) {
//     img = document.createElement("img");
//     img.src = "./img/rules.png";
//     img.style.position = "absolute";
//     img.style.bottom = "55px";
//     img.style.right = "12px";

//     ruleBtn.appendChild(img);
//     imgVisible = true;
//   } else {
//     ruleBtn.removeChild(img);
//     imgVisible = false;
//   }
// });

// // Random Move Function
// function pickMover() {
//   const randomMove = Math.random();
//   let commpterMove = " ";
//   if (randomMove > 0 && randomMove < 1 / 3) {
//     commpterMove = "Rock";
//   } else if (randomMove > 1 / 3 && randomMove < 2 / 3) {
//     commpterMove = "Paper";
//   } else {
//     commpterMove = "Scissors";
//   }
//   console.log(commpterMove);
//   return commpterMove;
// }

// //Player Click Moves
// document.querySelector(".js-rock-btn").addEventListener("click", () => {
//   playGame("Rock");
// });

// document.querySelector(".js-paper-btn").addEventListener("click", () => {
//   playGame("Paper");
// });

// document.querySelector(".js-scissor-btn").addEventListener("click", () => {
//   playGame("Scissors");
// });

// //Scores
// const scores = JSON.parse(localStorage.getItem("scores")) || {
//   win: 0,
//   lose: 0,
// };
// // Score Update
// function updateScore() {
//   const playerWin = document.querySelector(".js-ply-score");
//   playerWin.innerHTML = scores.win;
//   const computerWin = document.querySelector(".js-cmp-score");
//   computerWin.innerHTML = scores.lose;
// }

// updateScore();

// // Next Button Display Condition Function
// function nextBtn() {
//   if (scores.win > scores.lose) {
//     nxtBtn.style.display = "block";
//     nxtBtn.addEventListener("click", () => {
//       window.location.href = "./hurray.html";
//     });
//   } else {
//     nxtBtn.style.display = "none";
//   }
// }
// nextBtn();

// // Main Function
// function playGame(playerMove) {
//   const computerMove = pickMover();
//   let result = "";

//   if (playerMove === computerMove) {
//     result = "Tie";
//   } else if (
//     (playerMove === "Rock" && computerMove === "Scissors") ||
//     (playerMove === "Paper" && computerMove === "Rock") ||
//     (playerMove === "Scissors" && computerMove === "Paper")
//   ) {
//     result = "You Win";
//     scores.win++;
//   } else {
//     result = "You Lose";
//     scores.lose++;
//   }

//   localStorage.setItem("scores", JSON.stringify(scores));

//   updateScore();
//   nextBtn();

//   selectedMoves.style.display = "flex";
//   selectedMoves.style.justifyContent = "center";
//   if (playerMove === "Rock" && computerMove === "Rock") {
//     selectedMoves.innerHTML = `
//     <div class="js-div">
//     <p class = "text-1" >YOU PICKED</p>
//       <button class="ply-button-rock">
//         <img src="./img/${playerMove}.png" alt="" />
//       </button>
//       <p class ="js-para-tie" >${result}</p>
//       <button id = "play-again" >Play Again</button>
//       <p class="text-2" >PC PICKED</p>
//       <button class="cmp-button-rock">
//         <img src="./img/${computerMove}.png" alt="" />
//       </button>
//     </div>`;
//   } else if (playerMove === "Scissors" && computerMove === "Scissors") {
//     selectedMoves.innerHTML = `
//     <div class="js-div">
//     <p class = "text-1" >YOU PICKED</p>
//       <button class="ply-button-scissor">
//         <img src="./img/${playerMove}.png" alt="" />
//       </button>
//       <p class ="js-para-tie" >${result}</p>
//       <button id = "play-again" >Play Again</button>
//       <p class="text-2" >PC PICKED</p>
//       <button class="cmp-button-scissor">
//         <img src="./img/${computerMove}.png" alt="" />
//       </button>
//     </div>`;
//   } else if (playerMove === "Paper" && computerMove === "Paper") {
//     selectedMoves.innerHTML = `
//     <div class="js-div">
//     <p class = "text-1" >YOU PICKED</p>
//       <button class="ply-button-paper">
//         <img src="./img/${playerMove}.png" alt="" />
//       </button>
//       <p class ="js-para-tie" >${result}</p>
//       <button id = "play-again" >Play Again</button>
//       <p class="text-2" >PC PICKED</p>
//       <button class="cmp-button-paper">
//         <img src="./img/${computerMove}.png" alt="" />
//       </button>
//     </div>`;
//   } else if (playerMove === "Rock" && computerMove === "Scissors") {
//     selectedMoves.innerHTML = `
//     <div class="js-div">
//     <p class = "text-1" >YOU PICKED</p>
//     <button class="ply-button-rock">
//         <img src="./img/${playerMove}.png" alt="" />
//       </button>
//       <p class ="js-para" >${result}</p>
//       <p class = "js-para-2">Against Pc</p>
//       <button id = "play-again" >Play Again</button>
//       <p class="text-2" >PC PICKED</p>
//       <button class="cmp-button-scissor">
//         <img src="./img/${computerMove}.png" alt="" />
//       </button>
//     </div>`;
//   } else if (playerMove === "Scissors" && computerMove === "Rock") {
//     selectedMoves.innerHTML = `
//     <div class="js-div">
//     <p class = "text-1" >YOU PICKED</p>
//     <button class="ply-button-scissor">
//         <img src="./img/${playerMove}.png" alt="" />
//       </button>
//       <p class ="js-para" >${result}</p>
//       <p class = "js-para-2">Against Pc</p>
//       <button id = "play-again" >Play Again</button>
//       <p class="text-2" >PC PICKED</p>
//       <button class="cmp-button-rock">
//         <img src="./img/${computerMove}.png" alt="" />
//       </button>
//     </div>`;
//   } else if (playerMove === "Rock" && computerMove === "Paper") {
//     selectedMoves.innerHTML = `
//     <div class="js-div">
//     <p class = "text-1" >YOU PICKED</p>
//     <button class="ply-button-rock">
//         <img src="./img/${playerMove}.png" alt="" />
//       </button>
//       <p class ="js-para" >${result}</p>
//       <p class = "js-para-2">Against Pc</p>
//       <button id = "play-again" >Play Again</button>
//       <p class="text-2" >PC PICKED</p>
//       <button class="cmp-button-paper">
//         <img src="./img/${computerMove}.png" alt="" />
//       </button>
//     </div>`;
//   } else if (playerMove === "Paper" && computerMove === "Rock") {
//     selectedMoves.innerHTML = `
//     <div class="js-div">
//     <p class = "text-1" >YOU PICKED</p>
//     <button class="ply-button-paper">
//         <img src="./img/${playerMove}.png" alt="" />
//       </button>
//       <p class ="js-para" >${result}</p>
//       <p class = "js-para-2">Against Pc</p>
//       <button id = "play-again" >Play Again</button>
//       <p class="text-2" >PC PICKED</p>
//       <button class="cmp-button-rock">
//         <img src="./img/${computerMove}.png" alt="" />
//       </button>
//     </div>`;
//   } else if (playerMove === "Scissors" && computerMove === "Paper") {
//     selectedMoves.innerHTML = `
//     <div class="js-div">
//     <p class = "text-1" >YOU PICKED</p>
//     <button class="ply-button-scissor">
//         <img src="./img/${playerMove}.png" alt="" />
//       </button>
//       <p class ="js-para" >${result}</p>
//       <p class = "js-para-2">Against Pc</p>
//       <button id = "play-again" >Play Again</button>
//       <p class="text-2" >PC PICKED</p>
//       <button class="cmp-button-paper">
//         <img src="./img/${computerMove}.png" alt="" />
//       </button>
//     </div>`;
//   } else if (playerMove === "Paper" && computerMove === "Scissors") {
//     selectedMoves.innerHTML = `
//     <div class="js-div">
//     <p class = "text-1" >YOU PICKED</p>
//     <button class="ply-button-paper">
//         <img src="./img/${playerMove}.png" alt="" />
//       </button>
//       <p class ="js-para" >${result}</p>
//       <p class = "js-para-2">Against Pc</p>
//       <button id = "play-again" >Play Again</button>
//       <p class="text-2" >PC PICKED</p>
//       <button class="cmp-button-scissor">
//         <img src="./img/${computerMove}.png" alt="" />
//       </button>
//     </div>`;
//   }

//   document.getElementById("play-again").addEventListener("click", () => {
//     selectedMoves.innerHTML = `
//      <button class="button-rock js-btn-position">
//           <img class="img-size js-rock-btn" src="./img/Rock.png" alt="" />
//         </button>
//         <img class = "js-img-style" src="./img/Line 1.png" alt="" />
//         <div>
//           <button class="button-scissor js-scissor-btn">
//             <img class="img-size" src="./img/Scissors.png" alt="" />
//           </button>
//           <img src="./img/Line 3.png" alt="" />
//           <button class="button-paper js-paper-btn">
//             <img class="img-size" src="./img/Paper.png" alt="" />
//           </button>
//           <img src="./img/Line 2.png" alt="" />
//         </div>`;
//     document.querySelector(".js-rock-btn").addEventListener("click", () => {
//       playGame("Rock");
//     });
//     document.querySelector(".js-paper-btn").addEventListener("click", () => {
//       playGame("Paper");
//     });
//     document.querySelector(".js-scissor-btn").addEventListener("click", () => {
//       playGame("Scissors");
//     });
//   });

// }

//
/*

























*/
const computerScore = document.querySelector(".js-cmp-score");
const playerScore = document.querySelector(".js-ply-score");
const ruleBtn = document.getElementById("js-rul-btn");
const selectedMoves = document.querySelector(".js-inner-elements");
const nxtBtn = document.getElementById("js-nxt-btn");
let imgVisible = false;
let img;

// Rule button Img Display
ruleBtn.addEventListener("click", () => {
  if (!imgVisible) {
    img = document.createElement("img");
    img.src = "./img/rules.png";
    img.style.position = "absolute";
    img.style.bottom = "55px";
    img.style.right = "12px";

    ruleBtn.appendChild(img);
    imgVisible = true;
  } else {
    ruleBtn.removeChild(img);
    imgVisible = false;
  }
});

// Random Move Function
function pickMover() {
  const randomMove = Math.random();
  let commpterMove = " ";
  if (randomMove > 0 && randomMove < 1 / 3) {
    commpterMove = "Rock";
  } else if (randomMove > 1 / 3 && randomMove < 2 / 3) {
    commpterMove = "Paper";
  } else {
    commpterMove = "Scissors";
  }
  console.log(commpterMove);
  return commpterMove;
}

//  Moves Event Listerners
function MoveListeners() {
  document
    .querySelector(".js-rock-btn")
    .addEventListener("click", () => playGame("Rock"));
  document
    .querySelector(".js-paper-btn")
    .addEventListener("click", () => playGame("Paper"));
  document
    .querySelector(".js-scissor-btn")
    .addEventListener("click", () => playGame("Scissors"));
}
MoveListeners();

// localStorage Scores or Parse  Local Storage
const scores = JSON.parse(localStorage.getItem("scores")) || {
  win: 0,
  lose: 0,
};

// Update the score display
function updateScore() {
  playerScore.innerHTML = scores.win;
  computerScore.innerHTML = scores.lose;
}
updateScore();

// Show/hide next button based on scores
function nextBtn() {
  if (scores.win > scores.lose) {
    nxtBtn.style.display = "block";
    nxtBtn.addEventListener("click", () => {
      window.location.href = "./hurray.html";
    });
  } else {
    nxtBtn.style.display = "none";
  }
}
nextBtn();

// Function to display the selected moves and result
function displayMoves(playerMove, computerMove, result, isTie, isLose, isWin) {
  selectedMoves.innerHTML = `
    <div class="js-div">
      <p class="text-1">YOU PICKED</p>
      <button class="ply-button-${playerMove.toLowerCase()} ${
    isWin ? "winner-button" : ""
  }">
        <img src="./img/${playerMove}.png"/>
      </button>
      <p class="${isTie ? "js-para-tie" : "js-para"}">${result}</p>
      ${!isTie ? `<p class="js-para-2">Against PC</p>` : ""}
      <button id="play-again">Play Again</button>
      <p class="text-2">PC PICKED</p>
      <button class="cmp-button-${computerMove.toLowerCase()} ${
    isLose ? "loser-button" : ""
  } ">
        <img src="./img/${computerMove}.png" alt="${computerMove}" />
      </button>
    </div>
  `;

  document.getElementById("play-again").addEventListener("click", () => {
    selectedMoves.innerHTML = `
    <button class="button-rock js-btn-position">
      <img class="img-size js-rock-btn" src="./img/Rock.png" alt="Rock" />
    </button>
    <img class="js-img-style" src="./img/Line 1.png" alt="Line 1" />
    <div>
      <button class="button-scissor js-scissor-btn">
        <img class="img-size" src="./img/Scissors.png" alt="Scissors" />
      </button>
      <img src="./img/Line 3.png" alt="Line 3" />
      <button class="button-paper js-paper-btn">
        <img class="img-size" src="./img/Paper.png" alt="Paper" />
      </button>
      <img src="./img/Line 2.png" alt="Line 2" />
    </div>
  `;

    MoveListeners();
  });
}

// Main Function
function playGame(playerMove) {
  const computerMove = pickMover();
  let result = "";
  let isWin = false;
  let isTie = false;
  let isLose = false;

  if (playerMove === computerMove) {
    result = "Tie";
    isTie = true;
  } else if (
    (playerMove === "Rock" && computerMove === "Scissors") ||
    (playerMove === "Paper" && computerMove === "Rock") ||
    (playerMove === "Scissors" && computerMove === "Paper")
  ) {
    result = "You Win";
    scores.win++;
    isWin = true;
  } else {
    result = "You Lose";
    scores.lose++;
    isLose = true;
  }

  localStorage.setItem("scores", JSON.stringify(scores));
  updateScore();
  nextBtn();
  displayMoves(playerMove, computerMove, result, isTie, isLose, isWin);
}
