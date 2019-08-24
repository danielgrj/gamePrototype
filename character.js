import Sprite from './sprite.js';

export default class Character {
  constructor(name, health, attack, defense, goal, spriteOptions, team) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.isSelected = false;
    this.team = team;
    this.sprites = {};
    this.sprites.idle = new Sprite(spriteOptions.idle);
    // this.sprites.walk = new Sprite(spriteOptions.walk);
    // this.sprites.attack = new Sprite(spriteOptions.attack);
    // this.sprites.damaged = new Sprite(spriteOptions.damaged);
    // this.sprites.dead = new Sprite(spriteOptions.dead);
    this.currentAnimation = this.sprites.idle;
  }

  getCharacterCoordinates() {
    return {
      x: Math.floor(this.currentAnimation.positionX / 120),
      y: Math.floor(this.currentAnimation.positionY / 120)
    };
  }
}
