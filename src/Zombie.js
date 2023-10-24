import Enemy from './Enemy'

export default class Zombie extends Enemy {
  constructor(game) {
    super(game)
    this.width = 32
    this.height = 64
    this.x = this.game.width
    this.y = Math.random() * (this.game.height * 0.9 - this.height)
    this.speedX = Math.random() * -1.5
    this.lives = 3
  }
}