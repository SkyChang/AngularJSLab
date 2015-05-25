angular.module('eventApp', [])
    .controller('eventListCtrl', function ($scope) {

        //#region Lession 7
        $scope.Predicate = 'name';
        $scope.reverse = false;
        //#endregion

        //#region Lession 7-1
        $scope.reverses = [
            { name: '最新在前', shade: true },
            { name: '最新在後', shade: false }
        ];
        $scope.reverseVale = $scope.reverses[0];
        //#endregion

        $scope.events = [
          {
              'date': '2014/11/29',
              'name': 'AngularJS菁英班 - 上'
          },
          {
              'date': '2014/11/30',
              'name': 'AngularJS菁英班 - 下'
          }
     
        ];
});