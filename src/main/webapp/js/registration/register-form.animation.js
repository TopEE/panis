(function () {

    'use strict';

    angular.module('panis.registration').animation('.register-form', registerForm);

    function registerForm() {
        return {
            beforeAddClass: function (element, className, done) {
                console.log("beforeAddClass (register-form): " + className);
                console.log(element);
            },
            addClass: function (element, className, done) {
                console.log("addClass (register-form): " + className);
                console.log(element);

            },
            beforeRemoveClass: function (element, className, done) {
                console.log("beforeRemoveClass (register-form): " + className);
                console.log(element);

            },
            removeClass: function (element, className, done) {
                console.log("removeClass (register-form): " + className);
                console.log(element);

            }
        }
    }

})();