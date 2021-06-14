class SpaceShip{
    constructor(x,y,width,height){
        this.body =  Bodies.rectangle(x,y,width,height);   
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image=loadImage("spacecraft1.png");
       this.image.scale=0.5;
    }
    display(){
        background("black");
        fill(255,255,255);
        textSize(15);
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
    }
}