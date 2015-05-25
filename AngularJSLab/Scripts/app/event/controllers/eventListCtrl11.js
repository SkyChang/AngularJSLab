angular.module('eventControllers', ['eventServices'])
    .controller('EventListCtrl', function ($scope, $http, eventServices) {

        $scope.Predicate = 'name';
        $scope.reverse = false;

        $scope.reverses = [
            { name: '最新在前', shade: true },
            { name: '最新在後', shade: false }
        ];
        $scope.reverseVale = $scope.reverses[0];
        //#region Lession 5
        //#endregion

        $scope.events = eventServices.query({ fileName: 'event-data' });

        //$http.get('/Scripts/app/event/data/event-data.json').success(function (data) {
        //    $scope.events = data;
        //});

    }).controller('EventDetailCtrl', ['$scope', '$routeParams','$http','eventServices',
        function ($scope, $routeParams, $http, eventServices) {
            $scope.event = eventServices.get({ fileName: 'angular-event-data-' + $routeParams.eventId });
          
          }]);