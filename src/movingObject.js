(function (){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function(options){
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
  }

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function () {
    this.pos[0] = (this.pos[0] + this.vel[0]) % this.game.DIM_X;
    this.pos[1] = (this.pos[1] + this.vel[1]) % this.game.DIM_Y;
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var disx = this.pos[0] - otherObject.pos[0];
    var disy = this.pos[1] - otherObject.pos[1];

    return (this.radius > Math.sqrt((disx * disx) + (disy * disy)) ||
            otherObject.radius > Math.sqrt((disx * disx) + (disy * disy))) ;
   };

})();
