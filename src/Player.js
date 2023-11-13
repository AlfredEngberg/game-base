import Projectile from './Projectile.js'
import spriteImage from './assets/sprites/Sprites x2.png'

export default class Player {
  constructor(game) {
    this.game = game
    this.width = 32
    this.height = 64
    this.x = 50
    this.y = 100

    this.projectiles = []
    this.shootTimer = 1

    this.hp = 10

    this.jumpSpeed = 50
    this.speedX = 0
    this.speedY = 0
    this.maxSpeed = 10

    // sprite animation
    this.frameX = 0
    this.frameY = 1
    this.maxFrame = 6
    this.fps = 20
    this.timer = 0
    this.interval = 1000 / this.fps

    // flip sprite direction
    this.flip = false
  }

  update(deltaTime) {
    if (this.game.keys.includes('ArrowLeft')) {
      this.speedX = -this.maxSpeed
    } else if (this.game.keys.includes('ArrowRight')) {
      this.speedX = this.maxSpeed
    } else {
      this.speedX = 0
    }

    if (this.game.keys.includes('ArrowUp') && this.grounded) {
      this.speedY = -this.jumpSpeed
      this.grounded = false
    } else if (this.game.keys.includes('ArrowDown')) {
      this.speedY = this.maxSpeed
    } else {
      this.speedY = 0
    }

    if (this.grounded) {
      this.speedY = 0
    } else {
      this.speedY += this.game.gravity
    }

    this.y += this.speedY
    this.x += this.speedX

    // projectiles
    this.projectiles.forEach((projectile) => {
      projectile.update()
    })

    if (this.shootTimer > 0) {
      this.shootTimer -= 1
    }

    if (this.shootTimer <= 0 && this.game.keys.includes('z')) {
      this.game.player.shoot()
      this.shootTimer = 5
    }

    this.projectiles = this.projectiles.filter(
      (projectile) => !projectile.markedForDeletion
    )
  }

  draw(context) {
    context.fillStyle = '#f00'
    context.fillRect(this.x, this.y, this.width, this.height)

    this.projectiles.forEach((projectile) => {
      projectile.draw(context)
    })

    // draw sprite image
    if (this.flip) {
      context.save()
      context.scale(-1, 1)
    }

    context.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height - 14,
      this.width,
      this.height,
      this.flip ? this.x * -1 - this.width : this.x,
      this.y,
      this.width,
      this.height
    )

    context.restore()
  }

  shoot() {
    console.log('pang')
    this.projectiles.push(
      new Projectile(this.game, this.x + this.width, this.y + this.height / 2)
    )
  }
}