import { KnightThree } from './knight.js';
import { GreenTroll, GrayTroll } from './troll.js';
import { GoblinOne } from './goblin.js';

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
  y: 310
});
const goblin = new GoblinOne(10, 5, 10, 10, context, {
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
goblin.sprites.attack.scale = 0.5;
goblin.sprites.attack.position = {
  x: 500,
  y: 300
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
  goblin.currentAnimation.update();
  goblin.currentAnimation.render();
  window.requestAnimationFrame(playIntro);
};

const chooseFaction = e => {
  const selection = e.target.getAttribute('selection');
  if (selection === 'knights' || selection === 'trolls' || selection === 'goblins') {
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
  } else if (selection === 'goblins') {
    goblin.currentAnimation = goblin.sprites.attack;
  }
};

const clearAnimation = () => {
  knight.currentAnimation = knight.sprites.idle;
  troll.currentAnimation = troll.sprites.idle;
  goblin.currentAnimation = goblin.sprites.idle;
};

export { playIntro, changeAnimationSelection, clearAnimation, chooseFaction };
