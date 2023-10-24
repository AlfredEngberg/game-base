export default class Enemy {
    constructor(game) {
        this.game = game
        this.x = 0
        this.y = 0
        this.speedX = 0
        this.markedForDeletion = false
        this.lives = 1
    }

    update() {
        this.x += this.speedX
        if (this.x < 0) this.markedForDeletion = true
        if (this.lives <= 0) this.markedForDeletion = true
    }

    draw(context) {
        context.fillStyle = '#0f0'
        context.fillRect(this.x, this.y, this.width, this.height)
        if (this.game.debug) {

        }
    }
}