class Stone {
    constructor(x, y) {
      var options = {
        'density':12,
        'friction': 2,
        'restitution':1
      };
      this.body = Bodies.rectangle(x, y, 60,100, options);
      this.width = 60;
      this.height = 100;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;

      push();
      translate(pos.x, pos.y);
      strokeWeight(3);
      stroke("light grey");
      fill('black');  
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  