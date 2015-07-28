(function(){
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }


  var Asteroid = Asteroids.Asteroid = function(position, game) {
    window.Asteroids.MovingObject.call(this, {
      pos: position,
      vel: Asteroids.Util.randomVec(5),
      radius: Asteroid.RADIUS,
      color: Asteroid.COLOR,
      game: game
    });

  };

  Asteroid.RADIUS = 20;
  Asteroid.COLOR = "#A68064";

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);



})();
