angular.module('bugSquashApp').factory('Car', function() {

  cars = [
    { plate: "ER-AR-4467", brand: "BMW", year: "1984", color: "yellow", price: "1245" },
    { plate: "BE-YH-1447", brand: "Fiat", year: "2005", color: "gold", price: "445345" },
    { plate: "DR-RD-1002", brand: "Citroen", year: "2012", color: "green", price: "34" }
  ];

	return {
    all : function() { return cars; }
	};

});
