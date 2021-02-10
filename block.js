class Block {
    constructor(x,y,r,g,b) {
      var options = {
          isStatic: false,
          restitution: 0.4,
          friction: 0.7
      }
      this.body = Bodies.rectangle(x,y,20,35,options);
      this.width = 20;
      this.height = 35;
      this.r1 = r;
      this.g1 = g;
      this.b1 = b;
      this.visibility=255;
      World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        if(this.body.speed < 3){

        push();    
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        stroke(249, 188, 6);
        fill(this.r1,this.g1,this.b1);
        rectMode(CENTER);
        rect(0 , 0 , 20, 35);
        pop();

        }
        else {
          
          World.remove(world,this.body);
          push();
          this.visibility = this.visibility - 5;
          tint(255,this.visibility);
          pop();


        }
    
    }

    score(){
      if((this.visibility < 0) && (this.visibility > -150)){
        score++;
      }
    }
  }