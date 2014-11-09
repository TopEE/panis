(function () {

    'use strict';
    
    angular.module('panis').controller('NavigationController', NavigationController);
    
    function NavigationController($translate) {
        /* jshint validthis: true */
        var navigation = this;
        
        navigation.changeLanguage = changeLanguage;

        function changeLanguage(key) {
            if (key === 'da') {
                $translate.use(key);
            } else if (key === 'en') {
                $translate.use(key);
            }
        }

    }

})();