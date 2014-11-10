(function () {
    angular.module('panis')

        .config(function ($translateProvider) {
            $translateProvider.
                translations('da', translations_da).
                translations('en', translations_en).
                preferredLanguage('da');
        })
})();