(function () {
    "use strict";

    angular.module('panis.login', ['ui.router'])

        .config(function ($stateProvider) {
            $stateProvider
                .state('login', {
                    url: '/login',
                    views: {
                        'navigation': {
                            templateUrl: 'login.top.html',
                            controller: 'LoginController as login'
                        },
                        'content': {
                            templateUrl: 'login.html'
                        }

                    }

                })
        })

})();
