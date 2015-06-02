'use strict';

/**
 * @ngdoc function
 * @name bugSquashApp.controller:CarsCtrl
 * @description
 * # CarsCtrl
 * Controller of the bugSquashApp
 */
angular.module('bugSquashApp')
  .controller('CarsCtrl', function ($scope) {
    $scope.owner = "";
    $scope.plate = "";
  });
