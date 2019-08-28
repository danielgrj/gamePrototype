function battle(attacker, defender) {
  const criticalHit = Math.floor(Math.random() * 101);

  if (criticalHit < 85) {
    defender.health -= Math.floor(attacker.attack - defender.defense / 2) + Math.floor(Math.random() * 4);
  } else {
    defender.health -= Math.floor(
      (Math.floor(attacker.attack - defender.defense / 2) + Math.floor(Math.random() * 4)) * 1.5
    );
  }

  if (defender.health <= 0) {
    return true;
  }
  return false;
}
