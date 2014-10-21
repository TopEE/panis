(function () {
    "use strict";

    angular.module('panis.registration', ['ui.router'])

        .config(function ($stateProvider) {
            $stateProvider
                .state('registration', {
                    url: '/registration',
                    views: {
                        'content': {
                            templateUrl: 'registration.html',
                            controller: 'RegistrationController as registration'
                        }
                    }

                })
        });


});