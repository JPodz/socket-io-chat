define(
    [
        'socket-io'
    ],
    function () {
        var module = angular.module('chat.services', [
            'btford.socket-io'
        ])
        .factory('chatSocket', function (socketFactory) {
            return socketFactory();
        });
        return module;
    }
);