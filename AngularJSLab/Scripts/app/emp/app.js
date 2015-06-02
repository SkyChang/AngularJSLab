'use strict';

var mainApp = angular.module('hrApp', [
    'ngRoute',
    'hrApp.employeesController',
    'hrApp.employeesFormController',
    'hrApp.empService']);

//Route
mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when('/emp', {
          templateUrl: '/wwwroot/Crud/lession5List.html',
          controller: 'employeesController'
      }).
      when('/emp/add', {
          templateUrl: '/wwwroot/Crud/lession5Form.html',
          controller: 'employeesFormController'
      }).
      when('/emp/edit/:eventId', {
          templateUrl: '/wwwroot/Crud/lession5Form.html',
          controller: 'employeesFormController'
      }).
      otherwise({
          redirectTo: '/emp'
      });
}]);