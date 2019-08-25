import Knight from './knight.js';
import getTileCoordinates from './utils.js';

const canvas = document.querySelector('canvas');
canvas.width = 720;
canvas.height = 600;
const context = canvas.getContext('2d');
let animationId;
let gameState = true;

const knight = new Knight(
  10,
  5,
  10,
  10,
  context,
  {
    x: 0,
    y: 0
  },
  'blue'
);
const knight2 = new Knight(
  10,
  5,
  10,
  10,
  context,
  {
    x: 300,
    y: 300
  },
  'red'
);

const arrayGameObjects = [];
arrayGameObjects.push(knight);
arrayGameObjects.push(knight2);

document.body.onload = () => {
  start();
};

// document.body.onclick = () => {
//   if (animationId) return stop();
//   start();
// };

function drawBattle() {
  context.fillStyle = 'white';
  context.fillRect(0, 150, canvas.width, 300);
}

function gameLoop(spriteCall) {
  if (gameState) {
    animationId = undefined;
    arrayGameObjects.forEach(gameObject => {
      gameObject.currentAnimation.update();
      gameObject.currentAnimation.move(gameObject.goal);
      gameObject.currentAnimation.render();
    });
    context.save();
  } else {
    animationId = undefined;
    drawBattle();
  }
  /*arrayGameObjects.forEach(() => {
    Character.currentAnimation.update()
    Character.currentAnimation.move()
    Character.currentAnimation.render()
  })*/
  //Character.currentAnimation.update()
  // sprite.update();
  // sprite.move({ x: 100, y: 100 });
  // sprite.render();
  // knight.currentAnimation.update();
  // knight.currentAnimation.move({ x: 100, y: 100 });
  // knight.currentAnimation.render();
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

//Use e.target to know what element is clicked
//function randomTime(min, max) {
//  return Math.round(Math.random() * (max - min) + min)
//}
//Add an option to change the size of the screen // canvas

const board = document.querySelector('main');

// board.onmouseover = () => {
//   if (board.className.includes('select')) return;
//   board.className = 'hover';
// };

// board.onmouseout = () => {
//   if (board.className.includes('select')) return;
//   board.className = '';
// };

board.onclick = e => {
  arrayGameObjects.forEach(object => {
    if (object.isSelected) {
      object.currentAnimation.setGoal(getTileCoordinates(e.target));
      object.isSelected = false;
      arrayGameObjects.forEach(enemie => {
        if (enemie !== object && enemie.team !== object.team) {
          setTimeout(() => (gameState = false), 500);
          setTimeout(() => {
            context.restore();
            gameState = true;
          }, 2000);
        }
      });
    } else if (
      object.getCharacterCoordinates().x === getTileCoordinates(e.target).x &&
      object.getCharacterCoordinates().y === getTileCoordinates(e.target).y
    ) {
      object.isSelected = true;
    }
  });
};
