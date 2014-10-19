(function () {

    'use strict';
    
    angular.module('panis').controller('LoginController', LoginController);
    
    function LoginController(loginService) {
        /* jshint validthis: true */
        var vm = this;
        vm.login = login;

        activate();

        function activate() {

        }

        function login(username, password) {

        }

    }

})();