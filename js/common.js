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
        
        
    }
};
dlCommon.init();