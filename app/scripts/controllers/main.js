'use strict';

/**
 * @ngdoc function
 * @name bugSquashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bugSquashApp
 */
angular.module('bugSquashApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
