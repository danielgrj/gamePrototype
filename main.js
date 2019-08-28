import { KnightOne, KnightTwo, KnightThree } from './knight.js';
import { GreenTroll, GrayTroll, RedTroll } from './troll.js';
import { highlightPath, drawMap, highlightCombat, getTileCoordinates } from './map.js';

import { playIntro, changeAnimationSelection, clearAnimation, chooseFaction } from './intro.js';
let playersFactions;
const selectionScreen = document.querySelector('#selectionScreen>main');

selectionScreen.onmouseover = changeAnimationSelection;
selectionScreen.onmouseout = clearAnimation;
selectionScreen.onclick = e => {
  playersFactions = chooseFaction(e);
  if (playersFactions) {
    document.querySelector('#selectionScreen').style.display = 'none';
    gameScreen.style.display = '';
    start();
  }
};

const button = document.querySelector('button');
const canvas = document.querySelector('#gameCanvas');
const gameScreen = document.querySelector('#game');
const homeScreen = document.querySelector('#homeScreen');
const board = document.querySelector('#game > main');

const context = canvas.getContext('2d');

const menuMusic = new Audio();
menuMusic.src = 'http://23.237.126.42/ost/fire-emblem-heroes/wkcvvcla/04%20Menu%20Normal.mp3';
menuMusic.loop = true;

let animationId;
let gameState = true;
let playerTurn = 'knights';
let attacker;
let defender;

const knight = new KnightOne(10, 5, 10, 10, context, {
  x: 120,
  y: 120
});
const knight2 = new KnightTwo(10, 5, 10, 10, context, {
  x: 360,
  y: 240
});
const knight3 = new KnightThree(10, 5, 10, 10, context, {
  x: 480,
  y: 240
});
const grenTroll = new GreenTroll(10, 5, 10, 10, context, {
  x: 480,
  y: 120
});
const grayTroll = new GrayTroll(10, 5, 10, 10, context, {
  x: 480,
  y: 360
});
const redTroll = new RedTroll(10, 5, 10, 10, context, {
  x: 600,
  y: 240
});

const arrayGameObjects = [];
arrayGameObjects.push(knight);
arrayGameObjects.push(knight2);
arrayGameObjects.push(knight3);
arrayGameObjects.push(grenTroll);
arrayGameObjects.push(grayTroll);
arrayGameObjects.push(redTroll);

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
  console.log(defender);
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
  arrayGameObjects.forEach(gameObject => {
    gameObject.currentAnimation.update();
    gameObject.currentAnimation.move();
    gameObject.currentAnimation.render();

    gameObject.setWalkAnimation();
  });
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
      } else if (e.target.className.includes('combat-ready')) {
        gameState = false;
        arrayGameObjects.forEach(object => {
          if (
            object.getCharacterCoordinates().x === getTileCoordinates(e.target).x &&
            object.getCharacterCoordinates().y === getTileCoordinates(e.target).y
          )
            defender = object;
        });
        setTimeout(() => {
          gameState = true;
          attacker = undefined;
        }, 3500);
        [...document.querySelectorAll('[tile]')].forEach(tile => {
          tile.className = '';
        });
        return;
      }
      [...document.querySelectorAll('[tile]')].forEach(tile => {
        tile.className = '';
      });
      attacker = undefined;
    } else {
      arrayGameObjects.forEach(object => {
        if (
          object.getCharacterCoordinates().x === getTileCoordinates(e.target).x &&
          object.getCharacterCoordinates().y === getTileCoordinates(e.target).y &&
          object.team === playerTurn &&
          gameState
        ) {
          attacker = object;
          e.target.className = 'select';
          highlightPath(object.getCharacterCoordinates(), object.movementAbility);
          arrayGameObjects.forEach(enemie => {
            if (enemie !== object && enemie.team !== object.team) {
              highlightCombat(enemie.getCharacterCoordinates());
            }
          });
        }
      });
    }
  } else {
    gameState = true;
    attacker = undefined;
  }
};

board.onclick = controlUnits;

button.onclick = () => {
  homeScreen.style.display = 'none';
  document.querySelector('#selectionScreen').style.display = ''; // menuMusic.pause();
  // menuMusic.src = 'http://23.237.126.42/ost/fire-emblem-heroes/gzjxtkxi/26%20Battle%20Player.mp3';
  // menuMusic.play();
  window.requestAnimationFrame(playIntro);
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
