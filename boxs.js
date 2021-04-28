class Box{
    constructor(x, y, width, height){

var box_options = {
    restitution:0.7,
    friction:0.3,
    density:1.0
}




this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, box_options);
World.add(world, this.body); 


    }

    display(){
var pos = this.body.position;
var angle = this.body.angle;

push();






translate(pos.x, pos.y);





rotate(angle);


rectMode(CENTER);
fill("yellow");
rect(0, 0, this.width, this.height);
pop();

    }
 }