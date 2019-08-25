import Character from './character.js';

export default class Knight extends Character {
  constructor(name, health, attack, defense, context, position) {
    super(
      name,
      health,
      attack,
      defense,
      {
        idle: {
          context,
          width: 456,
          height: 320,
          imagePath: './assets/Character/Knight/1/idle.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.3
        },
        walk: {
          context,
          width: 456,
          height: 320,
          imagePath: './assets/Character/Knight/1/walk.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.3
        },
        attack: {
          context,
          width: 474,
          height: 320,
          imagePath: './assets/Character/Knight/1/attack.png',
          position,
          numberOfFrames: 7,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.3
        },
        hurt: {
          context,
          width: 449,
          height: 320,
          imagePath: './assets/Character/Knight/1/hurt.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.3
        },
        dead: {
          context,
          width: 430,
          height: 320,
          imagePath: './assets/Character/Knight/1/die.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 6,
          scale: 0.3
        }
      },
      'knights'
    );
  }
}

class KnightTwo extends Character {
  constructor(name, health, attack, defense, context, position) {
    super(
      name,
      health,
      attack,
      defense,
      {
        idle: {
          context,
          width: 456,
          height: 320,
          imagePath: './asts/Character/Knight/1/idle.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.3
        },
        walk: {
          context,
          width: 456,
          height: 320,
          imagePath: './asts/Character/Knight/1/walk.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.3
        },
        attack: {
          context,
          width: 474,
          height: 320,
          imagePath: './asts/Character/Knight/1/attack.png',
          position,
          numberOfFrames: 7,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.3
        },
        hurt: {
          context,
          width: 449,
          height: 320,
          imagePath: './asts/Character/Knight/1/hurt.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.3
        },
        dead: {
          context,
          width: 430,
          height: 320,
          imagePath: './asts/Character/Knight/1/die.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 6,
          scale: 0.3
        }
      },
      'knights'
    );
  }
}
