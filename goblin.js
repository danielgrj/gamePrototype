import Character from './character.js';
import Battalion from './battalion.js';

export default class GoblinOne extends Character {
  constructor(name, health, attack, defense, context, position) {
    super(
      name,
      health,
      attack,
      defense,
      {
        idle: {
          context,
          width: 320,
          height: 320,
          imagePath: './assets/Character/Goblin/2/idle.png',
          position,
          numberOfFrames: 10,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.4
        },
        walk: {
          context,
          width: 320,
          height: 320,
          imagePath: './assets/Character/Goblin/2/walk.png',
          position,
          numberOfFrames: 10,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.3
        },
        attack: {
          context,
          width: 320,
          height: 320,
          imagePath: './assets/Character/Goblin/2/attack.png',
          position,
          numberOfFrames: 7,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.3
        },
        hurt: {
          context,
          width: 320,
          height: 320,
          imagePath: './assets/Character/Goblin/2/hurt.png',
          position,
          numberOfFrames: 10,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.45
        },
        dead: {
          context,
          width: 320,
          height: 320,
          imagePath: './assets/Character/Goblin/2/die.png',
          position,
          numberOfFrames: 10,
          loop: true,
          ticksPerFrame: 6,
          scale: 0.3
        }
      },
      'goblin',
      { x: 2, y: 2 }
    );
  }
}

class Goblins extends Battalion {
  constructor(context) {
    super([
      [
        new GoblinOne(10, 5, 10, 10, context, {
          x: 120,
          y: 120
        }),
        new GoblinOne(10, 5, 10, 10, context, {
          x: 360,
          y: 240
        }),
        new GoblinOne(10, 5, 10, 10, context, {
          x: 480,
          y: 240
        })
      ]
    ]);
  }
}
