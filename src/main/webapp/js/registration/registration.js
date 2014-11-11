(function () {
    "use strict";

    angular.module('panis.registration', [])

        .config(function ($stateProvider) {
            $stateProvider
                .state('registration', {
                    url: '/registration',
                    views: {
                        'navigation': {
                            templateUrl: 'js/navigation/navigation.html',
                            controller: 'NavigationController as navigation'
                        },
                        'content': {
                            templateUrl: 'js/registration/registration.html',
                            controller: 'RegistrationController as registration'
                        }
                    }
                })
        });


})();