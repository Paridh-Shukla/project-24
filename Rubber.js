class Rubber {
    constructor(x, y) {
      var options = {
          'restitution':1,
          'friction':6,
          'density':12
      }
      this.body = Bodies.circle(x, y, 50/2,options);
      this.r = 50/2
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
	  strokeWeight(4);
      stroke("blue")
	  fill("darkBlue");
    ellipseMode(RADIUS);
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  