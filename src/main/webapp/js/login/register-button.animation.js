(function () {

    'use strict';
    
    angular.module('panis.login').animation('.register-button', registerButton);
    
    function registerButton() {
        return {
            beforeAddClass: function (element, className, done) {
                console.log("beforeAddClass (register-button): " + className);
                console.log(element);
                done();
            },
            addClass: function(element, className, done) {
                console.log("addClass (register-button): " + className);
                console.log(element);
                done();
            },
            beforeRemoveClass: function (element, className, done) {
                console.log("beforeRemoveClass (register-button): " + className);
                console.log(element);
                done();
            },
            removeClass: function(element, className, done) {
                console.log("removeClass (register-button): " + className);
                console.log(element);
                done();
            },
            enter: function (element, className, done) {
                console.log("enter (register-button): " + className);
                console.log(element);
                done();
            },
            leave: function (element, className, done) {
                console.log("leave (register-button): " + className);
                console.log(element);
                done();
            }
        }
    }

})();