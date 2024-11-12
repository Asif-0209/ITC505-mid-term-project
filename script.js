// Story structure with stages and choices (Game of Thrones)
const storyStages = {
  start: {
    text: "You are a new member of the Night's Watch. A war is coming, and the fate of Westeros lies in your hands. Do you accept the call?",
    choices: [
      { text: "Yes, I swear my oath", nextStage: "nightWatch" },
      { text: "No, it's too dangerous", nextStage: "endDecline" }
    ],
    image: "https://external-preview.redd.it/c9WaCkTDMTtuxtG-NGDcFaYdGavd0PedaeKla76HKPE.jpg?width=1080&crop=smart&auto=webp&s=5d1b8061e892c00b1b6818ba65c977e29d98168e"
  },
  nightWatch: {
    text: "You arrive at the Wall and are greeted by Jon Snow, who tells you about the impending danger from the North. Do you go on a scouting mission or stay at the Wall?",
    choices: [
      { text: "Go on a scouting mission", nextStage: "scoutingMission" },
      { text: "Stay at the Wall", nextStage: "stayAtWall" }
    ],
    image: "https://api.time.com/wp-content/uploads/2017/08/game-of-thrones-the-wall-history-03.jpg"
  },
  scoutingMission: {
    text: "You venture beyond the Wall with Jon Snow and encounter a wildling. Do you try to negotiate or draw your sword?",
    choices: [
      { text: "Negotiate", nextStage: "negotiateWildling" },
      { text: "Draw your sword", nextStage: "fightWildling" }
    ],
    image: "https://wallpapers.com/images/hd/face-jon-snow-game-of-thrones-1ca3aj9yb6yp3ymj.jpg"
  },
  stayAtWall: {
    text: "You decide to stay at the Wall, but the situation grows dire. Soon, White Walkers are spotted approaching. Do you fight or flee?",
    choices: [
      { text: "Fight the White Walkers", nextStage: "fightWhiteWalkers" },
      { text: "Flee", nextStage: "runAway" }
    ],
    image: "https://pyxis.nymag.com/v1/imgs/f0f/12e/d99bb166ef7ed0e35744859a442b0d7a51-25-got-the-wall.rsocial.w1200.jpg"
  },
  negotiateWildling: {
    text: "You manage to convince the wildling to join forces against a common enemy. Together, you return to the Wall and prepare for the coming battle. Mission Accomplished!",
    choices: [],
    image: "https://i0.wp.com/www.paolopuggioni.com/admin/wp-content/uploads/2013/01/Wildlings2.jpg?ssl=1"
  },
  fightWildling: {
    text: "The wildling proves to be too strong, and in the heat of the battle, you fall. Mission failed.",
    choices: [],
    image: "https://patricksponaugle.com/wp-content/uploads/2016/02/gameofthrones_finale_precap10.jpg"
  },
  fightWhiteWalkers: {
    text: "You stand your ground and fight bravely, but the White Walkers' forces are overwhelming. With your last breath, you manage to take down one of them. Mission failed.",
    choices: [],
    image: "https://images5.alphacoders.com/698/698745.jpg"
  },
  runAway: {
    text: "You flee from the Wall, but you can never escape the horrors of the coming war. Mission failed.",
    choices: [],
    image: "https://i.redd.it/theres-no-way-i-could-stand-on-the-edge-of-the-wall-v0-aw1ry80bowrc1.jpg?width=1178&format=pjpg&auto=webp&s=5a4ab60a16ef604c00432b440ef3b2866a633fa6"
  },
  endDecline: {
    text: "You chose not to join the Night's Watch. The kingdom is left unprotected, and the forces of darkness take control. Mission failed.",
    choices: [],
    image: "https://i.ytimg.com/vi/7hvnaror92U/maxresdefault.jpg"
  },
  // Additional Endings
  confrontWhiteWalker: {
    text: "You take a stand and confront the White Walkers in their icy lair. Do you attack head-on or try to sneak past them?",
    choices: [
      { text: "Attack head-on", nextStage: "headOnWhiteWalker" },
      { text: "Sneak past", nextStage: "sneakPastWhiteWalker" }
    ],
    image: "https://api.time.com/wp-content/uploads/2016/03/white-walkers-gamme-of-thrones.jpg"
  },
  sneakPastWhiteWalker: {
    text: "You manage to sneak past the White Walkers and find an ancient artifact that can help defeat them. Mission Accomplished!",
    choices: [],
    image: "https://media-assets.wired.it/photos/615ee9527d6c0ba8f0c4ef66/master/w_1600%2Cc_limit/1442393979_o-JON-SNOW-facebook.jpg"
  },
  headOnWhiteWalker: {
    text: "The White Walkers are too powerful, and despite your best efforts, you fall. Mission failed.",
    choices: [],
    image: "https://consequence.net/wp-content/uploads/2019/04/walkers-2.jpg?quality=80"
  }
};

// Function to start the game
function startGame() {
  currentStage = storyStages.start;
  updatePage();
}

// Function to update the page based on the current stage
function updatePage() {
  document.getElementById("story-text").innerText = currentStage.text;
  document.getElementById("story-image").src = currentStage.image;

  const choicesSection = document.getElementById("choices-section");
  choicesSection.innerHTML = '';

  currentStage.choices.forEach(choice => {
    const button = document.createElement("button");
    button.innerText = choice.text;
    button.onclick = () => makeChoice(choice.nextStage);
    choicesSection.appendChild(button);
  });
}

// Function to handle choices and navigate to the next stage
function makeChoice(nextStageKey) {
  currentStage = storyStages[nextStageKey];
  updatePage();
}

// Set up the restart button
document.getElementById("reset-button").onclick = startGame;

// Start the game when the page loads
let currentStage;
window.onload = startGame;
