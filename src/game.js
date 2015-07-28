(function (){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function (options){
    this.DIM_X = options.DIM_X;
    this.DIM_Y = options.DIM_Y;
    this.NUM_ASTEROIDS = options.NUM_ASTEROIDS;
    this.asteroids = this.addAsteroids();
    this.ship = new Asteroids.Ship(this)
    this.allObjects = this.asteroids.concat(this.ship)
  };

  Game.prototype.addAsteroids = function() {
    var asteroidsArr = [];
    for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
      asteroidsArr.push(new Asteroids.Asteroid(
        this.randomPosition(),
        this
      ));
    }
    return asteroidsArr;
  };

  Game.prototype.randomPosition = function() {
    return [
      Math.floor((Math.random() * this.DIM_X)),
      Math.floor((Math.random() * this.DIM_Y))
    ];
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);

    this.allObjects.forEach(function (object) {
      object.draw(ctx);
    });
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.moveObjects = function () {
    this.allObjects.forEach(function (object){
      object.move();
    });
  };

  Game.prototype.checkCollisions = function (){
    for (var i = 0; i < this.allObjects.length; i++) {
      for (var j = i + 1; j < this.allObjects.length; j++) {
        if (this.allObjects[i].isCollidedWith(this.allObjects[j])) {
          if (this.allObjects[i].constructor === Asteroids.Ship ||
              this.allObjects[j].constructor === Asteroids.Ship ){
            console.log("Hit!")
            this.ship.relocate();
          }
        }
      }
    }
  };


})();
