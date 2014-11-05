(function() {

    'use strict';

	angular.module('user-service', []).factory('userService', UserService);
	
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
            return $http.get(baseResource + "/registration/users").then(function (res) {
                console.log(res.data);
                return res.data;
            });
        }

        function login(username, password) {
            console.log('1; ' + username + ', ' + password);
            return loggedInUser = _.find(users, function (user) {
                console.log('userName: ' + user.user);
                console.log('password: ' + user.password);
                if(user.user === username && user.pass === password) {
                    console.log('found!');
                    return true;
                }
            });
        }

}

})();