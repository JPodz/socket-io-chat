define(
    [
        'ui/module'
    ],
    function (module) {
        module.controller('chatMessageListController', [
            '$scope',
            'chatService',
            function defineChatMessageListController ($scope, chatService) {

                chatService.receiveMessage(function (message) {
                    if (!$scope.messageList) {
                        $scope.messageList = [];
                    }
                    $scope.messageList.push({
                        type: 'normal',
                        message: message
                    });
                });

                chatService.receiveEventMessage(function (message) {
                    if (!$scope.messageList) {
                        $scope.messageList = [];
                    }
                    $scope.messageList.push({
                        type: 'event',
                        message: message
                    });
                });

            }
        ]);
        return module.directive('chatMessageList', [
            function defineChatMessageList () {
                return {
                    restrict: 'AE',
                    templateUrl: 'ui/message-list/message-list.html',
                    controller: 'chatMessageListController'
                }
            }
        ]);
    }
);