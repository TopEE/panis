(function () {

    'use strict';
    
    angular.module('panis.registration').controller('RegistrationController', RegistrationController);
    
    function RegistrationController() {
        /* jshint validthis: true */
        var registration = this;
        registration.hej = 'Hej';
        console.log(registration.hej);
    }

})();