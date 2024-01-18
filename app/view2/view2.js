angular.module('myApp')
    .component('view2', {
        templateUrl: 'view2/view2.html',
        controller: ['SharedService', function (SharedService) {
            var ctrl = this;
            ctrl.inputText = '';

            ctrl.sendMessage = function () {
                SharedService.sendMessageToView1(ctrl.inputText);
            };

            ctrl.receivedMessageFromView1 = function () {
                return SharedService.getReceivedMessageForView2();
            };
        }]
    });
