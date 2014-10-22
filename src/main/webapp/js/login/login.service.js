(function() {

    'use strict';

	angular.module('panis.login').factory('loginService', loginService);
	
	function loginService() {

		var service = {
            login: login
		};
		
		return service;

        function login(username, password) {
            console.log('username: ' + username + ', password: ' + password);
        }

	}

})();