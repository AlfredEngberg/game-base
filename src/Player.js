export default class Player {
  constructor(game) {
    this.game = game;
    this.width = 32;
    this.height = 64;
    this.x = 50;
    this.y = 100;
    this.speedX = 1;
    this.speedY = 0;
  }

  update(deltaTime) {
    this.x += this.speedX
  }

  draw(context) {
    context.fillStyle = '#f00';
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}