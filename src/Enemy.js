import spriteImage from './assets/sprites/Sprites.png'
import Game from './Game'

export default class Enemy {
    constructor(game) {
        this.game = game
        this.x = 0
        this.y = 0
        this.speedX = 0
        this.speedY = 10
        this.markedForDeletion = false
        this.lives = 1

        const image = new Image()
        image.src = spriteImage
        this.image = image
        this.flip = true
        // sprite animation
        this.frameX = 0
        this.frameY = 1
        this.maxFrame = 8
        this.animationFps = 4
        this.animationTimer = 0
        this.animationInterval = 1000 / this.animationFps
    }

    update(deltaTime) {
        this.x += this.speedX
        if (this.x < 0) {
            this.markedForDeletion = true
        }
        if (this.lives <= 0) {
            this.markedForDeletion = true
        }

        if (this.grounded) {
            this.speedY = 0
        } else {
            this.speedY += this.game.gravity
        }

        this.y += this.speedY

        // sprite animation update
        if (this.animationTimer > this.animationInterval) {
            this.frameX++
            this.animationTimer = 0
        } else {
            this.animationTimer += deltaTime
        }

        // reset frameX when it reaches maxFrame
        if (this.frameX >= this.maxFrame) {
            this.frameX = 0
        }
    }

    draw(context) {

        // draw sprite image
        if (this.flip) {
            context.save()
            context.scale(-1, 1)
        }

        context.drawImage(
            this.image,
            this.frameX * this.width,
            this.frameY * this.height,
            this.width,
            this.height,
            this.flip ? this.x * -1 - this.width : this.x,
            this.y,
            this.width,
            this.height
        )

        context.restore()

    }
}