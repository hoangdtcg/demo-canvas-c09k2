class Player {
    x;
    y;
    color;
    size;
    speed;
    direction;
    constructor(x,y,color,size,speed) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.speed = speed;
        this.direction = "";
    }

    render(canvas){
        let pen = canvas.getContext('2d');
        pen.beginPath();
        pen.rect(this.x,this.y,this.size,this.size);
        pen.fillStyle = this.color;
        pen.fill();
        pen.closePath();
    }

    move(canvas){
        switch (this.direction) {
            case "left":
                if(this.x > 0){
                    this.x -= this.speed;
                }
                break;
            case "right":
                if(this.x < canvas.width)
                    this.x += this.speed;
                else
                    this.x = 0
                break;
            case "up":
                if(this.y > 0)
                    this.y -= this.speed
                break;
            case "down":
                if(this.y+this.size < canvas.height)
                    this.y += this.speed;
                break;
        }
    }
}


