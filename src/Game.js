import Player from './Player.js'

export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.keys = []
    this.enemies = []
    this.gameOver = false
    this.gravity = 1
    this.debug = false
    this.player = new Player(this)
    this.speedX = 1
    this.speedY = 0
  }

  update(deltaTime) {
    if (!this.gameOver) {
      this.gameTime += deltaTime
    }
    this.x += this.speedX
  }

  draw(context) {
    this.player.draw(context)
  }
}
