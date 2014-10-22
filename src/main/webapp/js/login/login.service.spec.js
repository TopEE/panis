'use strict';
    
describe('Service (factory): loginService', function() {

    beforeEach(module('panis.login'));

    var loginService;

    beforeEach(inject(function(_loginService_) {
        loginService = _loginService_;
    }));

    it('should return a user when called with a valid username and password', function () {
        
        var user = loginService.login('svx', 'incorrect');
        
        expect(user).not.toBe(null);
        expect(user.user).toBe('svx');
    });
    
});