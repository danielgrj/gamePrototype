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
  constructor(context, player = true) {
    const positions = player
      ? [{ x: 0, y: 480 }, { x: 120, y: 360 }, { x: 240, y: 480 }]
      : [{ x: 360, y: 0 }, { x: 480, y: 120 }, { x: 600, y: 0 }];

    super(
      [
        new GoblinOne('Klaaskaang', 10, 4, 2, context, positions[0]),
        new GoblinTwo('Vokx', 10, 4, 2, context, positions[1]),
        new GoblinThree('Gliakz', 10, 4, 2, context, positions[2])
      ],
      'goblins'
    );
  }
}

export { GoblinOne, Goblins };
