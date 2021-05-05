class Stone {
    constructor(x, y, r) {
        var option = {
            isStatic: false,
            restitution:0,
            friction:1,
            density:1.2
        } 
        this.x = x;
        this.y = y;
        this.r = r;
        this.image=loadImage("sprites/stone.png");
        this.body=Bodies.circle(this.x, this.y, this.r, option);
        World.add(world, this.body);
    }
    display() {
    var stonepos=this.body.position;		
    push()
    translate(stonepos.x, stonepos.y);
    fill(255,0,255)
    imageMode(CENTER);
    ellipseMode(RADIUS)
    image(this.image, 0,0,this.r*2, this.r*2)
    pop()      
    }
};