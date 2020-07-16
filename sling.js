class Sling{
    constructor(a,b) {
 var options={
 bodyA: a,
 bodyB: b,
 length: 10,
 stiffness: 0.6
 }     
   this.b=Matter.Constraint.create(options);

   World.add(world,this.b);
}
 display(){
  strokeWeight(5);
  line(this.b.bodyA.position.x,this.b.bodyA.position.y,this.b.bodyB.position.x,this.b.bodyB.position.y);
 }
}
