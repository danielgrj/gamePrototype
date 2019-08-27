import Character from './character.js';

class GreenTroll extends Character {
  constructor(name, health, attack, defense, context, position) {
    super(
      name,
      health,
      attack,
      defense,
      {
        idle: {
          context,
          width: 461,
          height: 320,
          imagePath: './assets/Character/Troll/1/idle.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.3
        },
        walk: {
          context,
          width: 470,
          height: 320,
          imagePath: './assets/Character/Troll/1/walk.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.3
        },
        attack: {
          context,
          width: 368,
          height: 320,
          imagePath: './assets/Character/Troll/1/attack.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.7
        },
        hurt: {
          context,
          width: 402,
          height: 320,
          imagePath: './assets/Character/Troll/1/hurt.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.45
        },
        dead: {
          context,
          width: 569,
          height: 320,
          imagePath: './assets/Character/Troll/1/die.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 6,
          scale: 0.3
        }
      },
      'Trolls',
      { x: 2, y: 2 }
    );
  }
}

class GrayTroll extends Character {
  constructor(name, health, attack, defense, context, position) {
    super(
      name,
      health,
      attack,
      defense,
      {
        idle: {
          context,
          width: 445,
          height: 320,
          imagePath: './assets/Character/Troll/2/idle.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.35
        },
        walk: {
          context,
          width: 450,
          height: 320,
          imagePath: './assets/Character/Troll/2/walk.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.35
        },
        attack: {
          context,
          width: 369,
          height: 320,
          imagePath: './assets/Character/Troll/2/attack.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.7
        },
        hurt: {
          context,
          width: 388,
          height: 320,
          imagePath: './assets/Character/Troll/2/hurt.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.55
        },
        dead: {
          context,
          width: 596,
          height: 292,
          imagePath: './assets/Character/Troll/2/die.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 6,
          scale: 0.3
        }
      },
      'trolls',
      { x: 2, y: 2 }
    );
  }
}

class RedTroll extends Character {
  constructor(name, health, attack, defense, context, position) {
    super(
      name,
      health,
      attack,
      defense,
      {
        idle: {
          context,
          width: 421,
          height: 320,
          imagePath: './assets/Character/Troll/3/idle.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.35
        },
        walk: {
          context,
          width: 436,
          height: 320,
          imagePath: './assets/Character/Troll/3/walk.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.35
        },
        attack: {
          context,
          width: 380,
          height: 331,
          imagePath: './assets/Character/Troll/3/attack.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.7
        },
        hurt: {
          context,
          width: 375,
          height: 320,
          imagePath: './assets/Character/Troll/3/hurt.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.55
        },
        dead: {
          context,
          width: 596,
          height: 320,
          imagePath: './assets/Character/Troll/3/die.png',
          position,
          numberOfFrames: 6,
          loop: true,
          ticksPerFrame: 6,
          scale: 0.3
        }
      },
      'trolls',
      { x: 2, y: 2 }
    );
  }
}

export { GreenTroll, GrayTroll, RedTroll };
