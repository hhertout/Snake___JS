class Food {
    constructor(){
        this.size = squareSize
        this.setRandomPos() 
    }
    setRandomPos(){
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
          }
        this.x = Math.round(getRandomArbitrary(0, (gameSize / this.size) - 1 ))
        this.y = Math.round(getRandomArbitrary(0, (gameSize / this.size) - 1 ))
        this.draw()
    }
    draw(){
        ctx.fillStyle = "red"
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size)
    }
}