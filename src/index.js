class Character {
  constructor(name, health, attack, defense, spriteOptions) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.sprites = {};
    this.sprites.idle = new Sprite(spriteOptions.idle);
    // this.sprites.walk = new Sprite(spriteOptions.walk);
    // this.sprites.attack = new Sprite(spriteOptions.attack);
    // this.sprites.damaged = new Sprite(spriteOptions.damaged);
    // this.sprites.dead = new Sprite(spriteOptions.dead);
    this.currentAnimation = this.sprites.idle;
  }
}

class Knight extends Character {
  constructor(name, health, attack, defense, imagePath, context) {
    super(name, health, attack, defense, {
      idle: {
        context,
        width: 490,
        height: 351,
        imagePath,
        positionX: 0,
        positionY: 0,
        numberOfFrames: 4,
        loop: true,
        ticksPerFrame: 3,
        scale: 0.2
      }
    });
  }
}

class Sprite {
  constructor({
    context,
    width,
    height,
    imagePath,
    positionX,
    positionY,
    ticksPerFrame = 0,
    numberOfFrames,
    scale = 1
  }) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.positionX = positionX;
    this.positionY = positionY;
    this.image = new Image();
    this.image.src = imagePath;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = ticksPerFrame;
    this.numberOfFrames = numberOfFrames;
    this.scale = scale;
  }

  render() {
    this.context.clearRect(this.positionX - 1, this.positionY - 1, this.width + 1, this.height + 1);
    this.context.drawImage(
      this.image,
      this.width * this.frameIndex,
      0,
      this.width,
      this.height,
      this.positionX,
      this.positionY,
      Math.floor(this.width * this.scale),
      Math.floor(this.height * this.scale)
    );
  }

  update() {
    this.tickCount++;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      if (this.frameIndex < this.numberOfFrames) {
        this.frameIndex++;
      } else {
        this.frameIndex = 0;
      }
    }
  }

  move(destination) {
    if (this.positionX < destination.x) {
      this.positionX++;
    } else if (this.positionY < destination.y) {
      this.positionY++;
    }
    return true;
  }
}

const canvas = document.getElementById('main');
const context = canvas.getContext('2d');
let animationId;

const knight = new Knight(10, 5, 10, 10, './../Assets/SpriteSheets/Knight1.png', context);

const sprite = new Sprite({
  context,
  width: 490,
  height: 351,
  imagePath: './../Assets/SpriteSheets/Knight1.png',
  positionX: 0,
  positionY: 0,
  numberOfFrames: 4,
  loop: true,
  ticksPerFrame: 3,
  scale: 0.2
});

const sprite2 = new Sprite({
  context,
  width: 490,
  height: 351,
  imagePath: './../Assets/SpriteSheets/Knight1.png',
  positionX: 300,
  positionY: 300,
  numberOfFrames: 4,
  loop: true,
  ticksPerFrame: 3,
  scale: 0.5
});

setTimeout(() => {
  // animationId = window.requestAnimationFrame(gameLoop);
}, 1000);

document.body.onload = () => {
  start();
};

document.body.onclick = () => {
  if (animationId) return stop();
  start();
};

function gameLoop(spriteCall) {
  animationId = undefined;
  /*arrayGameObjects.forEach(() => {
    Character.currentAnimation.update()
    Character.currentAnimation.move()
    Character.currentAnimation.render()
  })*/
  //Character.currentAnimation.update()
  // sprite.update();
  // sprite.move({ x: 100, y: 100 });
  // sprite.render();
  knight.currentAnimation.update();
  knight.currentAnimation.move({ x: 100, y: 100 });
  knight.currentAnimation.render();
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
