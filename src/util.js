(function () {
  if (typeof window.Asteroids === "undefined"){
    window.Asteroids = {};
  }

  // var Asteroids = window.Asteroids;
  Asteroids.Util = {};

  Asteroids.Util.inherits = function (ChildClass, ParentClass) {
    var Surrogate = function() {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };

  Asteroids.Util.randomVec = function (length) {
    return [
      Math.floor((Math.random() * length) + 1),
      Math.floor((Math.random() * length) + 1)
    ];
  };

})();
