(function () {

    'use strict';
    
    angular.module('panis.login').controller('LoginController', LoginController);
    
    function LoginController(loginService, $state, $timeout) {
        /* jshint validthis: true */
        var login = this;
        login.authenticate = authenticate;

        activate();

        function activate() {

        }

        function authenticate(username, password) {
            loginService.login(username, password);
        }

    }

})();