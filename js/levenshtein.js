/**
* Finds edit distance between two strings (edit being appending, deleting, or
* replacing a character with another character).
* @param {String} stringOne
* @param {String} stringTwo
* @return {Number} u[stringTwoLength]
*/

function levenshtein(stringOne, stringTwo) {
	var t = [], u, i, j, stringOneLength = stringOne.length, stringTwoLength = stringTwo.length;

	if (!stringOneLength) {
		return stringTwoLength;
	}

	if (!stringTwoLength) {
		return stringOneLength;
	}

	for (j = 0; j <= stringTwoLength; j++) {
		t[j] = j;
	}

	for (i = 1; i <= stringOneLength; i++) {
		for (u = [i], j = 1; j <= stringTwoLength; j++) {
			u[j] = stringOne[i - 1] === stringTwo[j - 1] ? t[j - 1] : Math.min(t[j - 1], t[j], u[j - 1]) + 1;
		} 
		t = u;
	} 
	return u[stringTwoLength];
}

/**
* Finds edit distance between input and entries in an array, 
* returns entry with smallest distance
* @param {String} inputString
* @param {Array} stringArray
* @return {String} outputString
*/

// external memoization cache
var memCache = {};

function findLeastEditDistanceMemoized(inputString, stringArray) {
	// output string is set as the string with the smallest edit distance,
	// minimum number is used to check
	var outputString = "";
	var minimumNumber = Number.POSITIVE_INFINITY;

	// console.log(memCache);

	if (inputString in memCache) {
		// console.log('Cache hit for ', inputString);
		return memCache[inputString];
	} else {
		// console.log('Cache miss for ', inputString);
		// iterate through input array, find distance between inputString and string in array
		stringArray.forEach(function(arrayString) {
			var distance = levenshtein(inputString.toLowerCase(), arrayString.toLowerCase());

			// check if current distance is smaller than the minimum, set minimum and outputString 
			// if so
			if (distance < minimumNumber) {
				minimumNumber = distance
				outputString = arrayString
			}
		});

		return memCache[inputString] = outputString;
	}
}