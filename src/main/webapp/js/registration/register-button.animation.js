(function () {

    'use strict';
    
    angular.module('panis').animation('.register-button', registerButton);
    
    function registerButton() {
        return {
            beforeAddClass: function (element, className, done) {
                console.log("beforeAddClass (register-button): " + className);
                console.log(element);
            },
            addClass: function(element, className, done) {
                console.log("addClass (register-button): " + className);
                console.log(element);
            },
            beforeRemoveClass: function (element, className, done) {
                console.log("beforeRemoveClass (register-button): " + className);
                console.log(element);
            },
            removeClass: function(element, className, done) {
                console.log("removeClass (register-button): " + className);
                console.log(element);
            },
            enter: function (element, className, done) {
                console.log("enter (register-button): " + className);
                console.log(element);
                done();
            },
            leave: function (element, className, done) {
                console.log("leave (register-button): " + className);
                console.log(element);
            }
        }
    }

})();