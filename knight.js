import Character from './character.js';

class KnightOne extends Character {
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
      'knights',
      { x: 2, y: 2 }
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
          width: 333,
          height: 320,
          imagePath: './assets/Character/Knight/2/idle.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.3
        },
        walk: {
          context,
          width: 348,
          height: 320,
          imagePath: './assets/Character/Knight/2/walk.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.3
        },
        attack: {
          context,
          width: 320,
          height: 331,
          imagePath: './assets/Character/Knight/2/attack.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.3
        },
        hurt: {
          context,
          width: 340,
          height: 320,
          imagePath: './assets/Character/Knight/2/hurt.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.3
        },
        dead: {
          context,
          width: 389,
          height: 320,
          imagePath: './assets/Character/Knight/2/die.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 6,
          scale: 0.3
        }
      },
      'knightsGolden',
      { x: 2, y: 2 }
    );
  }
}

export { KnightOne, KnightTwo };
