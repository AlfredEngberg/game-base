import Enemy from './Enemy'

export default class Vampire extends Enemy {
  constructor(game) {
    super(game)
    this.width = 64
    this.height = 64
    this.x = this.game.width
    this.y = Math.random() * (this.game.height * 0.9 - this.height)
    this.speedX = Math.random() * -1.5
    this.lives = 2
    this.frameY = 3
    this.maxFrame = 4
    this.animationFps = 2
  }
}