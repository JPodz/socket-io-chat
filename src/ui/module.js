define(
    [
        'ui/views'
    ],
    function (views) {
        var module = angular.module('chat.ui', [])
            .run(['$templateCache', views.init]);
        return module;
    }
);