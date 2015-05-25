angular.module('eventApp', [
  'ngRoute',
  'eventControllers',
  //'eventDirective'
]).config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/events', {
            templateUrl: '/wwwroot/lession10List',
            //templateUrl: '/Home/lession10List',
            controller: 'eventListCtrl'
        }).
        when('/events/:eventId', {
            //templateUrl: '/Home/lession8Detail',
            templateUrl: '/wwwroot/lession11Detail',
            controller: 'eventDetailCtrl'
        }).
        otherwise({
            redirectTo: '/events'
        });
  }]);