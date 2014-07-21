angular.module('angularJSLab.serviceLab.services.iTunesForHttp', [
])
.factory('iTunesServicesForHttp', function ($http) {
    return {
        get: function () {
            return $http({
                method: 'JSONP',
                url: 'https://itunes.apple.com/search?callback=angular.callbacks._0&term=merry%2Bchristmas'
            });
        }
    }
});