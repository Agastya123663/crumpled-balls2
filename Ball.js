class Ball{
 constructor(x,y,radius) {
var options={
 isStatic:false,
 restitution:0.3,
 friction:0.5,
 density:1.2   
}
this.body = Bodies.circle(x,y,radius,options);
this.image = loadImage("sprites/paper.png");
World.add(world,this.body);
this.radius = 70;
 }  
 display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius,this.radius);
    pop();
 }
}