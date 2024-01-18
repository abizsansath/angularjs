
angular.module('myApp')
    .component('view1', {
        templateUrl: 'view1/view1.html',
        controller: ['SharedService', function (SharedService) {
            var ctrl = this;
            ctrl.inputText = '';

            ctrl.sendMessage = function () {
                SharedService.sendMessageToView2(ctrl.inputText);
            };

            ctrl.receivedMessageFromView2 = function () {
                return SharedService.getReceivedMessageForView1();
            };
        }]
    });
