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
            var user = loginService.login(username, password);
            if(user) {
                $state.go('list');
            } else {
                console.log('Du blev ikke logget ind!');
            }
        }

    }

})();