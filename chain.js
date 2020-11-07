class Chain{
    constructor(bodyA, bodyB){
        var options = {
            'bodyA': bird.body,
            'bodyB': cLog.body,
            'stiffness': 0.2,
            'length': 30
            }
    
        this.chain = Constraint.create(options);
        World.add(world, this.chain);

    }

    display(){
        var posA= this.chain.bodyA.position;
        var posB= this.chain.bodyB.position;
        push();
        strokeWeight(15);
        line(posA.x,posA.y, posB.x, posB.y);
        pop();

}
}