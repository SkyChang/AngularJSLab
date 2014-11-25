angular.module('eventApp', [
  'ngRoute',
  'eventControllers'
]).config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/events', {
            templateUrl: '/Home/lession8List',
            controller: 'EventListCtrl'
        }).
        when('/events/:eventId', {
            templateUrl: '/Home/lession8Detail',
            controller: 'EventDetailCtrl'
        }).
        otherwise({
            redirectTo: '/events'
        });
  }]);