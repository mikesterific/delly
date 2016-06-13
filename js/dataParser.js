var dataParser = {
    init: function(){
        this.body();
    },
    reduceProperties: function(obj){
        var payload = [];
        for (var i = 0; i < obj.length; i++) {
            var bigItem = obj[i];
            var smallItem = {};
            var keys = $.map( bigItem, function( value, key ) {
                if(key === "Description"){ smallItem["Description"] = value}
                if(key === "SubTotalAmount"){ smallItem["SubTotalAmount"] = value}
                if(key === "ImageUrl"){ smallItem["ImageUrl"] = value}
                if(key === "Components"){ smallItem["Components"] = value}

              return key;
            });
            payload.push(smallItem);
        }
        //console.log(JSON.stringify(payload));
    },
    body: function(){
        
    }
};
dataParser.init();