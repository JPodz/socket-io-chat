define(
	[
		'services/module'
	], 
	function (module) {
		return module.factory('chatService', [
			'$http', 
			'$q', 
			'$log',
			function ($http, $q, $log) {
				return {
					hello: function () {
						return "world";
					}
				}
			}]
		);
	}
);