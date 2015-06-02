'use strict';

/**
 * @ngdoc function
 * @name bugSquashApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bugSquashApp
 */
angular.module('bugSquashApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
