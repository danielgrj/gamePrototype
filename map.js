export function highlightPath(position, maxMovement) {
  const highlightTiles = [];
  console.log(position);
  let positionX = position.y;
  let positionY = position.x;
  let maxY = maxMovement.x;

  for (let i = 0; i <= maxMovement.y; i++) {
    for (let j = 0; j <= maxY; j++) {
      highlightTiles.push(`${positionX + i},${positionY + j}`);
      highlightTiles.push(`${positionX - i},${positionY - j}`);
      highlightTiles.push(`${positionX + i},${positionY - j}`);
      highlightTiles.push(`${positionX - i},${positionY + j}`);
    }
    maxY--;
  }

  return highlightTiles;
}

export function drawMap(context) {
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
