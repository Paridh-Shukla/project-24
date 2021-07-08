class Iron {
    constructor(x, y) {
      var options = {
        'density':8,
        'friction': 2,
        'restitution':1,
      };
      this.body = Bodies.rectangle(x, y, 40,80, options);
      this.width = 40;
      this.height = 80;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;

      push();
      translate(pos.x, pos.y);
      strokeWeight(5);
      stroke("brown");
      fill('red');  
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    };
  };