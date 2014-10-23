'use strict';
    
describe('Service (factory): UserService', function() {

    beforeEach(module('user-service'));

    var userService;

    beforeEach(inject(function(_userService_) {
        userService = _userService_;
    }));

    it('should return a user when called with a valid username and password', function () {
        var user = userService.login('svx', 'qq');
        expect(user).not.toBe(undefined);
        expect(user.user).toBe('svx');
    });

    it('should set the loggedInUser after a successful login', function () {
        userService.login('svx', 'qq');
        expect(userService.getLoggedInUser).toBeDefined();
    });

});