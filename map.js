function drawMap(context) {
  const mapTileset = new Image();
  mapTileset.src = './assets/maps/desert.png';

  mapTileset.onload = () => {
    context.clearRect(0, 0, 720, 600);
    context.drawImage(mapTileset, 0, 0, 256, 256, 0, 0, 120, 120);
    for (let i = 1; i <= 4; i++) {
      context.drawImage(mapTileset, 256, 0, 256, 256, 120 * i, 0, 120, 120);
    }
    context.drawImage(mapTileset, 512, 0, 256, 256, 600, 0, 120, 120);

    for (let i = 1; i <= 3; i++) {
      context.drawImage(mapTileset, 1536, 0, 256, 256, 0, 120 * i, 120, 120);
      for (let j = 1; j <= 4; j++) {
        context.drawImage(mapTileset, 1792, 0, 256, 256, 120 * j, 120 * i, 120, 120);
      }
      context.drawImage(mapTileset, 2048, 0, 256, 256, 600, 120 * i, 120, 120);
    }

    context.drawImage(mapTileset, 768, 0, 256, 256, 0, 480, 120, 120);
    for (let i = 1; i <= 4; i++) {
      context.drawImage(mapTileset, 1024, 0, 256, 256, 120 * i, 480, 120, 120);
    }
    context.drawImage(mapTileset, 1280, 0, 256, 256, 600, 480, 120, 120);
  };
}

function getTileCoordinates(tile) {
  const coordinates = tile.getAttribute('tile').split(',');
  return {
    x: parseInt(coordinates[1]),
    y: parseInt(coordinates[0])
  };
}

function highlightPath({ x, y }, maxMovement, friendlyUnits) {
  const highlightTiles = [];
  let maxY = maxMovement.x;
  const fuCoordinates = friendlyUnits.map(unit => {
    return `${unit.getCharacterCoordinates().y},${unit.getCharacterCoordinates().x}`;
  });

  for (let i = 0; i <= maxMovement.y; i++) {
    for (let j = 0; j <= maxY; j++) {
      highlightTiles.push(`${y + i},${x + j}`);
      highlightTiles.push(`${y - i},${x - j}`);
      highlightTiles.push(`${y + i},${x - j}`);
      highlightTiles.push(`${y - i},${x + j}`);
    }
    maxY--;
  }
  console.log(fuCoordinates);

  highlightTiles
    .filter(tile => !fuCoordinates.includes(tile))
    .forEach(coordinate => {
      const tileToHighlight = document.querySelector(`[tile="${coordinate}"]`);

      if (tileToHighlight !== null && !tileToHighlight.className.includes('select')) {
        tileToHighlight.className = 'highlight';
      }
    });
}

function highlightCombat({ x, y }) {
  if (
    document.querySelector(`[tile="${y - 1},${x}"]`).className.includes('highlight') ||
    document.querySelector(`[tile="${y + 1},${x}"]`).className.includes('highlight') ||
    document.querySelector(`[tile="${y},${x + 1}"]`).className.includes('highlight') ||
    document.querySelector(`[tile="${y},${x - 1}"]`).className.includes('highlight') ||
    document.querySelector(`[tile="${y},${x}"]`).className.includes('highlight')
  ) {
    document.querySelector(`[tile="${y},${x}"]`).className = 'combat-ready';
  }
}

export { drawMap, getTileCoordinates, highlightPath, highlightCombat };
