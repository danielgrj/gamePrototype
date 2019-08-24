export default class Sprite {
  constructor({
    context,
    width,
    height,
    imagePath,
    positionX,
    positionY,
    ticksPerFrame = 0,
    numberOfFrames,
    scale = 1
  }) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.positionX = positionX;
    this.positionY = positionY;
    this.image = new Image();
    this.image.src = imagePath;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = ticksPerFrame;
    this.numberOfFrames = numberOfFrames;
    this.scale = scale;
    this.goal = { x: positionX, y: positionY };
  }

  render() {
    this.context.clearRect(this.positionX - 1, this.positionY - 1, this.width + 1, this.height + 1);
    this.context.drawImage(
      this.image,
      this.width * this.frameIndex,
      0,
      this.width,
      this.height,
      this.positionX,
      this.positionY,
      Math.floor(this.width * this.scale),
      Math.floor(this.height * this.scale)
    );
  }

  update() {
    this.tickCount++;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      if (this.frameIndex < this.numberOfFrames) {
        this.frameIndex++;
      } else {
        this.frameIndex = 0;
      }
    }
  }

  move() {
    if (this.positionX < this.goal.x) {
      this.positionX++;
    } else if (this.positionY < this.goal.y) {
      this.positionY++;
    }
    return true;
  }

  setGoal(coordinates) {
    this.goal.x = coordinates.x * 120;
    this.goal.y = coordinates.y * 120;
  }
}
