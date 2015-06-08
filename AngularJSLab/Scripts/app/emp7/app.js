'use strict';

var mainApp = angular.module('hrApp', [
    'ui.router',
    'hrApp.employeesController',
    'hrApp.employeesFormController',
    'hrApp.empService']);

//Route
mainApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/list');

    $stateProvider
      .state('list', {
          url: '/list',
          templateUrl: '/wwwroot/Crud/lession7List.html',
          controller: 'employeesController',
      })
      .state('add', {
          url: '/add',
          templateUrl: '/wwwroot/Crud/lession7Form.html',
          controller: 'employeesFormController'
      })
      .state('edit', {
          url: '/edit/:eventId',
          templateUrl: '/wwwroot/Crud/lession7Form.html',
          controller: 'employeesFormController'
      })
}]);