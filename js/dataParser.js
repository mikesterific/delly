var nlp = nlp_compromise;

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

/*
*   Parsing module 
*/

var parseModule = (function() {
    // private variables
    var brandArray = ["Inspiron", "XPS", "AlienWare", "Latitude", "Precision", "ChromeBook"];

    // temporary test variable
    var hardCodedNlp = nlp.text("I'd like an AlienWare laptop with 8 gigabytes of memory").sentences[0];

    // public methods
    return {
        // Iterates through nlp-converted input terms, performs regex
        // match to ascertain product category
        // TODO: Improve regex to handle more cases
        // Returns string representation of the category
        parseItemCategory: function(speechInput) {
            var laptopRe = /[lL]aptop/;
            var desktopRe = /[dD]esktop/;
            var category;

            hardCodedNlp.terms.forEach(function(term) {
                if (term.text.match(laptopRe)) {
                    category = "laptop"
                } else if (term.text.match(desktopRe)) {
                    category = "desktop"
                }
            })

            return category;
        },

        // Iterates through nlp-converted input terms, performs regex
        // match via the returned item category, and obtains the first
        // word of the returned branding phrase
        // TODO: handle more cases
        // Returns string representation of the brand
        parseItemBrand: function(speechInput) {
            var re = parseModule.parseItemCategory();
            var brand;

            hardCodedNlp.terms.forEach(function(term) {
                if (term.text.match(re)) {
                    brand = term.text.split(' ')[0];
                }
            });

            return findLeastEditDistanceMemoized(brand, brandArray);
        },

        // Iterates through nlp-converted input terms, grabs term
        // if the term is an nlp value, appends 'GB' to string and
        // returns an object
        parseItemConfiguration: function(speechInput) {
            var config = {
                processor: "i5",
                memory: "8GB",
                hardDisk: "1TB",
                display: "15.6-inch"
            };

            hardCodedNlp.terms.forEach(function(term) {
                if (term.reason === "is_value") {
                    config.memory = term.number + "GB";
                }
            });

            return config;
        },

        parseQuantity: function(text) {
            var nlpOutput = nlp.value(text).number;
            console.log(nlpOutput);
        },

        parseAssociation: function(text) {
            var output = nlp.text(text).sentences[0];

            var nounOutputs = [];

            output.terms.forEach(function(term) {
                if (term.reason != "lexicon_pass" && term.reason != "is_person"){
                    nounOutputs.push(term);
                }
            });

            console.log(nounOutputs);
        },

        getlaptopItems: function(category, brand, config, price, description) {
			console.log(category);
			console.log(brand);
			console.log(config);
            var laptopItems = [];
            var desc = "";
            var itemBrand = "";
            var itemPrice = 10000;
            var itemRam = "";
            var itemProc = "";
            var itemHD = "";
            var itemScreenSize = "";
            var itemCategory = "";
			var itemIndex = 0;
            
			if(category){itemCategory = category.toLowerCase();}
            if(brand){itemBrand = brand.toLowerCase();}
			if(config)
			{
				if(config.memory){itemRam = config.memory.toLowerCase() + " ";}
				if(config.processor){itemProc = config.processor}
				if(config.hardDisk){itemHD = config.hardDisk.toLowerCase();}
				if(config.display){itemScreenSize = config.display.toLowerCase();}
				if(description){desc = description.toLowerCase();}
				if(price){itemPrice = price.toLowerCase();}
			}

			if(!itemCategory && !itemBrand && !config ){
					return cartItems;
			}
				
            for (var i = 0; i < cartItems.length; i++) {
                var item = cartItems[i];
                var processorItem;
                var ramItem;
                var hardDiskItem;
                var screenSizeItem;
                var index;
                var components = item.Components;
				
				var itemDescription = item.Description.toLowerCase();
				
				var isSearchedLaptop = true;
				if(itemCategory === "business")
				{
					isSearchedLaptop = (itemDescription.indexOf("inspiron")>-1 || 
										itemDescription.indexOf("xps")>-1 ||
										itemDescription.indexOf("vostro")>-1 ||
										itemDescription.indexOf("latitude")>-1 ||
										itemDescription.indexOf("precison")>-1 ||
										itemDescription.indexOf("chromebook")>-1 )
					
				}
				else if(itemCategory === "home")
				{
										isSearchedLaptop = (itemDescription.indexOf("inspiron")>-1 || 
										itemDescription.indexOf("xps")>-1 ||
										itemDescription.indexOf("alienware")>-1 ||
										itemDescription.indexOf("chromebook")>-1 )
				}
				
                for (index in item.Components) {

                    if (components[index].Name.indexOf("Processor") > -1) {
                        processorItem = components[index];
                    }

                    if (components[index].Name.indexOf("Memory") > -1) {
                        ramItem = components[index];
                    }

                    if (components[index].Name.indexOf("Hard Drive") > -1) {
                        hardDiskItem = components[index];
                    }

                    if (components[index].Name.indexOf("Display") > -1) {
                        screenSizeItem = components[index];
                    }
                }

				var memoryProductCode = ramItem.Description.toLowerCase();
                if (isSearchedLaptop && itemDescription.indexOf(itemBrand.toLowerCase()) > -1 &&
				    memoryProductCode.indexOf(itemRam) === 0)
				{
                    laptopItems[itemIndex] = item;
					itemIndex++;
                }

            }
            console.log(laptopItems);
            return laptopItems;
        }
    }
})();

// grab key terms from user spoken input
var category = parseModule.parseItemCategory();
var brand = parseModule.parseItemBrand();
var config = parseModule.parseItemConfiguration();

// grab items from cart items with said input
parseModule.getlaptopItems(null, brand, config, null, null);