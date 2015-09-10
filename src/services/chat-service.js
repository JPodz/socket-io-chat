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
            'localStorageService',
            function ($http, $q, $log, socket, localStorageService) {

                /**
                 * The localStorage key to use for the logged in user, if any
                 * 
                 * @type {String}
                 */
                var LOGGED_IN_USER_KEY = "user";

                return {

                    /**
                     * Submits a new message
                     * 
                     * @param   {String}        message     Message
                     */
                    submitMessage: function (message) {
                        socket.emit('chat-message', message);
                    },

                    /**
                     * Runs the provided callback when a new message is received
                     * 
                     * @param   {Function}      callback    Callback method
                     */
                    receiveMessage: function (callback) {
                        socket.on('chat-message', callback);
                    },

                    /**
                     * Runs the provided callback when a new event message is received
                     * 
                     * @param   {Function}      callback    Callback method
                     */
                    receiveEventMessage: function (callback) {
                        socket.on('chat-event-message', callback);
                    },

                    /**
                     * Returns the logged in user
                     * 
                     * @param   {Function}      callback    Callback method
                     */
                    getLoggedInUser: function (callback) {
                        callback(localStorageService.get(LOGGED_IN_USER_KEY));
                    },

                    /**
                     * Sets a logged in user
                     * 
                     * @param   {Object}        data                User data
                     * @param   {String}        [data.username]     Username
                     * @param   {Function}      callback            Callback method
                     */
                    setLoggedInUser: function (data, callback) {
                        var user = {
                            username: data.username || "Guest"
                        };
                        localStorageService.set(LOGGED_IN_USER_KEY, user);
                        socket.emit('chat-user-logged-in', user);
                    }
                }
            }]
        );
    }
);