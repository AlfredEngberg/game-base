export default class Projectile {
    constructor(game, x, y) {
        this.game = game
        this.width = 100
        this.height = 60
        this.x = x - 30
        this.y = y - 25

        this.range = 10
        this.travel = 0
        this.speed = 0
        this.damage = 1
        this.markedForDeletion = false
    }

    update() {
        this.x += this.speed
        if (this.x > this.game.width) {
            this.markedForDeletion = true
        }
        if (this.travel >= this.range) {
            this.markedForDeletion = true
        } else {
            this.travel = this.travel + 1
        }

    }

    draw(context) {
        context.fillStyle = '#4D79BC'
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}