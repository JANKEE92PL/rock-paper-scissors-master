// Add Your Scripts here
const buttons = document.querySelectorAll(".pick");
const Choice = ["paper", "rock", "scissors"];
const Score = document.getElementById("score");
const main = document.getElementById("main");
const select = document.getElementById("select");
const play = document.getElementById("play");
const win = document.getElementById("win");
const user = document.getElementById("user");
const computer = document.getElementById("computer");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const closeBtn2 = document.getElementById("close2");
const modalRules = document.getElementById("modal-rules");
const modalSettings = document.getElementById("modal-settings");
const auraPlayer = document.querySelector(".aura-player");
const auraComputer = document.querySelector(".aura-computer");
const settingsBtn = document.getElementById("settings");

let score = 0;

let myChoice = undefined;

// computer choice
function computerPick() {
  return Choice[Math.floor(Math.random() * Choice.length)];
}

// content changes
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    myChoice = button.getAttribute("choice");
    main.style.display = "none";
    select.style.display = "flex";
    winner();
    win.classList.add();
  });
});

//win or lose or draw
function winner() {
  const computerChoice = computerPick();
  console.log(user);
  console.log(computer);
  console.log(myChoice);
  console.log(computerChoice);

  //;
  change(user, myChoice);
  change(computer, computerChoice);

  if (myChoice === computerChoice) {
    //draw
    win.innerText = "draw";
    auraPlayer.style.display = "none";
    auraComputer.style.display = "none";
  } else if (
    (myChoice === "rock" && computerChoice === "scissors") ||
    (myChoice === "scissors" && computerChoice === "paper") ||
    (myChoice === "paper" && computerChoice === "scissors")
  ) {
    // i won
    myScore(1);
    win.innerText = "win";
    auraPlayer.style.display = "";
    auraComputer.style.display = "none";
  } else {
    // i lose
    win.innerText = "lose";
    auraPlayer.style.display = "none";
    auraComputer.style.display = "";
  }
}

//update score
function myScore(value) {
  score = score + value;
  if (score >= 0) {
    Score.innerText = score;
  }
}

//play again
play.addEventListener("click", function () {
  main.style.display = "flex";
  select.style.display = "none";
});

function change(user, choices) {
  user.classList.remove("paper");
  user.classList.remove("rock");
  user.classList.remove("scissors");

  const img = user.querySelector("img");

  if (choices === "paper") {
    console.log(choices);
    user.classList.add("paper");
    img.src = "./images/icon-paper.svg";
  } else if (choices === "rock") {
    user.classList.add("rock");
    img.src = "./images/icon-rock.svg";
  } else {
    user.classList.add("scissors");
    img.src = "./images/icon-scissors.svg";
  }
}

//modals

// Rules Modal
openBtn.addEventListener("click", function () {
  modalRules.style.display = "flex";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == body) {
    modalRules.style.display = "none";
  }
};

closeBtn.addEventListener("click", function () {
  modalRules.style.display = "none";
});

// Settings Modal

settingsBtn.addEventListener("click", function () {
  modalSettings.style.display = "flex";
});

window.onclick = function (event) {
  if (event.target == body) {
    modalSettings.style.display = "none";
  }
};

closeBtn2.addEventListener("click", function () {
  modalSettings.style.display = "none";
});