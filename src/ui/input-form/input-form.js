define(
	[
		'ui/module'
	],
	function (module) {
		module.controller('chatInputFormController', [
			'$scope',
			'chatService',
			function defineChatInputFormController ($scope, chatService) {
				$scope.submitMessage = function () {
					var message = $scope.message;
					chatService.submitMessage(message);
					$scope.message = "";
				}
			}
		]);
		return module.directive('chatInputForm', [
			function defineChatInputForm () {
				return {
					restrict: 'AE',
					templateUrl: 'ui/input-form/input-form.html',
					controller: 'chatInputFormController'
				}
			}
		]);
	}
);