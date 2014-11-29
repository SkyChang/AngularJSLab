'use strict';

angular.module('eventDirective', [
]).directive('eventDiv',
    function ($compile) {
        return {
            restrict: 'E',
            templateUrl: '/Scripts/app/event/Common/event-div-template.html',
            replace: true,
            scope: {
                event: '=?',
                onClick: '&'
            },
            link: function (scope, element, attrs) {
                //千萬不可以!! scope.events = scope.model;

                scope.clickImg = function() {
                    alert("Directive 叫出");
                    scope.onClick();
                }

                //scope.clickMe = function () {
                //    alert('tt');
                //    var divElement = element.find('#eventDiv');
                //    var button = angular.element(
                //            '<input type="button" ng-click="newBtnClick()" value="newBtn">'
                //            );
                //    //$compile(divElement)(scope);
                //    divElement.append(button);
                    
                //}

                scope.newBtnClick = function(){
                    alert('newEvent');
                }

                

            }
        };
    });