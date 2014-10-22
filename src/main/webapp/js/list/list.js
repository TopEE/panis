(function () {
    "use strict";

    angular.module('panis.list', [])

        .config(function ($stateProvider) {
            $stateProvider
                .state('list', {
                    url: '/list',
                    views: {
                        'navigation': {
                            templateUrl: 'js/list/list.top.html',
                            controller: 'TopController as top'
                        },
                        'content': {
                            templateUrl: 'js/list/list.html',
                            controller: 'ListController as list'
                        }

                    }

                })
        })

        .controller('ListController', function () {

        })
        .controller('TopController', function (loginService) {
            var top = this;

            top.loggedInUser = loginService.getLoggedInUser();
        })

})();
