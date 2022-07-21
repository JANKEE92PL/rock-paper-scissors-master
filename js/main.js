//* IDEAS

//? Score Reset Button
//* DONE !!!

//? Score Reset Button Toggle ON / OFF IN Settings Modal
//* DONE !!!

//? Create Additional Settings MODAL IN Settings Modal

//? Save Settings Obj to Localstorage
//! in progress

//? TRIGGER Eacht 10 Score Steps Fireworks / Shower

//? HIGHSCORE BOARD WITH USER FORM => Congrats new Highscore // please Enter your name => HighscoreArray.push(user)

//? CLOSE GAME BUTTON

//? ADD HOTKEYS FOR PLAY AGAIN ( ENTER ) & CIRCLE 1 -3 / 1 -5 depens on which Game Mode

//? COMBO SCREEN IF 3x in ROW WIN
//? MULTIPLIKATOR IF 5x in ROW WIN
//? AWESOME SCREEN If 7x in ROW WIN
//? INCREDIBLE SCREEN If 10x in ROW WIN
// EACH WITH SHOWER EFFEKT!

//? THANK YOU SITE AND FEEDBACK FORM / DIRECT TO MY GITHUB PROFILE
//* IDEAS END

const buttons = document.querySelectorAll(".pick");
const choice = ["paper", "rock", "scissors"];
const scoreVal = document.getElementById("score");
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
const settingsBtn = document.getElementById("settingsBtn");
const bonusIcons = document.querySelectorAll(".bonus");
const choicesTxt = document.querySelectorAll(".choices");
const title = document.getElementsByTagName("title")[0];
const rulesTxt = document.querySelector(".modal-rules-title");
const settingsTxt = document.querySelector(".modal-settings-title");
const labels = document.getElementsByTagName("label");
const resultTxt = document.querySelector(".result");

let settings = {
  gameMode: "3",
  theme: "dark",
  language: "english",
  resetScoreBtn: false,
};

let score = 0;

let myChoice = undefined;

// computer choice
function computerPick(settings) {
  if (settings.gameMode == "3" && choice.length != 3) {
    choice.splice(choice.length - 2);
  } else if (settings.gameMode == "5" && choice.length != 5) {
    choice.push("spock", "lizard");
  }
  return choice[Math.floor(Math.random() * settings.gameMode)];
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
  const computerChoice = computerPick(settings);
  //;
  change(user, myChoice);
  change(computer, computerChoice);

  if (myChoice === computerChoice) {
    //draw
    switch (settings.language) {
      case "english":
        win.innerText = "You Draw";
        break;
      case "german":
        win.innerText = "Remis";
        break;
      case "polish":
        win.innerText = "Remis";
        break;
      case "hungarian":
        win.innerText = "Húz";
        break;
      case "french":
        win.innerText = "Dessiner";
        break;
      case "spanish":
        win.innerText = "Dibujar";
        break;

      default:
        win.innerText = "You Draw";

        break;
    }
    auraPlayer.style.display = "none";
    auraComputer.style.display = "none";
  } else if (
    (myChoice === "rock" && computerChoice === "scissors") ||
    (myChoice === "scissors" && computerChoice === "paper") ||
    (myChoice === "paper" && computerChoice === "scissors") ||
    // Gamemode = 5
    (myChoice === "scissors" && computerChoice === "lizard") ||
    (myChoice === "paper" && computerChoice === "spock") ||
    (myChoice === "rock" && computerChoice === "lizard") ||
    (myChoice === "lizard" && computerChoice === "paper") ||
    (myChoice === "lizard" && computerChoice === "spock") ||
    (myChoice === "spock" && computerChoice === "scissors") ||
    (myChoice === "spock" && computerChoice === "rock")
  ) {
    // i won
    myScore(1);
    switch (settings.language) {
      case "english":
        win.innerText = "You Win";
        break;
      case "german":
        win.innerText = "Gewonnen";
        break;
      case "polish":
        win.innerText = "Wygrałeś";
        break;
      case "hungarian":
        win.innerText = "Nyerte";
        break;
      case "french":
        win.innerText = "a gagné";
        break;
      case "spanish":
        win.innerText = "Ganó";
        break;

      default:
        win.innerText = "You Win";

        break;
    }

    auraPlayer.style.display = "";
    auraComputer.style.display = "none";
  } else {
    // i lose
    switch (settings.language) {
      case "english":
        win.innerText = "You Loose";
        break;
      case "german":
        win.innerText = "Verloren";
        break;
      case "polish":
        win.innerText = "Przegrałeś";
        break;
      case "hungarian":
        win.innerText = "Vesztettél";
        break;
      case "french":
        win.innerText = "Perdu";
        break;
      case "spanish":
        win.innerText = "Perdió";
        break;

      default:
        win.innerText = "You Loose";

        break;
    }
    auraPlayer.style.display = "none";
    auraComputer.style.display = "";
  }
}

//update score
function myScore(value) {
  score += value;
  if (score >= 0) {
    scoreVal.innerText = score;
    if (score > 0 && settings.resetScoreBtn) {
      resetScoreBtn.classList.remove("d-none");
    } else if (score == 0 && !settings.resetScoreBtn) {
      resetScoreBtn.classList.add("d-none");
    }
  }
}

/**
 * Reset Score using resetScoreBtn("click")
 *
 */
function resetScore() {
  if (score > 0) {
    confirm("Really reset Score?");
    score = 0;
    scoreVal.innerText = "0";
  }
}

resetScoreBtn.addEventListener("click", (settings) => {
  if (score > 0) {
    resetScoreBtn.classList.add("d-none"); // BUTTON NOT VISIBLE
    resetScore();
  }
  resetScore();
});

//play again
play.addEventListener("click", function () {
  main.style.display = "flex";
  select.style.display = "none";
});

function change(user, choices) {
  user.classList.remove("paper");
  user.classList.remove("rock");
  user.classList.remove("scissors");
  user.classList.remove("spock");
  user.classList.remove("lizard");

  const img = user.querySelector("img");

  if (choices === "paper") {
    user.classList.add("paper");
    img.src = "./images/icon-paper.svg";
  } else if (choices === "rock") {
    user.classList.add("rock");
    img.src = "./images/icon-rock.svg";
  } else if (choices === "scissors") {
    user.classList.add("scissors");
    img.src = "./images/icon-scissors.svg";
  } else if (choices === "spock") {
    user.classList.add("spock");
    img.src = "./images/icon-spock.svg";
  } else {
    user.classList.add("lizard");
    img.src = "./images/icon-lizard.svg";
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
  setBackgroundImage(settings);
  setCircularBonus(settings);
  modalSettings.style.display = "none";
  setLanguage(settings);
  setTranslation(settings);
  setResetScoreBtn(settings);
  setHotkey()
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
function setLanguage(settings) {
  settings.language = language.value;
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
  switch (settings.language) {
    case "english":
      confirm("Are you sure?");
      break;
    case "german":
      confirm("Bist du sicher?");
      break;
    case "polish":
      confirm("Jesteś pewny?");
      break;
    case "hungarian":
      confirm("Biztos vagy ebben?");
      break;
    case "french":
      confirm("Êtes-vous sûr?");
      break;
    case "spanish":
      confirm("Estas seguro?");
      break;

    default:
      confirm("Are you sure?");
      break;
  }
  settings.gameMode = "3";
  gameMode3.checked = true;
  settings.theme = "dark";
  dark.checked = true;
  settings.isDefault = true;
  settings.resetScoreBtn = false;
  resetScoreCheckbox.checked = false;
  setMode(settings);
  setTheme(settings);
  checkTheme(settings);
  renderGame(settings);
  setRules(settings);
  setBackgroundImage(settings);
  setCircularBonus(settings);
}
function isDefault(settings) {
  if (
    settings.gameMode == 3 &&
    settings.theme == "dark" &&
    settings.resetScoreBtn == false
  ) {
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

function setCircularBonus(settings) {
  if (settings.gameMode == "5") {
    for (let circle of main.children) {
      circle.classList.add("bonus-circle");
    }
  } else if (settings.gameMode == "3") {
    for (let circle of main.children) {
      circle.classList.remove("bonus-circle");
    }
  }
}

async function readLangFile() {
  try {
    let response = await fetch("js/languages.json");
    return await response.json();
  } catch (error) {
    console.error(console.error());
  }
}

language.addEventListener("change", () => {
  return language.value;
});

async function setTranslation(settings) {
  let data = await readLangFile();
  if (settings.language == "english") {
    let english = data[0];
    title.innerText = english.dictionary.title;
    scoreTxt.innerText = english.dictionary.score;
    rulesTxt.innerText = english.dictionary.rules;
    openBtn.innerText = english.dictionary.rules;
    settingsTxt.innerText = english.dictionary.settings;
    gameModeTxt.innerText = english.dictionary.gamemode;
    choicesTxt.forEach(function (node) {
      node.innerText = english.dictionary.choices;
    });
    themeTxt.innerText = english.dictionary.theme;
    labels[2].innerText = english.dictionary.light;
    labels[3].innerText = english.dictionary.dark;
    defaultSettings.innerText = english.dictionary.restoreDefaults;
    languageTxt.innerText = english.dictionary.language;
    save.innerText = english.dictionary.save;
    pickedTxt.innerText = english.dictionary.picked;
    pickedhouseTxt.innerText = english.dictionary.housePicked;
    resetScoreTxt.innerText = english.dictionary.resetScoreBtn;
    labels[4].innerText = english.dictionary.visible;
  } else if (settings.language == "german") {
    let german = data[1];
    title.innerText = german.dictionary.title;
    scoreTxt.innerText = german.dictionary.score;
    rulesTxt.innerText = german.dictionary.rules;
    openBtn.innerText = german.dictionary.rules;
    settingsTxt.innerText = german.dictionary.settings;
    gameModeTxt.innerText = german.dictionary.gamemode;
    choicesTxt.forEach(function (node) {
      node.innerText = german.dictionary.choices;
    });
    themeTxt.innerText = german.dictionary.theme;
    labels[2].innerText = german.dictionary.light;
    labels[3].innerText = german.dictionary.dark;
    defaultSettings.innerText = german.dictionary.restoreDefaults;
    languageTxt.innerText = german.dictionary.language;
    save.innerText = german.dictionary.save;
    pickedTxt.innerText = german.dictionary.picked;
    pickedhouseTxt.innerText = german.dictionary.housePicked;
    resetScoreTxt.innerText = german.dictionary.resetScoreBtn;
    labels[4].innerText = german.dictionary.visible;
  } else if (settings.language == "polish") {
    let polish = data[2];
    title.innerText = polish.dictionary.title;
    scoreTxt.innerText = polish.dictionary.score;
    rulesTxt.innerText = polish.dictionary.rules;
    openBtn.innerText = polish.dictionary.rules;
    settingsTxt.innerText = polish.dictionary.settings;
    gameModeTxt.innerText = polish.dictionary.gamemode;
    choicesTxt.forEach(function (node) {
      node.innerText = polish.dictionary.choices;
    });
    themeTxt.innerText = polish.dictionary.theme;
    labels[2].innerText = polish.dictionary.light;
    labels[3].innerText = polish.dictionary.dark;
    defaultSettings.innerText = polish.dictionary.restoreDefaults;
    languageTxt.innerText = polish.dictionary.language;
    save.innerText = polish.dictionary.save;
    pickedTxt.innerText = polish.dictionary.picked;
    pickedhouseTxt.innerText = polish.dictionary.housePicked;
    resetScoreTxt.innerText = polish.dictionary.resetScoreBtn;
    labels[4].innerText = polish.dictionary.visible;
  } else if (settings.language == "hungarian") {
    let hungarian = data[3];
    title.innerText = hungarian.dictionary.title;
    scoreTxt.innerText = hungarian.dictionary.score;
    rulesTxt.innerText = hungarian.dictionary.rules;
    openBtn.innerText = hungarian.dictionary.rules;
    settingsTxt.innerText = hungarian.dictionary.settings;
    gameModeTxt.innerText = hungarian.dictionary.gamemode;
    choicesTxt.forEach(function (node) {
      node.innerText = hungarian.dictionary.choices;
    });
    themeTxt.innerText = hungarian.dictionary.theme;
    labels[2].innerText = hungarian.dictionary.light;
    labels[3].innerText = hungarian.dictionary.dark;
    defaultSettings.innerText = hungarian.dictionary.restoreDefaults;
    languageTxt.innerText = hungarian.dictionary.language;
    save.innerText = hungarian.dictionary.save;
    pickedTxt.innerText = hungarian.dictionary.picked;
    pickedhouseTxt.innerText = hungarian.dictionary.housePicked;
    resetScoreTxt.innerText = hungarian.dictionary.resetScoreBtn;
    labels[4].innerText = hungarian.dictionary.visible;
  } else if (settings.language == "french") {
    let french = data[4];
    title.innerText = french.dictionary.title;
    scoreTxt.innerText = french.dictionary.score;
    rulesTxt.innerText = french.dictionary.rules;
    openBtn.innerText = french.dictionary.rules;
    settingsTxt.innerText = french.dictionary.settings;
    gameModeTxt.innerText = french.dictionary.gamemode;
    choicesTxt.forEach(function (node) {
      node.innerText = french.dictionary.choices;
    });
    themeTxt.innerText = french.dictionary.theme;
    labels[2].innerText = french.dictionary.light;
    labels[3].innerText = french.dictionary.dark;
    defaultSettings.innerText = french.dictionary.restoreDefaults;
    languageTxt.innerText = french.dictionary.language;
    save.innerText = french.dictionary.save;
    pickedTxt.innerText = french.dictionary.picked;
    pickedhouseTxt.innerText = french.dictionary.housePicked;
    resetScoreTxt.innerText = french.dictionary.resetScoreBtn;
    labels[4].innerText = french.dictionary.visible;
  } else if (settings.language == "spanish") {
    let spanish = data[5];
    title.innerText = spanish.dictionary.title;
    scoreTxt.innerText = spanish.dictionary.score;
    rulesTxt.innerText = spanish.dictionary.rules;
    openBtn.innerText = spanish.dictionary.rules;
    settingsTxt.innerText = spanish.dictionary.settings;
    gameModeTxt.innerText = spanish.dictionary.gamemode;
    choicesTxt.forEach(function (node) {
      node.innerText = spanish.dictionary.choices;
    });
    themeTxt.innerText = spanish.dictionary.theme;
    labels[2].innerText = spanish.dictionary.light;
    labels[3].innerText = spanish.dictionary.dark;
    defaultSettings.innerText = spanish.dictionary.restoreDefaults;
    defaultSettings.innerText = spanish.dictionary.restoreDefaults;
    save.innerText = spanish.dictionary.save;
    pickedTxt.innerText = spanish.dictionary.picked;
    pickedhouseTxt.innerText = spanish.dictionary.housePicked;
    resetScoreTxt.innerText = spanish.dictionary.resetScoreBtn;
    labels[4].innerText = spanish.dictionary.visible;
  }
  return data;
}

function setResetScoreBtn(settings) {
  if (resetScoreCheckbox.checked) {
    resetScoreBtn.classList.remove("d-none");
    return (settings.resetScoreBtn = true);
  }
  resetScoreBtn.classList.add("d-none");
  return (settings.resetScoreBtn = false);
}
// LOCALSTORAGE
/* settings.forEach((key,value) =>{
  console.log("key ->" + key);
  console.log("value ->" + value)
  localStorage.setItem(key.toString(),value.toString())
})
 */

// Hotkeys
/* function activateHotkeys(settings) {

  if (select.style.display == "flex") {
    document.body.addEventListener("keypress", (e) => {
      if (e.keyCode == settings.hotkey) {
        main.style.display = "flex";
        select.style.display = "none";
        alert("huhu")
      }
    });
  }
} */

document.body.addEventListener("keypress", (e) => {
  if (select.style.display == "flex") {
    checkHotkeys(e, settings);
  }
});

let keyChar
hotkeyChar.addEventListener("click", () => {
  this.addEventListener(
    "keydown",
    (e) => {
      keyChar = e.keyCode;
      hotkeyChar.value = e.key;
    },
    { once: true }
  );
});

function setHotkey() {
  settings.hotKey = keyChar;
}

function checkHotkeys(e, settings) {
  if (e.keyCode === settings.hotKey) {
    main.style.display = "flex";
    select.style.display = "none";
  }
}
