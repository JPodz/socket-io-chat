define(
	[
		'services/module'
	], 
	function (module) {
		return module.factory('chatService', [
			'$http', 
			'$q', 
			'$log',
			'chatSocket',
			function ($http, $q, $log, socket) {
				return {

					/**
					 * Submits a new message
					 * 
					 * @param  	{String} 		message 	Message
					 */
					submitMessage: function (message) {
						socket.emit('chat-message', message);
					},

					/**
					 * Runs the provided callback when a new message is received
					 * 
					 * @param  	{Function} 		callback 	Callback method
					 */
					receiveMessage: function (callback) {
						socket.on('chat-message', callback);
					}
				}
			}]
		);
	}
);