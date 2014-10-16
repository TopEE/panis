'use strict';
    
describe('Service (factory): loginService', function() {

    beforeEach(module('panis'));

    var loginService;

    beforeEach(inject(function(_loginService_) {
        loginService = _loginService_;
    }));

    it('should do something', function () {
        expect(!!loginService).toBe(true);
    });
    
});