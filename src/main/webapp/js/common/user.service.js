(function() {

    'use strict';

	angular.module('user.service', []).factory('userService', UserService);
	
	function UserService($http, baseResource) {

        var service = {
            login: login,
            getLoggedInUser: getLoggedInUser,
            getRegistredUser: getRegistredUser
        };

        var users = [
            {
                user: 'svx',
                pass: 'qq',
                name: 'Søren Pedersen'
            },
            {
                user: 'feb',
                pass: 'kaffe--NU!',
                name: 'Flemming Behrend'
            }
        ];

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
            var loginElement = {
                email: email,
                password: password
            }
            return $http.post(baseResource + '/login', loginElement).then(function (loginAccess) {
                console.log(loginAccess);
            });
        }

}

})();