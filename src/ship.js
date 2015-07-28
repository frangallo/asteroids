(function(){
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (game) {
    Asteroids.MovingObject.call(this, {
      pos: [500,500],
      vel: [0,0],
      radius: Ship.RADIUS,
      color: Ship.COLOR,
      game: game
    })

  };

  Ship.RADIUS = 15;
  Ship.COLOR = "#CCCCCC";

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };
})();
