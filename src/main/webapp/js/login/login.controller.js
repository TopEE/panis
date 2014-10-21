(function () {

    'use strict';
    
    angular.module('panis.login').controller('LoginController', LoginController);
    
    function LoginController(loginService) {
        /* jshint validthis: true */
        var vm = this;
        vm.login = login;

        activate();

        function activate() {

        }

        function login(username, password) {
            loginService.login(username, password);
        }

    }

})();