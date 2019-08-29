import Character from './character.js';
import Battalion from './battalion.js';

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
          scale: 0.45
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
          scale: 0.45
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
          scale: 0.35
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
          scale: 0.35
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
          scale: 0.45
        },
        hurt: {
          context,
          width: 345,
          height: 320,
          imagePath: './assets/Character/Knight/2/hurt.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.55
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
      'knights',
      { x: 2, y: 2 }
    );
  }
}

class KnightThree extends Character {
  constructor(name, health, attack, defense, context, position) {
    super(
      name,
      health,
      attack,
      defense,
      {
        idle: {
          context,
          width: 348,
          height: 320,
          imagePath: './assets/Character/Knight/3/idle.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.35
        },
        walk: {
          context,
          width: 371,
          height: 320,
          imagePath: './assets/Character/Knight/3/walk.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.35
        },
        attack: {
          context,
          width: 367,
          height: 331,
          imagePath: './assets/Character/Knight/3/attack.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.45
        },
        hurt: {
          context,
          width: 367,
          height: 320,
          imagePath: './assets/Character/Knight/3/hurt.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.5
        },
        dead: {
          context,
          width: 381,
          height: 320,
          imagePath: './assets/Character/Knight/3/die.png',
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

class Knights extends Battalion {
  constructor(context, player = true) {
    const positions = player
      ? [{ x: 0, y: 480 }, { x: 120, y: 360 }, { x: 240, y: 480 }]
      : [{ x: 360, y: 0 }, { x: 480, y: 120 }, { x: 600, y: 0 }];

    super(
      [
        new KnightOne(10, 5, 10, 10, context, positions[0]),
        new KnightTwo(10, 5, 10, 10, context, positions[1]),
        new KnightThree(10, 5, 10, 10, context, positions[2])
      ],
      'knights'
    );
  }
}

export { KnightOne, KnightTwo, KnightThree, Knights };
