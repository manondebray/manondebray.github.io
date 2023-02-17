let monBlob;
let monBlob2;

function setup() {
  createCanvas(400, 400);
  monBlob = new Blobbe(width/2,height/2,100,"#0a3431");
  monBlob2 = new Blobbe(width/4,height/8,40,"#ace210");
}

function draw() {
  background("#fffff");
  monBlob.affiche();
  monBlob2.affiche();
  monBlob.oscille();
}


class Blobbe {
  constructor(x,y,r,couleur){
    this.x = x;
    this.y = y;
    this.r = r;
    this.r0 = this.r;
    this.couleur = couleur;
    this.points = 2000;
    this.seedX = random(200,4568520);
    this.seedY = random(5,48525554);
  }
  
  affiche(){
    noStroke();
    push();
    fill(this.couleur);
    translate(this.x,this.y);
    beginShape();
    for(let i = 0;i<this.points;i++){
      let angle = i*2*PI/this.points;
      let rP = 0.2;
      let xP =rP*cos(angle);
      let yP =rP*sin(angle);
      let rayon= map(noise(xP+this.seedX,yP+this.seedY,frameCount/50),0,1,this.r*0.5,this.r*1.5);
      let x = rayon*cos(angle);
      let y = rayon*sin(angle);
      vertex(x,y);
    }
    endShape(CLOSE);
    pop();
  }
  
  oscille(){
    this.r = map(sin(frameCount/10),-1,1,this.r0*0.7,this.r0*1.3);
    
  }
}