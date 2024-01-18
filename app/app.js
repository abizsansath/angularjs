'use strict';

angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {
                template: '<home></home>'
            })
            .when('/view1', {
                template: '<view1></view1>'
            })
            .when('/view2', {
                template: '<view2></view2>'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }]);