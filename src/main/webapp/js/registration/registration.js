(function () {
    "use strict";

    angular.module('panis.registration', ['ui.router'])

        .config(function ($stateProvider) {
            $stateProvider
                .state('registration', {
                    url: '/registration',
                    views: {
                        'navigation': {
                            templateUrl: 'js/registration/registration.top.html'
                        },
                        'content': {
                            templateUrl: 'js/registration/registration.html',
                            controller: 'RegistrationController as registration'
                        }
                    }
                })
        });


})();