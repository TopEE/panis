(function() {

    'use strict';
    
    angular.module('panis').directive('flipButton', flipButton);

    function flipButton($animate) {
        var directive = {
            link: link,
            templateUrl: 'js/registration/flipButton.html',
            restrict: 'E',
            controller: ctrl,
            scope: {
                'showAttribute': '=',
                'afterShowButton': '&',
                'afterHideForm': '&',
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
            scope.$watch('showAttribute', function(show) {
                if (show) {
                    $animate.removeClass(element, 'ng-hide', scope.afterShowButton);
                }
                if (!show) {
                    $animate.addClass(element, 'ng-hide', scope.afterHideForm);
                }
            });
        }

        function ctrl($scope) {
            $scope.tester = false;
            $scope.afterShowButton = function () {
                console.log('after show button');
            }

            $scope.afterHideForm = function () {
                console.log('after hide form');
            }
        }
    }
     
})();