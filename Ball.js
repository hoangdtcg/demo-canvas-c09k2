class Ball {
    x;
    y;
    color;
    radius;
    speed;
    constructor(x,y,color,radius,speed) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
        this.speed = speed;
        this.xSpeed = speed;
        this.ySpeed = speed;
    }

    render(canvas){
        let pen = canvas.getContext('2d');
        pen.beginPath();
        pen.arc(this.x,this.y,this.radius,0,2*Math.PI);
        pen.fillStyle = this.color;
        pen.fill();
        pen.closePath();
    }

    move(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
}
