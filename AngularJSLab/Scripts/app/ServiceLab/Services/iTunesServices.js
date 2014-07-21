angular.module('angularJSLab.serviceLab.services.iTunes', [
    'ngResource'
]).config(function ($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
})
.factory('iTunesServices', function ($resource) {
    //return $resource('https://itunes.apple.com/search?term=:art', { action: '@art' }, {
    //    query: { method: 'GET', isArray: true }//,
        //queryByID: { method: 'GET' }
    //});

    return $resource("https://itunes.apple.com/search",
        { term: "merry+christmas", callback: 'JSON_CALLBACK' },
        { get: { method: 'JSONP' } });
    });