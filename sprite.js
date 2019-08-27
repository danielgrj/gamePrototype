export default class Sprite {
  constructor({ context, width, height, imagePath, position, ticksPerFrame = 0, numberOfFrames, scale = 1 }) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.position = position;
    this.image = new Image();
    this.image.src = imagePath;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = ticksPerFrame;
    this.numberOfFrames = numberOfFrames;
    this.scale = scale;
    this.goal = { x: position.x, y: position.y };
    this.isFreeze = false;
  }

  render() {
    this.context.drawImage(
      this.image,
      this.width * this.frameIndex,
      0,
      this.width,
      this.height,
      this.position.x,
      this.position.y,
      Math.floor(this.width * this.scale),
      Math.floor(this.height * this.scale)
    );
  }

  renderReverse() {
    this.context.save();
    this.context.scale(-1, 1);
    this.context.drawImage(
      this.image,
      this.width * this.frameIndex,
      0,
      this.width,
      this.height,
      this.position.x,
      this.position.y,
      Math.floor(this.width * this.scale),
      Math.floor(this.height * this.scale)
    );
    this.context.restore();
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
    if (this.position.x !== this.goal.x) {
      if (this.position.x < this.goal.x) return (this.position.x += 2);
      return (this.position.x -= 2);
    } else if (this.position.y !== this.goal.y) {
      if (this.position.y < this.goal.y) return (this.position.y += 2);
      return (this.position.y -= 2);
    }
  }

  setGoal(coordinates) {
    this.goal.x = coordinates.x * 120;
    this.goal.y = coordinates.y * 120;
  }

  changeScale(scale) {
    this.scale = scale;
  }
}
