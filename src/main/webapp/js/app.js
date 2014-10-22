angular.module('panis', [
    'ui.router',
    'panis.registration'
])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('panis', {
                url: '/',
                abstract: true
            });
        $urlRouterProvider.otherwise('/');
    })
