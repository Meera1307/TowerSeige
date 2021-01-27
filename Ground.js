class Ground {
    //to give values
    constructor(x,y,width,height) {
      // the specified values
      var options = {
          isStatic: true
      }

      //to specify its shape
      this.body = Bodies.rectangle(x,y,width,height,options);

      //to give it a height and weight
      this.width = width;
      this.height = height;

      //to add it to world
      World.add(world, this.body);
    }
    display(){

      //to display it 
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
