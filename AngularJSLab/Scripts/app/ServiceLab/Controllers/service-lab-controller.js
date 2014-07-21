angular.module('angularJSLab.serviceLab.controllers.serviceLab',
    [
        'angularJSLab.serviceLab.services.iTunesForHttp',
        'angularJSLab.serviceLab.services.iTunes',
        'angularJSLab.serviceLab.controllers.valueLab',
        'angularJSLab.serviceLab.controllers.constantLab',
        'angularJSLab.serviceLab.controllers.providerLab',
        'angularJSLab.serviceLab.controllers.factoryLab',
        'angularJSLab.serviceLab.controllers.servicesLab'

    ])
.config(function (providerLabProvider) {
    providerLabProvider.name = "Sky";

})
.controller('serviceLab', function ($scope, iTunesServices, iTunesServicesForHttp,
    valueLab, constantLab, providerLab,
    factoryLab, servicesLab) {

    //$scope.result = iTunesServices.get();//({ action: 'AKB48' });

    iTunesServicesForHttp.get().
        success(function (data, status, headers, config) {
            $scope.result = data;
        }).error(function (data, status, headers, config) {
    });

    $scope.valueLab = valueLab;
    $scope.constantLab = constantLab;
    $scope.providerLab = providerLab.getHello();
    $scope.factoryLab = factoryLab.getHello();
    $scope.serviceLab = servicesLab.getHello();
});

//Value
angular.module('angularJSLab.serviceLab.controllers.valueLab', [])
.value('valueLab', 'Hello Value');

//constant
angular.module('angularJSLab.serviceLab.controllers.constantLab', [])
.constant('constantLab', 'Hello Constant');

//Provider
angular.module('angularJSLab.serviceLab.controllers.providerLab', [])
.provider('providerLab', function () {

    this.name = '';
    this.hello = 'Hello';

    this.$get = function () {
        var that = this;
        return {
            getHello: function () {
                return that.hello + that.name;
            },
            name: that.name
        }
    }

});

//Factory
angular.module('angularJSLab.serviceLab.controllers.factoryLab', [])
.factory('factoryLab', function () {

    var service = {};
    var name = 'Sky';
    var hello = 'Hello';

    service.getHello = function () {
        return hello + name;
    }

    return service;

});

//Service
angular.module('angularJSLab.serviceLab.controllers.servicesLab', [])
.service('servicesLab', function () {

    var name = 'Sky';
    var hello = 'Hello';

    this.getHello = function () {
        return hello + name;
    }

});