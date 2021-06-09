class Particle {
    constructor(x,y) {

    var options = {
    'isStatic' : false,
    'friction' : 0.1,
    'density' : 3,
    }
    
    this.body = Bodies.circle(x, y,10,options);
    this.color = color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body);
    
    }

    display(){
    var pos = this.body.position;
    fill(this.color);
    circle(pos.x,pos.y,10);
    }
}