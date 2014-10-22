(function () {

    'use strict';
    
    angular.module('panis.registration').controller('RegisterController', RegisterController);
    
    function RegisterController($scope) {
        /* jshint validthis: true */
        var vm = this;
        
        vm.showRegisterUserForm = false;

        $('#register-button').bind('animationend webkitAnimationEnd', function () {
            if ($('#register-button').hasClass('show')) {
                $('#register-button').removeClass('show');
            }
            if ($('#register-button').hasClass('hide')) {
                $('#register-button').removeClass('hide');
                vm.showRegisterUserForm = true;
                $scope.$digest();
                $('#register-form').addClass('show');
            }
        });

        $('#register-form').bind('animationend webkitAnimationEnd', function () {
            if ($('#register-form').hasClass('show')) {
                $('#register-form').removeClass('show');
                $scope.$digest();
            }
            if ($('#register-form').hasClass('hide')) {
                $('#register-form').removeClass('hide');
                vm.showRegisterUserForm = false;
                $scope.$digest();
                $('#register-button').addClass('show');
            }
        });
    }

})();