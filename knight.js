import Character from './character.js';

export default class Knight extends Character {
  constructor(name, health, attack, defense, imagePath, context, goal, { positionX, positionY }, team) {
    super(
      name,
      health,
      attack,
      defense,
      goal,
      {
        idle: {
          context,
          width: 490,
          height: 351,
          imagePath,
          positionX: positionX,
          positionY: positionY,
          numberOfFrames: 4,
          loop: true,
          ticksPerFrame: 3,
          scale: 0.2
        }
      },
      team
    );
  }
}
