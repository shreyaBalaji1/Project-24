class Dustbin{
    constructor(x,y) {

        var options = {
            isStatic: true
        }

        this.left = Bodies.rectangle(x-80, y-78, 15, 140, options);
        this.sideWidth = 15;
        this.sideHeight = 140;

        this.bottom=Bodies.rectangle(x, y, 175, 15, options);
        this.Bwidth = 175;
        this.Bheight = 15;

        this.right=Bodies.rectangle(x+80, y-78, 15, 140, options);

        World.add(world,this.left);
        World.add(world,this.right);
        World.add(world,this.bottom);
    }
    display() {
        rectMode(CENTER);
        fill("red");
        rect(this.left.position.x, this.left.position.y, this.sideWidth, this.sideHeight);

        rect(this.bottom.position.x, this.bottom.position.y, this.Bwidth, this.Bheight);

        rect(this.right.position.x, this.right.position.y, this.sideWidth, this.sideHeight);
    }
    
}