
'use strict';

angular.module('myApp')
    .component('home', {
        templateUrl: 'home/home.html',
        controller: ['SharedService', function (SharedService) {
            var ctrl = this;

        }]
    });
