angular.module('delly', [])
    .controller('MainCtrl', function($scope) {
        // This is where we switch top level default models
        $scope.output = defaultOutputModel.laptops;
        $scope.categories = $scope.output.categories;
        $scope.suggestions = $scope.output.suggestions;
    })
    .directive('inputWrap', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/speech-input.html'
        };
    })
    .directive('suggestedItem', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/suggested-item.html'
        };
    })
    .directive('categoryRow', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/category-row.html'
        };
    });