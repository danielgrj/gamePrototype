import { KnightThree } from './knight.js';
import { GreenTroll, GrayTroll } from './troll.js';

const background = new Image();
background.src = './assets/ui/introBackground.png';
const canvas = document.querySelector('#selectionCanvas');
const context = canvas.getContext('2d');
const playersSelection = [];

const knight = new KnightThree(10, 5, 10, 10, context, {
  x: 90,
  y: 300
});
const troll = new GreenTroll(10, 5, 10, 10, context, {
  x: 310,
  y: 300
});
const other = new GrayTroll(10, 5, 10, 10, context, {
  x: 530,
  y: 300
});

knight.sprites.attack.position = {
  x: 80,
  y: 300
};
troll.sprites.attack.scale = 0.6;
troll.sprites.attack.position = {
  x: 280,
  y: 250
};
other.sprites.attack.scale = 0.6;
other.sprites.attack.position = {
  x: 500,
  y: 250
};

const playIntro = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(background, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
  context.globalAlpha = 0.5;
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.globalAlpha = 1;
  knight.currentAnimation.update();
  knight.currentAnimation.render();
  troll.currentAnimation.update();
  troll.currentAnimation.render();
  other.currentAnimation.update();
  other.currentAnimation.render();
  window.requestAnimationFrame(playIntro);
};

const chooseFaction = e => {
  const selection = e.target.getAttribute('selection');
  if (selection === 'knights' || selection === 'trolls' || selection === 'other') {
    document.querySelector('#selectionScreen').className = 'p2';
    document.querySelector('#selectionScreen h3').innerHTML = 'P2';
    playersSelection.push(selection);
    if (playersSelection.length > 1) {
      return playersSelection;
    }
  }
};

const changeAnimationSelection = e => {
  const selection = e.target.getAttribute('selection');
  console.log(selection);
  if (selection === 'knights') {
    knight.currentAnimation = knight.sprites.attack;
  } else if (selection === 'trolls') {
    troll.currentAnimation = troll.sprites.attack;
  } else if (selection === 'other') {
    other.currentAnimation = other.sprites.attack;
  }
};

const clearAnimation = () => {
  knight.currentAnimation = knight.sprites.idle;
  troll.currentAnimation = troll.sprites.idle;
  other.currentAnimation = other.sprites.idle;
};

export { playIntro, changeAnimationSelection, clearAnimation, chooseFaction };
