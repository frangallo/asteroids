(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (game, ctx){
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function () {
    var that = this
    setInterval(function (){
      that.game.step();
      that.game.draw(that.ctx);
    }, 20);
  };

  GameView.prototype.bindKeyHandlers = function () {
    key('w', function() { alert("oeihf;dlkf");});//this.game.ship.power([0,1])  });
    key('s', function(){  this.game.ship.power([0,-1]) });
    key('a', function(){ this.game.ship.power([-1,0])  });
    key('d', function(){ this.game.ship.power([1,0])  });
  };
})();
