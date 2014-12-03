(function() {

    'use strict';

	angular.module('user.service', []).factory('userService', UserService);
	
	function UserService($http, baseResource) {

        var service = {
            login: login,
            getLoggedInUser: getLoggedInUser,
            getRegistredUser: getRegistredUser
        };

        var loggedInUser;

        return service;

        function  getLoggedInUser() {
            return loggedInUser;
        }

        function getRegistredUser() {
            return $http.get(baseResource + "/login").then(function (res) {
                console.log(res.data);
                return res.data;
            });
        }

        function login(email, password) {
            return $http({
                method: 'POST',
                url: 'j_security_check',
                data: $.param({j_username: "admin", j_password: "secret"}),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function (loginAccess) {
                console.log(loginAccess);

            });
        }

}

})();