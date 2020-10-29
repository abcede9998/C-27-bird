class Chain{
constructor(bodyA,bodyB){
    var options = {
        stiffness:0.04,
        length:10,
        bodyA: bird.body,
        bodyB: conslog.body
    }
    this.chain = Constraint.create(options);

    World.add(world,this.chain);
 }

 display(){
var pointA=bird.body.position;
var pointB=conslog.body.position;

 strokeWeight(4);
 line(pointA.x, pointA.y, pointB.x, pointB.y);
 }
}