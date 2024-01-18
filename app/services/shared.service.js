angular.module('myApp')
    .service('SharedService', function () {
        var sharedService = this;
        sharedService.messageForView1 = '';
        sharedService.messageForView2 = '';

        sharedService.sendMessageToView1 = function (message) {
            sharedService.messageForView1 = message;
        };

        sharedService.sendMessageToView2 = function (message) {
            sharedService.messageForView2 = message;
        };

        sharedService.getReceivedMessageForView1 = function () {
            return sharedService.messageForView1;
        };

        sharedService.getReceivedMessageForView2 = function () {
            return sharedService.messageForView2;
        };
    });
