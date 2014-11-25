angular.module('eventApp', [])
    .controller('EventListCtrl', function ($scope,$http) {

        $scope.Predicate = 'name';
        $scope.reverse = false;

        $scope.reverses = [
            { name: '最新在前', shade: true },
            { name: '最新在後', shade: false }
        ];
        $scope.reverseVale = $scope.reverses[0];
        //#region Lession 5
        //#endregion

        $http.get('/Scripts/app/event/data/event-data.json').success(function (data) {
            $scope.events = data;
        });

    });