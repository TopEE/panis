(function () {

    'use strict';
    
    angular.module('panis.login').animation('.register-button-animate-out', registerButton);
    
    function registerButton($state) {
        return {
            addClass: function(element, className, done) {
                element.bind('animationend webkitAnimationEnd', function () {
                    element.addClass('hideMe');
                    $state.go('registration');
                });
                done();
            }
        }
    }

})();