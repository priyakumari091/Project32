class constraintString{
    constructor(obj1,pB){
var options = {
    bodyA : obj1,
    pointB : pB,
    stiffness: 0.4,
    length : 100
}
this.pointB = pB;
this.constraint = Constraint.create(options)
World.add(world,this.constraint)
    }
    display(){
        if(this.constraint.bodyA){     
        var poA=this.constraint.bodyA.position
        var pB=this.pointB
        strokeWeight(3)
        stroke(217, 95, 16)
        line(poA.x,poA.y,pB.x,pB.y)
                                }
             }

    fly(){
        this.constraint.bodyA = null;
    }

    attach(body){
        this.constraint.bodyA = body;
    }

    
}