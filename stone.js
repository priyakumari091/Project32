class Stone {
    constructor(x,y){
        var options = {
            "isStatic": false,
            "restitution": 0.5,
            "density":0.8
        }

        this.x =x;
        this.y = y;
        this.r = 10;
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r*4,this.r*4);
        pop();
    }

    // move(){
    //     Matter.Body.setPosition(this.body,{x:mouseX,mouseY});
    // }
}