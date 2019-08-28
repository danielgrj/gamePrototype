import { highlightPath, drawMap, highlightCombat, getTileCoordinates } from './map.js';

export default class Battalion {
  constructor(units) {
    this.units = units;
  }

  render() {
    this.units.forEach(unit => {
      unit.currentAnimation.update();
      unit.currentAnimation.move();
      unit.currentAnimation.render();

      unit.setWalkAnimation();
    });
  }

  turn(tile) {
    let attacker;
    this.units.forEach(unit => {
      if (
        unit.getCharacterCoordinates().x === getTileCoordinates(tile).x &&
        unit.getCharacterCoordinates().y === getTileCoordinates(tile).y
      ) {
        attacker = unit;
        tile.className = 'select';
        highlightPath(unit.getCharacterCoordinates(), unit.movementAbility);
      }
    });
    return attacker;
  }

  highlightTargets() {
    this.units.forEach(unit => {
      highlightCombat(unit.getCharacterCoordinates());
    });
  }

  getUnitByTile(tile) {
    let defender;
    this.units.forEach(unit => {
      if (
        unit.getCharacterCoordinates().x === getTileCoordinates(tile).x &&
        unit.getCharacterCoordinates().y === getTileCoordinates(tile).y
      )
        defender = unit;
    });
    return defender;
  }
}
