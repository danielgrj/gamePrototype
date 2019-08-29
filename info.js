export default function showInformation(player, div, current, role = true) {
  const imgs = [...document.querySelectorAll(`#${div} .infoBattalion > div > div >img`)];
  const nameDivs = [...document.querySelectorAll(`#${div} .infoBattalion > div > h3`)];
  const hpDivs = [...document.querySelectorAll(`#${div} .infoBattalion > div > span`)];

  for (let i = 0; i < player.units.length; i++) {
    imgs[i].src = `./assets/ui/characters/${player.name}/${i}.png`;
    nameDivs[i].innerHTML = 'HP';
    hpDivs[i].innerHTML = `${player.units[i].health < 0 ? 0 : player.units[i].health} / ${player.units[i].maxHealth}`;
  }

  if (current && player.units.includes(current)) {
    const infoCurrent = document.querySelector(`#${div} .infoCurrent`);
    infoCurrent.children[0].innerHTML = role ? 'Attacking' : 'Defending';
    infoCurrent.children[1].children[0].src = `./assets/ui/characters/${player.name}/${player.units.indexOf(
      current
    )}.png`;
    infoCurrent.children[2].innerHTML = current.name;
    infoCurrent.children[3].innerHTML = `${current.health < 0 ? 0 : current.health} / ${current.maxHealth}`;
  }
}
