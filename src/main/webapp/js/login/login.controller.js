(function () {

    'use strict';
    
    angular.module('panis.login').controller('LoginController', LoginController);
    
    function LoginController($state, userService) {
        /* jshint validthis: true */
        var login = this;
        login.authenticate = authenticate;

        activate();

        function activate() {

        }

        function authenticate(username, password) {
            var user = userService.login(username, password);
            if (user) {
                $state.go('list');
            } else {
                console.log('Du blev ikke logget ind!');
            }
        }

    }

})();