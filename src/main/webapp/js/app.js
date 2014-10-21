(function () {

    angular.module('panis', [
        'ui.router',
        'panis.login'
    ])

        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('panis', {
                    url: '/',
                    abstract: true
                });
            $urlRouterProvider.otherwise('/');
        })

})();
