angular.module('panis', [
    'ui.router'
])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('panis', {
                url: '/',
                abstract: true
            });
        $urlRouterProvider.otherwise('/');
    })
