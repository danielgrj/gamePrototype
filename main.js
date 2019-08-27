import { KnightOne, KnightTwo } from './knight.js';
import getTileCoordinates from './utils.js';
import { highlightPath, drawMap } from './map.js';

const bodyHeight = document.body.offsetHeight;
const bodyWidth = document.body.offsetWidth;

const button = document.querySelector('button');
const canvas = document.querySelector('canvas');
const gameScreen = document.querySelector('#game');
const homeScreen = document.querySelector('#homeScreen');
canvas.style.top = (bodyHeight - canvas.height) / 2;
canvas.style.left = (bodyWidth - canvas.width) / 2;

const menuMusic = new Audio();
menuMusic.src = 'http://23.237.126.42/ost/fire-emblem-heroes/wkcvvcla/04%20Menu%20Normal.mp3';
menuMusic.loop = true;

const context = canvas.getContext('2d');
let animationId;
let gameState = true;
let currentTile;
let attacker;
let defender;
let tiemId;

const knight = new KnightOne(
  10,
  5,
  10,
  10,
  context,
  {
    x: 120,
    y: 120
  },
  'blue'
);
const knight2 = new KnightTwo(
  10,
  5,
  10,
  10,
  context,
  {
    x: 360,
    y: 240
  },
  'red'
);

const arrayGameObjects = [];
arrayGameObjects.push(knight);
arrayGameObjects.push(knight2);

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
  let backgroundImage = new Image();
  backgroundImage.src = './assets/maps/desertBattle.png';
  backgroundImage.onload = () => {
    context.drawImage(backgroundImage, 0, 0, 1920, 1080, 0, 150, canvas.width, 300);
  };
  ellipse(context, 212, 395, 50, 10);
  attacker.setBattleAnimation();
  attacker.sprites.attack.update();
  attacker.sprites.attack.render();
}

function gameLoop(spriteCall) {
  console.log(gameState);
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

//function randomTime(min, max) {
//  return Math.round(Math.random() * (max - min) + min)
//}
//Add an option to change the size of the screen // canvas

const board = document.querySelector('main');

// board.onmouseover = e => {
//   if (e.target.className.includes('select')) return;
//   e.target.className = 'hover';
// };

// board.onmouseout = e => {
//   if (e.target.className.includes('select')) return;
//   e.target.className = '';
// };

board.onclick = e => {
  arrayGameObjects.forEach(object => {
    if (object.isSelected) {
      if ([...document.querySelectorAll('.highlight')].includes(e.target)) {
        object.currentAnimation.setGoal(getTileCoordinates(e.target));

        arrayGameObjects.forEach(enemie => {
          if (enemie !== object && enemie.team !== object.team) {
            attacker = object;
            defender = enemie;
            gameState = false;
            setTimeout(() => {
              gameState = true;
            }, 3500);
          }
        });
      }
      object.isSelected = false;
      [...document.querySelectorAll('[tile]')].forEach(tile => {
        tile.className = '';
      });
    } else if (
      object.getCharacterCoordinates().x === getTileCoordinates(e.target).x &&
      object.getCharacterCoordinates().y === getTileCoordinates(e.target).y
    ) {
      object.isSelected = true;
      currentTile = e.target;
      currentTile.className = 'select';

      highlightPath(object.getCharacterCoordinates(), object.movementAbility).forEach(coordinate => {
        if (
          document.querySelector(`[tile="${coordinate}"]`) !== null &&
          coordinate !== `${object.getCharacterCoordinates().x},${object.getCharacterCoordinates().y}`
        ) {
          document.querySelector(`[tile="${coordinate}"]`).className = 'highlight';
        }
      });
    }
  });
};

button.onclick = () => {
  homeScreen.style.display = 'none';
  gameScreen.style.display = '';
  menuMusic.pause();
  menuMusic.src = 'http://23.237.126.42/ost/fire-emblem-heroes/gzjxtkxi/26%20Battle%20Player.mp3';
  menuMusic.play();
  start();
};

document.body.onload = () => {
  menuMusic.play();
};
