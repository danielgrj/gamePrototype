class Character {
  constructor(name, health, attack, defense, imagePath){
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.sprite = new Sprite(imagePath);
  }
}

class Sprite {
  constructor({ context, width, height, imagePath, positionX, positionY }){
    this.context = context;
    this.width = width;
    this.height = height;
    this.positionX = positionX;
    this.positionY = positionY;
    this.image = new Image();
    this.image.src = imagePath;
  }

  render = () => {
    this.context.drawImage(
      this.image,
      0,
      0,
      486,
      351,
      this.positionX,
      this.positionY,
      this.width,
      this.height,
    )
  }
}
