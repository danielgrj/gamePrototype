export default function getTileCoordinates(tile) {
  const coordinates = tile.getAttribute('tile').split(',');
  return {
    x: parseInt(coordinates[1]),
    y: parseInt(coordinates[0])
  };
}
