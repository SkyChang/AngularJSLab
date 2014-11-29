angular.module('eventServices', [
   'ngResource'
]).factory('eventServices', function ($resource) {
    return $resource('/Scripts/app/event/data/:fileName.json', {
        query: { method: 'GET', isArray: true },
        get: { method: 'GET' },
        create: { method: 'POST' },
        update: { method: 'PUT' },
        del: { method: 'DELETE' }
    });
});