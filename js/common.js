var dlCommon = {
    init: function(){
        this.body();
    },
    body: function(){
        var showCatArry = ["segment", "brand", "inspiron", "xps", "chromebook"],
            section = defaultOutputModel.laptops,
            categories = section.categories,
            outputedObject = [];

        function showCategories(categories){
            for (var i = 0; i < categories.length; i++) {

                for (var j = 0; j < showCatArry.length; j++) {

                    if(categories[i].type === showCatArry[j]){
                        outputedObject.push(categories[i]);
                    }
                }
                
            }
        }
        showCategories(categories);

        
    },
    showBookmark: function(bookmark){
        var allBookmarks = $(".dl-bookmark-items"),
            showBookmark = $("#" + bookmark + "-bookmarks");
        allBookmarks.each(function(){
            $(this).hide();
        });
        showBookmark.css("display", "flex");
    }
};
dlCommon.init();