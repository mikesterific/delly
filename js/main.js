/*
*	Dependency includes
*/
var nlp = nlp_compromise,
	output = $(".output"),
	textFromBox = $("#final_span");

/*
*	Page elements
*/

var clearDataDiv = document.getElementById('clearDataDiv');
var renderDiv = document.getElementById('renderDiv');

/*
*	Parse module 
*/

var parseModule = (function() {
	// private variables
	//var hardCodedNlp = nlp.text(textFromBox.text).sentences[0];

	// public methods
	return {
		sayNouns: function(text) {
			var output = nlp.text(text).sentences;
			var terms = output[0].terms;
			console.log("Terms",terms);
			for (var j = 0; j < terms.length; j++) {
				if(terms[j].tag == "Noun"){
					console.log(terms[j].text);
					responsiveVoice.speak(terms[j].text);
				}
			}
		},

		printSentence: function(text) {
			var nlpOutput = nlp.text(text).sentences,
			terms = nlpOutput[0].terms;
			var laptopLists = getlaptopItems("laptop", brand, null, null, config.memory, null, null, null);
			console.log(laptopLists);
			console.log("Terms",terms);
		},

		// Iterates through nlp-converted input terms, performs regex
		// match to ascertain product category
		// TODO: Improve regex to handle more cases
		// Returns string representation of the category
		parseItemCategory: function() {
			var re = /laptop/;
			var category;

			hardCodedNlp.terms.forEach(function(term) {
				if (term.text.match(re)) {
					category = "laptop"
				}
			})

			return category;
		},

		// Iterates through nlp-converted input terms, performs regex
		// match via the returned item category, and obtains the first
		// word of the returned branding phrase
		// TODO: handle more cases
		// Returns string representation of the brand
		parseItemBrand: function() {
			var re = parseModule.parseItemCategory();
			var brand;

			hardCodedNlp.terms.forEach(function(term) {
				if (term.text.match(re)) {
					brand = term.text.split(' ')[0];
				}
			});

			return brand;
		},

		// Iterates through nlp-converted input terms, grabs term
		// if the term is an nlp value, appends 'GB' to string and
		// returns an object
		parseItemConfiguration: function() {
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

		getlaptopItems: function(category, description, brand, price, ram, processor, hardDisk, screenSize) {
			var laptopItems = [];
			var desc = "";
			var itemBrand = "";
			var itemPrice = 10000;
			var itemRam = "";
			var itemProc = "";
			var itemHD = "";
			var itemScreenSize = "";
			var itemCategory = "";
			
			if(description){desc = description;}
			if(brand){itemBrand = brand;}
			if(price){itemPrice = price;}
			if(ram){itemRam = ram;}
			if(processor){itemProc = processor;}
			if(hardDisk){itemHD = hardDisk;}
			if(screenSize){itemScreenSize = screenSize;}
			if(category){itemCategory = category;}

			for (var i = 0; i < cartItems.length; i++) {
				var item = cartItems[i];
				var processorItem;
				var ramItem;
				var hardDiskItem;
				var screenSizeItem;
				var index;
				var components = item.Components;
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
                 var branding = item.Description.toLowerCase();
				if (branding.indexOf(desc.toLowerCase()) > -1
					) {
					laptopItems[i] = item;
				}

			}
			console.log(laptopItems);
			return laptopItems;
		},

		renderItems: function(itemsArray) {
					 var dataDiv = document.createElement("div");

					 var itemHeader = document.createElement("p");
					 var headerTextNode = document.createTextNode("Items -");
					 itemHeader.appendChild(headerTextNode);

					 itemsArray.forEach(function(item) {
								   // item title and text
								   var itemTitle = document.createElement("p");
								   var node = document.createTextNode(item.Description + " - " + item.TotalAmount);

								   // image and src
								   var itemImage = document.createElement("img");
								   itemImage.src = item.ImageUrl;

								   var hrElement = document.createElement("hr");

								   itemTitle.appendChild(node);
								   itemTitle.appendChild(itemImage);
								   dataDiv.appendChild(itemTitle);
								   dataDiv.appendChild(hrElement);
					 })

					 renderDiv.appendChild(itemHeader);
					 renderDiv.appendChild(dataDiv);
	   },
	   
	   clearDiv: function() {
		   renderDiv.innerHTML = "";
	   },


		logTopics: function(stringArray) {
			for (var i = 0; i < stringArray.length; i++) {
				console.log("Original string:", stringArray[i]);
				console.log("Topics: ", nlp.text(stringArray[i]).topics());
			}
		},

		logSentences: function(stringArray) {
			for (var i = 0; i < stringArray.length; i++) {
				console.log("Sentences: ", nlp.text(stringArray[i]).sentences);
			}
		}
	}
})();

/*
*	Add event listeners to page buttons
*/

clearDataDiv.addEventListener('click', function(){
	parseModule.clearDiv();
});