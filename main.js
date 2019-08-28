import { Knights } from './knight.js';
import { Trolls } from './troll.js';
import { Goblins } from './goblin.js';
import { drawMap, getTileCoordinates } from './map.js';
import { playIntro, changeAnimationSelection, clearAnimation, chooseFaction } from './intro.js';

const button = document.querySelector('button');
const canvas = document.querySelector('#gameCanvas');
const gameScreen = document.querySelector('#game');
const homeScreen = document.querySelector('#homeScreen');
const board = document.querySelector('#game > main');
const selectionScreen = document.querySelector('#selectionScreen>main');

const context = canvas.getContext('2d');

// const menuMusic = new Audio();
// menuMusic.src = 'http://23.237.126.42/ost/fire-emblem-heroes/wkcvvcla/04%20Menu%20Normal.mp3';
// menuMusic.loop = true;

let animationId;
let playersFactions;
let playerOne;
let playerTwo;
let gameState = true;
let playerPlaying;
let playerWaiting;
let attacker;
let defender;

function ellipse(context, cx, cy, rx, ry) {
  context.fillStyle = '#404040';
  context.save(); // save state
  context.beginPath();

  context.translate(cx - rx, cy - ry);
  context.scale(rx, ry);
  context.arc(1, 1, 1, 0, 2 * Math.PI, false);

  context.restore(); // restore to original state
  context.fill();
}

function drawBattle() {
  // context.globalAlpha = 0.3;
  // context.fillStyle = 'black';
  // context.fillRect(0, 0, canvas.width, canvas.height);
  // context.globalAlpha = 1;
  const backgroundImage = new Image();
  backgroundImage.src = './assets/maps/desertBattle.png';
  backgroundImage.onload = () => {
    context.drawImage(backgroundImage, 0, 0, 1920, 1080, 0, 150, canvas.width, 300);
  };
  ellipse(context, 162, 395, 50, 10);
  attacker.setBattleAnimation();
  attacker.sprites.attack.update();
  attacker.sprites.attack.render();
  ellipse(context, 552, 395, 50, 10);
  defender.setHurtAnimation();
  defender.sprites.hurt.update();
  defender.sprites.hurt.render();
}

function gameLoop(spriteCall) {
  if (
    !gameState &&
    attacker.getCharacterCoordinates().x === attacker.getGoalCoordinates().x &&
    attacker.getCharacterCoordinates().y === attacker.getGoalCoordinates().y
  ) {
    animationId = undefined;
    drawBattle();
    start();
    return;
  }
  animationId = undefined;
  drawMap(context);
  playerOne.render();
  playerTwo.render();
  start();
}

function start() {
  if (!animationId) {
    animationId = window.requestAnimationFrame(gameLoop);
  }
}

function stop() {
  if (animationId) {
    window.cancelAnimationFrame(animationId);
    animationId = undefined;
  }
}

const controlUnits = e => {
  if (gameState) {
    if (attacker) {
      if (e.target.className.includes('highlight')) {
        attacker.currentAnimation.setGoal(getTileCoordinates(e.target));
        playerPlaying.movementsLeft--;
      } else if (e.target.className.includes('combat-ready')) {
        gameState = false;
        defender = playerWaiting.getUnitByTile(e.target);
        setTimeout(() => {
          gameState = true;
          attacker = undefined;
        }, 3500);
        [...document.querySelectorAll('[tile]')].forEach(tile => {
          tile.className = '';
        });
        playerPlaying.movementsLeft--;
        return;
      }
      [...document.querySelectorAll('[tile]')].forEach(tile => {
        tile.className = '';
      });
      attacker = undefined;
    } else {
      attacker = playerPlaying.turn(e.target);
      playerWaiting.highlightTargets();
    }
  } else {
    gameState = true;
    attacker = undefined;
  }
};

board.onclick = controlUnits;

board.onmouseout = () => {
  console.log(playerPlaying.movementsLeft);
  if (playerPlaying.movementsLeft === 0) {
    if (playerPlaying === playerOne) {
      playerTwo.movementsLeft = 2;
      playerPlaying = playerTwo;
      playerWaiting = playerOne;
    } else {
      playerOne.movementsLeft = 2;
      playerPlaying = playerOne;
      playerWaiting = playerTwo;
    }
  }
};

button.onclick = () => {
  homeScreen.style.display = 'none';
  document.querySelector('#selectionScreen').style.display = '';
  // menuMusic.pause();
  // menuMusic.src = 'http://23.237.126.42/ost/fire-emblem-heroes/gzjxtkxi/26%20Battle%20Player.mp3';
  // menuMusic.play();
  window.requestAnimationFrame(playIntro);
};

selectionScreen.onmouseover = changeAnimationSelection;
selectionScreen.onmouseout = clearAnimation;
selectionScreen.onclick = e => {
  playersFactions = chooseFaction(e);
  if (playersFactions) {
    document.querySelector('#selectionScreen').style.display = 'none';
    gameScreen.style.display = '';
    switch (playersFactions[0]) {
      case 'knights':
        playerOne = new Knights(context);
        break;
      case 'trolls':
        playerOne = new Trolls(context);
        break;
      case 'goblins':
        playerOne = new Goblins(contex);
        break;
    }
    switch (playersFactions[1]) {
      case 'knights':
        playerTwo = new Knights(context);
        break;
      case 'trolls':
        playerTwo = new Trolls(context);
        break;
      case 'goblins':
        playerOne = new Goblins(contex);
        break;
    }

    playerPlaying = playerOne;
    playerWaiting = playerTwo;
    start();
  }
};

// document.body.onload = () => {
//   menuMusic.play();
// };

// board.onmouseover = e => {
//   if (e.target.className.includes('select')) return;
//   e.target.className = 'hover';
// };

// board.onmouseout = e => {
//   if (e.target.className.includes('select')) return;
//   e.target.className = '';
// };
