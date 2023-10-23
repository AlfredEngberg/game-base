export default class Projectile {
    constructor(game, x, y) {
        this.game = game
        this.width = 4
        this.height = 10
        this.x = x
        this.y = y

        this.range = 500
        this.speed = 5
        this.damage = 1
        this.markedForDeletion = false
    }

    update() {
        this.x += this.speed
        if (this.x > this.game.width) {
            this.markedForDeletion = true
        }
    }

    draw(context) {
        context.fillStyle = '#ff0'
        context.fillRect(this.x, this.y, this.width, this.height)
    }


}