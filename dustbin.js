class Dustbin{
    constructor(x,y,width,height){
        var option = {
            isStatic : true,
        }

        this.width = width;
        this.height = height;

        this.b = Bodies.rectangle(x, y, width, height, option);
        World.add(world, this.b);
    }

    display(){
        var p = this.b.position;
        push();
        rectMode(CENTER);
        fill("white");
        rect(p.x, p.y, this.width, this.height);
        pop();
    }
}