class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  this.smokeImg=loadImage("sprites/smoke.png");
  this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x>10 && this.body.position.x>200){
var position=[this.body.position.x,this.body.position.y]
this.trajectory.push(position)
    }

for(var abc=0;abc<this.trajectory.length;abc++){
  image(this.smokeImg,this.trajectory[abc][0],this.trajectory[abc][1])
    }
  }
}

