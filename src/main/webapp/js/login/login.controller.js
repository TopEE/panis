(function () {

    'use strict';
    
    angular.module('panis.login').controller('LoginController', LoginController);
    
    function LoginController(loginService, $state, $timeout) {
        /* jshint validthis: true */
        var login = this;
        login.authenticate = authenticate;
        login.goRegister = goRegister;

        activate();

        function activate() {

        }

        function authenticate(username, password) {
            loginService.login(username, password);
        }

        function goRegister() {
//            console.log("test");
//            $timeout(function () {
//                console.log('state go called');
//                $state.go('registration');
//            }, 2000);
        }

    }

})();