(function () {

    angular.module('panis', [
        'ui.router',
        'pascalprecht.translate',
        'ngAnimate',
        'user.service',
        'panis.configuration',
        'panis.login',
        'panis.registration',
        'panis.list'
    ])

        .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
            $stateProvider
                .state('panis', {
                    url: '/',
                    abstract: true
                });
            $urlRouterProvider.otherwise('/login');
//            $httpProvider.interceptors.push('authHttpRequestInterceptor');
        });

//        .factory('authFactory', function ($rootScope) {
//
//            var authFactory = {
//                authData: undefined
//            };
//
//            authFactory.setAuthData = function (authData) {
//                this.authData = {
//                    authId: authData.authId,
//                    authToken: authData.authToken,
//                    authPermission: authData.authPermission
//                };
//                $rootScope.$broadcast('authChanged');
//            };
//
//            authFactory.getAuthData = function () {
//                return this.authData;
//            };
//
//            authFactory.isAuthenticated = function () {
//                return !angular.isUndefined(this.getAuthData());
//            };
//
//            return authFactory;
//        })
//        .factory('authHttpRequestInterceptor', function ($rootScope, $injector, authFactory) {
//            var authHttpRequestInterceptor = {
//                request:
//                    function ($request) {
//                        var authFactory = $injector.get('authFactory');
//                        if (authFactory.isAuthenticated()) {
//                            $request.headers['auth-id'] = authFactory.getAuthData().authId;
//                            $request.headers['auth-token'] = authFactory.getAuthData().authToken;
//                        }
//                        return $request;
//                    }
//            }
//            return authHttpRequestInterceptor;
//        });

})();
