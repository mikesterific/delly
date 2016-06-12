angular.module('delly', [])
    .controller('MainCtrl', function($scope) {
        $scope.output = output;
        $scope.categories = output.categories;
        $scope.suggestions = output.sugggestions;
    })
    .directive('inputWrap', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/speech-input.html'
        };
    })
    .directive('categoryRow', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/category-row.html'
        };
    });