'use strict';
    
describe('Service (factory): UserService', function() {

    var sut, $httpBackend, baseResource;

    beforeEach(module('user.service'));
    beforeEach(module('panis.configuration'));

    beforeEach(inject(function($injector) {
        sut = $injector.get('userService');
        baseResource = $injector.get('baseResource');
        $httpBackend = $injector.get('$httpBackend');
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should return a user when called with a valid username and password', function () {
        $httpBackend.expectPOST(baseResource + '/login', {email: 'svx', password: 'qq'}).respond({username: 'svx', password: 'qq'});
        var user = sut.login('svx', 'qq');
        $httpBackend.flush();
//        expect(user).not.toBe(undefined);
//        expect(user.username).toBe('svx');
    });

    it('should set the loggedInUser after a successful login', function () {
//        userService.login('svx', 'qq');
//        expect(userService.getLoggedInUser).toBeDefined();
    });

});