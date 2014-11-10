(function () {

    'use strict';
    
    angular.module('panis').controller('NavigationController', NavigationController);
    
    function NavigationController($translate, $scope) {
        /* jshint validthis: true */
        var navigation = this;
        
        navigation.changeLanguage = changeLanguage;

        function changeLanguage(key) {
            if (key === 'da' && 'da' !== $translate.use()) {
                $('body').fadeOut('slow', function () {
                    $translate.use(key);
                    $scope.$apply();
                    $('body').fadeIn('slow');
                });
            } else if (key === 'en' && 'en' !== $translate.use()) {
                $('body').fadeOut('show', function () {
                    $translate.use(key);
                    $scope.$apply();
                    $('body').fadeIn('slow');
                })
            }
        }

    }

})();