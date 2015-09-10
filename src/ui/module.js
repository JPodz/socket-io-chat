define(
    [
        'ui/views',
        'angular-bootstrap',
        'angular-bootstrap-tpls'
    ],
    function (views) {
        var module = angular.module('chat.ui', [
            'ui.bootstrap'
        ])
        .run(['$templateCache', views.init]);
        return module;
    }
);