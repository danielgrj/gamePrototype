import { Knights } from './knight.js';
import { Trolls } from './troll.js';
import { Goblins } from './goblin.js';
import { drawMap, getTileCoordinates } from './map.js';
import { playIntro, changeAnimationSelection, clearAnimation, chooseFaction, clearVariables } from './intro.js';
import { battle } from './battle.js';
import showInformation from './info.js';

const button = document.querySelector('button');
const newGameButton = document.querySelector('#replay');
const canvas = document.querySelector('#gameCanvas');

const gameScreen = document.querySelector('#game');
const homeScreen = document.querySelector('#homeScreen');
const board = document.querySelector('#game > main');
const selectionScreen = document.querySelector('#selectionScreen>main');
const finalScreen = document.querySelector('#finalScreen');
const turnCard = document.querySelector('#changeTurn');

const context = canvas.getContext('2d');

const menuMusic = new Audio();
menuMusic.src = 'http://23.237.126.42/ost/fire-emblem-heroes/wkcvvcla/04%20Menu%20Normal.mp3';
menuMusic.loop = true;
menuMusic.volume = 0.3;
const battleMusic = new Audio();
battleMusic.src = 'http://23.237.126.42/ost/fire-emblem-heroes/gzjxtkxi/26%20Battle%20Player.mp3';
battleMusic.loop = true;
battleMusic.volume = 0.4;
const selectionMusic = new Audio();
selectionMusic.src = 'http://23.237.126.42/ost/fire-emblem-heroes/zqaldfzc/12%20Summon%20Common.mp3';
selectionMusic.loop = true;
selectionMusic.volume = 0.4;
const winningMusic = new Audio();
winningMusic.src = 'http://23.237.126.42/ost/fire-emblem-awakening/rzkqktmf/2-02%20Destiny~Ablaze.mp3';
winningMusic.loop = true;
winningMusic.volume = 0.45;
const selectionEffect = new Audio();
selectionEffect.src = 'https://gamepedia.cursecdn.com/feheroes_gamepedia_en/b/ba/Se_sys_phase_player1.flac';
selectionEffect.volume = 0.8;
const turnEffect = new Audio();
turnEffect.src = 'https://gamepedia.cursecdn.com/feheroes_gamepedia_en/0/00/Se_sys_home_friend.flac';
const attackEffect = new Audio();
attackEffect.src = 'https://gamepedia.cursecdn.com/feheroes_gamepedia_en/d/db/Battle_5.flac';
const walkEffect = new Audio();
walkEffect.src = 'https://gamepedia.cursecdn.com/feheroes_gamepedia_en/e/e5/Se_fs_normal_sand_3.flac';

let animationId;
let introId;
let playersFactions;
let playerOne;
let playerTwo;
let gameState = true;
let playerPlaying;
let playerWaiting;
let attacker;
let defender;
let winner;
let walker;

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

function endMatch() {
  finalScreen.children[0].className = winner === 'Player 1' ? 'fs-bg-red' : 'fs-bg-blue';
  finalScreen.style.display = '';
  finalScreen.children[0].children[1].innerHTML = winner;
  battleMusic.pause();
  winningMusic.play();
}

function gameLoop() {
  animationId = undefined;
  if (
    !gameState &&
    attacker.getCharacterCoordinates().x === attacker.getGoalCoordinates().x &&
    attacker.getCharacterCoordinates().y === attacker.getGoalCoordinates().y
  ) {
    animationId = undefined;
    attackEffect.play();
    showInformation(playerOne, 'infoP1', attacker);
    showInformation(playerTwo, 'infoP2', attacker);
    showInformation(playerOne, 'infoP1', defender, false);
    showInformation(playerTwo, 'infoP2', defender, false);
    drawBattle();
    start();
    return;
  }
  if (playerOne.units.length === 0) {
    winner = 'Player 2';
    setTimeout(endMatch, 300);
    stop();
    return;
  } else if (playerTwo.units.length === 0) {
    winner = 'Player 1';
    setTimeout(endMatch, 300);
    stop();
    return;
  }
  if (
    playerPlaying.movementsLeft === 0 &&
    walker.getCharacterCoordinates().x === walker.getGoalCoordinates().x &&
    walker.getCharacterCoordinates().y === walker.getGoalCoordinates().y
  ) {
    if (playerPlaying === playerOne) {
      playerTwo.movementsLeft = 2;
      playerPlaying = playerTwo;
      playerWaiting = playerOne;
    } else {
      playerOne.movementsLeft = 2;
      playerPlaying = playerOne;
      playerWaiting = playerTwo;
    }
    changeTurn();
  }
  showInformation(playerOne, 'infoP1');
  showInformation(playerTwo, 'infoP2');
  // animationId = undefined;
  drawMap(context);
  playerOne.render();
  playerTwo.render();
  playerOne.deleteDeaths();
  playerTwo.deleteDeaths();
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
        walker = attacker;
        playerPlaying.movementsLeft--;
      } else if (e.target.className.includes('combat-ready')) {
        gameState = false;
        defender = playerWaiting.getUnitByTile(e.target);
        battle(attacker, defender);
        [...document.querySelectorAll('[tile]')].forEach(tile => {
          tile.className = '';
        });
        playerPlaying.movementsLeft--;
        const destination = defender.getCharacterCoordinates();
        if (attacker.getCharacterCoordinates().x === destination.x) {
          if (attacker.getCharacterCoordinates().y < destination.y) {
            destination.y--;
          } else {
            destination.y++;
          }
        } else {
          if (attacker.getCharacterCoordinates().x < destination.x) {
            destination.x--;
          } else {
            destination.x++;
          }
        }
        attacker.currentAnimation.setGoal(destination);
        // setTimeout(() => attackEffect.play(), 1200);
        setTimeout(() => {
          gameState = true;
          attacker = undefined;
          if (playerPlaying.movementsLeft === 0 && playerWaiting.units.length !== 1 && defender.health > 0) {
            if (playerPlaying === playerOne) {
              playerTwo.movementsLeft = 2;
              playerPlaying = playerTwo;
              playerWaiting = playerOne;
            } else {
              playerOne.movementsLeft = 2;
              playerPlaying = playerOne;
              playerWaiting = playerTwo;
            }
            changeTurn();
          }
        }, 3500);
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

function requestIntro() {
  introId = undefined;
  playIntro();
  startIntro();
}

function startIntro() {
  if (!introId) {
    introId = window.requestAnimationFrame(requestIntro);
  }
}

function stopIntro() {
  if (introId) {
    window.cancelAnimationFrame(introId);
    introId = undefined;
  }
}

function changeTurn() {
  turnEffect.play();
  turnCard.children[0].children[0].innerHTML = playerPlaying === playerOne ? 'Player 1' : 'Player 2';
  turnCard.children[0].className = playerPlaying === playerOne ? 'fs-bg-red' : 'fs-bg-blue';
  turnCard.style.display = '';

  setTimeout(() => (turnCard.style.display = 'none'), 5000);
}

button.onclick = () => {
  homeScreen.style.display = 'none';
  document.querySelector('#selectionScreen').style.display = '';
  menuMusic.pause();
  selectionMusic.play();
  startIntro();
  selectionEffect.play();
};

selectionScreen.onmouseover = changeAnimationSelection;
selectionScreen.onmouseout = clearAnimation;
selectionScreen.onclick = e => {
  selectionEffect.play();
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
        playerOne = new Goblins(context);
        break;
    }
    switch (playersFactions[1]) {
      case 'knights':
        playerTwo = new Knights(context, false);
        break;
      case 'trolls':
        playerTwo = new Trolls(context, false);
        break;
      case 'goblins':
        playerTwo = new Goblins(context, false);
        break;
    }
    playerPlaying = playerOne;
    playerWaiting = playerTwo;
    selectionMusic.pause();
    changeTurn();
    showInformation(playerOne, 'infoP1');
    showInformation(playerTwo, 'infoP2');
    stopIntro();
    battleMusic.play();
    start();
  }
};

newGameButton.onclick = () => {
  finalScreen.style.display = 'none';
  gameScreen.style.display = 'none';

  animationId = undefined;
  introId = undefined;
  playersFactions = [];
  playerOne = undefined;
  playerTwo = undefined;
  gameState = true;
  playerPlaying = undefined;
  playerWaiting = undefined;
  attacker = undefined;
  defender = undefined;
  winner = undefined;

  showInformation(playerOne, 'infoP1');
  showInformation(playerTwo, 'infoP2');

  selectionEffect.play();
  document.querySelector('#selectionScreen').className = 'p1';
  document.querySelector('#selectionScreen h3').innerHTML = 'P1';
  selectionMusic.play();
  clearVariables();
  winningMusic.pause();
  startIntro();
  document.querySelector('#selectionScreen').style.display = '';
};

turnCard.onclick = () => {
  turnCard.style.display = 'none';
};

document.body.onload = () => {
  menuMusic.play();
};

board.onmouseover = e => {
  if (
    e.target.className.includes('select') ||
    e.target.className.includes('highlight') ||
    e.target.className.includes('combat-ready') ||
    !gameState
  )
    return;
  e.target.className = 'hover';
};

board.onmouseout = e => {
  if (e.target.className.includes('hover') || !gameState) return (e.target.className = '');
};
