class Player{
constructor(x,y,w,h){
this.body = Bodies.rectangle(x,y,w,h);
World.add(world,this.body)
this.w = w;
this.h = h;
this.image = loadImage("pictures/biker.png");
}
display(){	
imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);	
}
}