import Character from './character.js';
import Battalion from './battalion.js';

class GoblinOne extends Character {
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
          imagePath: './assets/Character/Goblin/1/idle.png',
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
          imagePath: './assets/Character/Goblin/1/walk.png',
          position,
          numberOfFrames: 10,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.4
        },
        attack: {
          context,
          width: 320,
          height: 320,
          imagePath: './assets/Character/Goblin/1/attack.png',
          position,
          numberOfFrames: 7,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.45
        },
        hurt: {
          context,
          width: 320,
          height: 320,
          imagePath: './assets/Character/Goblin/1/hurt.png',
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
          imagePath: './assets/Character/Goblin/1/die.png',
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

  setBattleAnimation() {
    this.sprites.attack.position = { x: 90, y: 270 };
  }

  setHurtAnimation() {
    this.sprites.hurt.position = { x: 470, y: 270 };
  }
}

class GoblinTwo extends Character {
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
          scale: 0.4
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
          scale: 0.45
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

  setBattleAnimation() {
    this.sprites.attack.position = { x: 90, y: 270 };
  }

  setHurtAnimation() {
    this.sprites.hurt.position = { x: 470, y: 270 };
  }
}

class GoblinThree extends Character {
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
          imagePath: './assets/Character/Goblin/3/idle.png',
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
          imagePath: './assets/Character/Goblin/3/walk.png',
          position,
          numberOfFrames: 10,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.4
        },
        attack: {
          context,
          width: 320,
          height: 320,
          imagePath: './assets/Character/Goblin/3/attack.png',
          position,
          numberOfFrames: 7,
          loop: true,
          ticksPerFrame: 4,
          scale: 0.45
        },
        hurt: {
          context,
          width: 320,
          height: 320,
          imagePath: './assets/Character/Goblin/3/hurt.png',
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
          imagePath: './assets/Character/Goblin/3/die.png',
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

  setBattleAnimation() {
    this.sprites.attack.position = { x: 90, y: 270 };
  }

  setHurtAnimation() {
    this.sprites.hurt.position = { x: 470, y: 270 };
  }
}

class Goblins extends Battalion {
  constructor(context) {
    super(
      [
        new GoblinOne(10, 10, 4, 2, context, {
          x: 120,
          y: 120
        }),
        new GoblinTwo(10, 10, 4, 2, context, {
          x: 360,
          y: 240
        }),
        new GoblinThree(10, 10, 4, 2, context, {
          x: 480,
          y: 240
        })
      ],
      'goblins'
    );
  }
}

export { GoblinOne, Goblins };
