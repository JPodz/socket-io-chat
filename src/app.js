require([
    'angular',
    'ui/package',
    'services/package'
], function (angular) {
    angular.module('chat-app', [
        'chat.ui', 
        'chat.services'
    ]);
    
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['chat-app']);
    });
});