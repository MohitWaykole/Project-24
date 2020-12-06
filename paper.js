class Paper{
    constructor(x, y){
        var option = {
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.radius = 10;
        this.body = Bodies.circle(x, y, 10, option);
        World.add(world, this.body);
    }

    display(){
        var p = this.body.position
        push();
        ellipseMode(CENTER);
        translate(p.x, p.y);
        rotate(this.body.angle);
        fill("pink");
        ellipse(0, 0, 20, 20);
        pop();
    }
}