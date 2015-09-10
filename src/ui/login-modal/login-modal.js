define(
    [
        'ui/module'
    ],
    function (module) {

        var 
            /**
             * Reference to the modal
             *
             * @private
             * @fixme 
             *     For some reason, watching the scope inside the controller from the directive won't work, so we need
             *     to keep a reference to the modal and close it from the controller. Not ideal.
             */
            modal;

        module.controller('chatLoginModalController', [
            '$scope',
            'chatService',
            function defineChatLoginModalController ($scope, chatService) {

                /**
                 * The logged in user, if any
                 * 
                 * @type {Object}
                 */
                $scope.loggedInUser = undefined;

                /**
                 * Submits the form and saves the username
                 */
                $scope.submit = function () {
                    if (!$scope.loggedInUser || $scope.loggedInUser.length === 0) {
                        return;
                    }
                    chatService.setLoggedInUser($scope.loggedInUser, function () {});
                    modal.close();
                }

                $scope.submitLoggedInMessage = function (user) {
                    chatService.submitEventMessage(user.username + ' has entered the arena.');
                };
            }
        ]);
        return module.directive('chatLoginModal', [
            '$modal',
            'chatService',
            function defineChatLoginModal ($modal, chatService) {
                return {
                    restrict: 'AE',
                    link: function (scope, element, attributes) {

                        // Look up the logged in user. If none is found, prompt them to provide a username. After the user has
                        // logged in, save the data to the service so they can remain logged in.
                        chatService.getLoggedInUser(function (data) {
                            if (data) {
                                chatService.setLoggedInUser(data, function () {});
                                return;
                            }
                            modal = $modal.open({
                                animation: true,
                                templateUrl: 'ui/login-modal/login-modal.html',
                                controller: 'chatLoginModalController',
                                backdrop : 'static',
                                keyboard: false
                            });
                        });
                    }
                }
            }
        ]);
    }
);