(function () {
    "use strict";

    angular.module('panis.login', [
        'ui.router',
        'panis.registration',
        'ngAnimate'
    ])

        .config(function ($stateProvider) {
            $stateProvider
                .state('login', {
                    url: '/login',
                    views: {
                        'navigation': {
                            templateUrl: 'js/login/login.top.html',
                            controller: 'LoginController as login'
                        },
                        'content': {
                            templateUrl: 'js/login/login.html',
                            controller: 'LoginController as login'
                        }

                    }

                })
        })

})();
