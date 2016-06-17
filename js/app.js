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
    })
    .directive('buttonSection', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/button.html',
            link : function(scope, element, attrs){
                var t = $(element),
                    segment = t.find("#dl-segment"),
                    brand = t.find("#dl-brand"),
                    series = t.find("#dl-series"),
                    config = t.find("#dl-config");

                segment.on("click", function(){

                });
                brand.on("click", function(){

                });
                series.on("click", function(){

                });
                config.on("click", function(){

                });

            }
        };
    });