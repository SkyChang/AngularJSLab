angular.module('eventApp', [
  'ngRoute',
  'eventControllers',
  //'eventDirective'
]).config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/events', {
            templateUrl: '/Home/lession8List',
            //templateUrl: '/Home/lession10List',
            controller: 'EventListCtrl'
        }).
        when('/events/:eventId', {
            //templateUrl: '/Home/lession8Detail',
            templateUrl: '/Home/lession9Detail',
            controller: 'EventDetailCtrl'
        }).
        otherwise({
            redirectTo: '/events'
        });
  }]);