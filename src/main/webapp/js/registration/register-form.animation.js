(function () {

    'use strict';

    angular.module('panis.registration').animation('.register-form-animate-out', registerForm);

    function registerForm($state) {
        return {
            addClass: function (element, className, done) {
                element.bind('animationend webkitAnimationEnd', function () {
                    element.addClass('hideMe');
                    $state.go('login');
                });
                done();
            }
        }
    }

})();