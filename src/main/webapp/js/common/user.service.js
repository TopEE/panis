(function() {

    'use strict';

	angular.module('user-service', []).factory('userService', UserService);
	
	function UserService() {

        var service = {
            login: login,
            getLoggedInUser: getLoggedInUser
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