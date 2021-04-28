class Ground{
    constructor(x, y, width, height){
        var ground_options ={
            isStatic: true
        }
    
this.x = x;
this.y = y;
this.width = width;
this.height = height;


        this.ground = Bodies.rectangle(this.x, this.y, this.width, this.height, ground_options);
        World.add(world,this.ground);
    
    }


    display(){

var pos = this.ground.position;
rectMode(CENTER);
fill("orange");
rect(pos.x, pos.y, this.width, this.height); 



    }
}