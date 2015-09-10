define(
    [
        'socket-io',
        'angular-local-storage'
    ],
    function () {
        var module = angular.module('chat.services', [
            'btford.socket-io',
            'LocalStorageModule'
        ])
        .factory('chatSocket', function (socketFactory) {
            return socketFactory();
        });
        return module;
    }
);