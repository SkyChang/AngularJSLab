'use strict';

//Contrller
angular.module('hrApp.employeesController', [])
    .controller('employeesController',['$scope','$location','empService',
        function ($scope, $location, empService) {

    empService.getAll().success(function (data) {
        $scope.emps = data;
    });


    $scope.edit = function (emp) {
        //var index = $scope.emps.indexOf(emp);
        //if (index !== -1) {
        //    $scope.emp = $scope.emps[index];
        //}

        $location.path('/emp/edit/' + emp.id);

    };

    $scope.del = function (emp) {
        if (confirm('您確定要刪除嗎?')) {

            empService.remove(emp.id)
                .success(function (data) {
                    var index = $scope.emps.indexOf(emp);
                    if (index !== -1) {
                        $scope.emps.splice(index, 1);
                    }
                    alert('刪除成功')
                })
                .error(function (err) {
                    alert('刪除成功');
                });
        }
    };
}]);