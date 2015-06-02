angular.module('bugSquashApp').directive('car', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/car.html',
      link: function(scope, element, attrs) {
        scope.plate = attrs.plate;
        scope.brand = attrs.brand;
        scope.price = attrs.price;
        scope.year = attrs.year;
        scope.color = attrs.color;

        scope.sellCar = function() {
          scope.plate = scope.plate;
          scope.owner = scope.owner;
        }
      }
    };

  });
