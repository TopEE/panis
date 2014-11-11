(function () {

    angular.module('panis', [
        'ui.router',
        'pascalprecht.translate',
        'ngAnimate',
        'user.service',
        'panis.login',
        'panis.registration',
        'panis.list'
    ])

        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('panis', {
                    url: '/',
                    abstract: true
                });
            $urlRouterProvider.otherwise('/login');
        })

        .constant('baseResource', 'http://localhost:8080/resource');

})();
