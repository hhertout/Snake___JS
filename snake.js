class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.blockSize = squareSize;
    this.blocks = [];
    this.addBlock(this.x, this.y);
    this.alive = true;
  }

  addBlock(x, y) {
    const block = new Block(x, y, this.blockSize);
    this.blocks.push(block);
  }

  move() {
    const head = this.blocks[0];
    head.oldX = head.x;
    head.oldY = head.y;
    switch (currentDirection) {
      case "left":
        head.x -= 1;
        break;
      case "right":
        head.x += 1;
        break;
      case "down":
        head.y += 1;
        break;
      case "up":
        head.y -= 1;
        break;
    }
  }

  calculateNewBlockPos() {
    let { x, y } = this.blocks[this.blocks.length - 1];
    switch (currentDirection) {
      case "left":
        x += 1;
        break;
      case "right":
        x -= 1;
        break;
      case "down":
        y -= 1;
        break;
      case "up":
        y += 1;
        break;
    }
    return { x, y };
  }

  eat() {
    const head = this.blocks[0];
    if (head.x === food.x && head.y === food.y) {
      food.setRandomPos();
      const { x, y } = this.calculateNewBlockPos();
      this.addBlock(x, y);
    }
  }

  isTouchHimself() {
    const head = this.blocks[0];

    for (const block of this.blocks) {
      if (head.x === block.oldX && head.y === block.oldY) {
        console.log(block);
        this.alive = false;
      }
    }
  }

  update() {
    this.move();
    this.eat();
    for (const [index, block] of this.blocks.entries()) {
      if (index > 0) {
        const { oldX, oldY } = this.blocks[index - 1];
        block.setPosition(oldX, oldY);
        this.isTouchHimself();
      }
      block.draw();
      document.getElementById("score").innerHTML = this.blocks.length;
    }
    document.getElementById("");
  }
}
