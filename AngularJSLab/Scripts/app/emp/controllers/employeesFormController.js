'use strict';

//Contrller
angular.module('hrApp.employeesFormController', ['ngRoute'])
    .controller('employeesFormController', [ '$scope', '$location', '$routeParams', 'empService',
        function ($scope, $location, $routeParams, empService) {
        
    //alert($routeParams.eventId);

    if ($routeParams.eventId != undefined) {
        empService.get($routeParams.eventId)
            .success(function (data) {
                $scope.emp = data;
            }).error(function (err) {
                alert(err);
            });
    }

    $scope.add = function () {
        empService.add($scope.emp)
            .success(function (data) {
                alert('新增成功');
                $location.path('/emp');
            })
            .error(function (err) {
                alert(err);
            });

    };

    $scope.update = function (id) {
        empService.update(id, $scope.emp)
           .success(function (data) {
               alert('更新成功');
               $location.path('/emp');
           })
           .error(function (err) {
               alert(err);
           });
    };
}]);