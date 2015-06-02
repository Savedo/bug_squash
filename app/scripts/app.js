'use strict';

/**
 * @ngdoc overview
 * @name bugSquashApp
 * @description
 * # bugSquashApp
 *
 * Main module of the application.
 */
angular
  .module('bugSquashApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/cars', {
        templateUrl: 'views/cars.html',
        controller: 'CarsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
