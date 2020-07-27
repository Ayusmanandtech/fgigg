class Sling {
    constructor(body1,point){
        var options={
            bodyA:body1,
            pointB:point,
            length:10
    
        }
         
this.body = Constraint.create(options);
World.add(world,this.body)

    }
    display(){
      line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.pointB.x,this.body.pointB.y)  
    }
}