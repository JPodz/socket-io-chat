define(
	[
		'ui/module'
	],
	function (module) {
		return module.directive('chatInputForm', [
			function () {
				return {
					restrict: 'AE',
					templateUrl: 'js/ui/input-form/input-form.html',
					link: function (scope, element, attributes) {
						
					}
				}
			}
		]);
	}
);