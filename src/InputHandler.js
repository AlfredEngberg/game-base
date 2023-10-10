export default class InputHandler {
    constructor(game) {
        this.game = game
 
        window.addEventListener('keydown', (event) => {
            
            if (            
                (event.key === 'ArrowUp' ||
                  event.key === 'ArrowDown' ||
                  event.key === 'ArrowLeft' ||
                  event.key === 'ArrowRight') &&
                this.game.keys.indexOf(event.key) === -1
              ) {
                this.game.keys.push(event.key)
              }
            
        }
    } 
 
}