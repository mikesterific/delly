angular.module('delly', [])
    .controller('MainCtrl', function($scope) {
        // This is where we switch top level default models
        $scope.output = defaultOutputModel.laptops;
        // $scope.suggestions = defaultOutputModel.laptops.suggestions;

        $scope.storedOutputModel = angular.copy(defaultOutputModel);
        $scope.categories = $scope.storedOutputModel.laptops.categories;
        $scope.suggestions = parseModule.getlaptopItems("home");
        $scope.bookmarks = [{
                            name : "Laptops",
                            url: "/"
                        },
                        {
                            name : "Home",
                            url: "/"
                        },
                        {
                            name : "Inspiron",
                            url: "/"
                        }];
        $scope.bookmarks = [];
        console.log("suggestions", $scope.suggestions );
        $scope.choosenCategories = ["segment", "brand", "inspiron", "xps", "chromebook"];
        $scope.showCategories = function(showCatArry){
            var payload = [];
            for (var i = 0; i < $scope.categories.length; i++) {

                for (var j = 0; j < showCatArry.length; j++) {

                    if($scope.categories[i].type === showCatArry[j]){
                        payload.push($scope.categories[i]);
                    }
                }
                
            }
            $scope.categories = payload;
        }
        $("body").on("click", ".dellyhead", function(){
            $(".cs-shadowbox").removeClass("hide");
            $(".dl-master-wrap").removeClass("hide");
        })
        $scope.$watch(
            "categories",
            function( newValue, oldValue ) {
               console.log("watchers fired");
            }
        );
    })
    .directive('bookmarks', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/bookmarkTemplate.html'
        };
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
    .directive('dialog', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/dialog.html'
        };
    })
    .directive('buttonSection', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/button.html',
            scope : {
                bookmarks : "@"
            },
            link : function(scope, element, attrs){

                var t = $(element),
                    laptops = t.find("#dl-laptop"),
                    segment = t.find("#dl-segment"),
                    brand = t.find("#dl-brand"),
                    series = t.find("#dl-series"),
                    reset = t.find("#dl-reset"),
                    rows = $("category-row"),
                    itemWraps = $(".itemWrap");

                function showItem(row, item){
                    var selectedRow = $("category-row[type='" + row + "']"),
                        selectedItem = selectedRow.find(".itemWrap[type='" + item + "']"), 
                        isProductLine = selectedRow[isproductline="true"];

                    selectedRow = $("category-row[type='" + row + "']");
                    selectedItem = selectedRow.find(".itemWrap[type='" + item + "']");

                    if(row==="segment"){
                        showAll();
                    }
                    if(row==="brand"){
                        hideRow("segment");
                    }
                    if(isProductLine){
                        $("category-row").not(selectedRow).addClass("rowHide");
                    }
                    selectedItem.removeClass("itemHide");
                    selectedRow.find(".itemWrap").not(selectedItem).addClass("itemHide");
                }
                // Laptops
                laptops.on("click", function(){
                    showAll();
                    $("#homelist").hide();
                    $("#inspironlist").hide();
                    $("#laptopslist").show();
                    dlCommon.showBookmark("laptop");
                });
                //Home
                segment.on("click", function(){
                    hideRow("segment");
                    // scope.suggestions = parseModule.getlaptopItems("home");
                    $("#homelist").show();
                    $("#laptopslist").hide();
                    $("#inspironlist").hide();

                    showOtherRowsBesidesThis("segment");
                    dlCommon.showBookmark("home");
                });
                // Inspiron
                brand.on("click", function(){

                    hideOtherRows("inspiron");
                    $("#laptopslist").hide();
                    $("#homelist").hide();
                    $("#inspironlist").show();
                    var sfsdf = scope.bookmarks;
                    dlCommon.showBookmark("inspiron");
                    
                });
                // 3000
                series.on("click", function(){
                    showItem("inspiron", "3000");

                });
                reset.on("click", function(){
                    //scope.showCategories(["inspiron"]);
                    showAll();

                });
                function showRow(row){
                    var tRow = $("category-row[type='" + row + "']");
                    tRow.removeClass("rowHide");
                    tRow.find(".itemWrap").each(function(){
                        $(this).removeClass("itemHide");
                    });
                }
                function hideRow(row){
                    $("category-row[type='" + row + "']").addClass("rowHide");
                }
                function hideOtherRows(row){
                    var thisRow = $("category-row[type='" + row + "']");
                    $("category-row").not(thisRow).addClass("rowHide");
                }
                function showOtherRowsBesidesThis(row){
                    var thisRow = $("category-row[type='" + row + "']"),
                        otherRows = $("category-row").not(thisRow);

                    otherRows.removeClass("rowHide");

                    otherRows.find(".itemWrap").each(function(){
                        $(this).removeClass("itemHide");
                    });
                }
                function showAll(){
                    $("#output_wrap").show();
                    $("category-row").each(function(){
                        $(this).removeClass("rowHide");
                        $(this).find(".itemWrap").each(function(){
                            $(this).removeClass("itemHide");
                            
                        })
                    })
                }

            }
        };
    });