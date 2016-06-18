var dlCommon = {
    init: function(){
        this.body();
    },
    body: function(){
        var showCategories = ["segment", "brand", "inspiron", "xps", "chromebook"],
            section = defaultOutputModel.laptops,
            categories = section.categories;

        function showCategories(categories){
            for (var i = 0; i < categories.length; i++) {
                
                $.each( categories[i], function( key, value ) {
                  console.log( key + ": " + value );
                });
            }
        }
        showCategories(categories);
        
    }
};
dlCommon.init();

