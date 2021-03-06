﻿angular.module('eventApp', [])
    .controller('eventListCtrl', function ($scope,$http) {

        $scope.Predicate = 'name';
        $scope.reverse = false;

        $scope.reverses = [
            { name: '最新在前', shade: true },
            { name: '最新在後', shade: false }
        ];
        $scope.reverseVale = $scope.reverses[0];

        $http.get('/Scripts/app/event/data/event-data.json').success(function (data) {
            $scope.events = data;
        });

    });