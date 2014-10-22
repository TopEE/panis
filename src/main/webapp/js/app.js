(function () {

    angular.module('panis', [
        'ui.router',
        'ngAnimate',
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

})();
