import { highlightPath, highlightCombat, getTileCoordinates } from './map.js';

export default class Battalion {
  constructor(units, name, quotes) {
    this.units = units;
    this.movementsLeft = 2;
    this.name = name;
    this.quotes = quotes;
  }

  render() {
    this.units.forEach(unit => {
      unit.currentAnimation.update();
      unit.currentAnimation.move();
      unit.currentAnimation.render();

      unit.setWalkAnimation();
      // if (!unit.isDead()) {

      // }
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
        highlightPath(unit.getCharacterCoordinates(), unit.movementAbility, this.units);
      }
    });
    return attacker;
  }

  highlightTargets() {
    this.units.forEach(unit => {
      console.log(unit, 'high');
      console.log(unit.getCharacterCoordinates(), 'convo');
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

  isDefeated() {
    return this.units.reduce((accum, unit) => {
      return accum && unit.health <= 0;
    }, true);
  }

  deleteDeaths() {
    this.units.forEach(unit => {
      if (unit.health <= 0) {
        this.units.splice(this.units.indexOf(unit), 1);
      }
    });
  }
}
