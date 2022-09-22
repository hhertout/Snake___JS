class Block {
    constructor (x, y, size){
        this.x = x
        this.y = y
        this.oldX = x
        this.oldY = y
        this.size = size
    }
    draw(){
        this.outOfMap()
        ctx.fillStyle = "white"
        ctx.fillRect(this.x * this.size, this.y * this.size , this.size, this.size)
    }
    outOfMap(){
        const maxSize = gameSize / this.size
        if(this.x > (maxSize - 1)){
            this.x = 0
        }
        if(this.x < 0){
            this.x = maxSize - 1
        }
        if(this.y > (maxSize - 1)){
            this.y = 0
        }
        if(this.y < 0){
            this.y = maxSize - 1
        }
    }
    setPosition(x, y){
        this.oldX = this.x
        this.oldY = this.y
        this.x = x
        this.y = y 
    }
}
