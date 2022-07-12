// Add Your Scripts here
const buttons = document.querySelectorAll(".pick");
const choice = ["paper", "rock", "scissors"];
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
const bonusIcons = document.querySelectorAll(".bonus");
let settings = {};

let score = 0;

let myChoice = undefined;

// computer choice
function computerPick(mode) {
  return choice[Math.floor(Math.random() * mode)];
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
function winner(mode = 3) {
  const computerChoice = computerPick(mode);
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
  setMode(settings);
  setTheme(settings);
  if (isDefault(settings)) {
    defaultSettings.disabled = true;
  } else defaultSettings.disabled = false;

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

// Read Settings from User Settings

const gameMode = 3; // default Game with 3 Choices
const theme = "light"; // default Theme

save.addEventListener("click", () => {
  setMode(settings);
  setTheme(settings);
  checkTheme(settings);
  renderGame(settings);
  setRules(settings);
  setBackgroundImage(settings)
  modalSettings.style.display = "none";
  alert("Settings saved..." + settings.gameMode + settings.theme); //Only for dev
});

defaultSettings.addEventListener("click", () => {
  restoreDefault(settings);
  if (settings.defaultSettings == true) {
    defaultSettings.disabled = true;
  } else defaultSettings.disabled = false;
});

function setMode(settings) {
  if (gameMode3.checked) {
    return (settings.gameMode = gameMode3.value);
  } else if (gameMode5.checked) {
    return (settings.gameMode = gameMode5.value);
  } else {
    alert("please check your settings or clean cache & cookies");
  }
}
function setTheme(settings) {
  if (light.checked) {
    return (settings.theme = light.value);
  } else if (dark.checked) {
    return (settings.theme = dark.value);
  } else {
    alert("please check your settings or clean cache & cookies");
  }
}
function setRules(settings) {
  if (settings.gameMode == "3") {
    return (rulesImg.src = "./images/image-rules.svg");
  } else if (settings.gameMode == "5") {
    return (rulesImg.src = "./images/image-rules-bonus.svg");
  }
}
function renderGame(settings) {
  if (settings.gameMode == "3") {
    logo.src = "images/logo.svg";
    bonusIcons.forEach((icon) => {
      icon.classList.add("bonus");
    });
  } else if (settings.gameMode == "5") {
    logo.src = "images/logo-bonus.svg";
    bonusIcons.forEach((icon) => {
      icon.classList.remove("bonus");
    });
  }
}
function checkTheme(settings) {
  if (settings.theme == "light") {
    document.body.classList.add("light-mode");
  } else document.body.classList.remove("light-mode");
}

function restoreDefault(settings) {
  confirm("Are you sure?");
  settings.gameMode = "3";
  gameMode3.checked = true;
  settings.theme = "dark";
  dark.checked = true;
  settings.isDefault = true;
  setMode(settings);
  setTheme(settings);
  checkTheme(settings);
  renderGame(settings);
  setRules(settings);
  setBackgroundImage(settings)

}
function isDefault(settings) {
  if (settings.gameMode == 3 && settings.theme == "dark") {
    return true;
  } else return false;
}

function setBackgroundImage(settings) {
  if (settings.gameMode == "5") {
    bgImage.classList.remove("backgroundImage");
    bgImage.classList.add("backgroundImageBonus");
  } else if (settings.gameMode == "3") {
    bgImage.classList.remove("backgroundImageBonus");
    bgImage.classList.add("backgroundImage");
  }
}
