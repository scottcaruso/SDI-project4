//Name: Scott Caruso
//Project: Project 4
// Class, Term: SDI, 1204

var scottLib = function(){

//Part 1
//Number
//Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10

var formatNumber = function(number){
	var localNumber = new String(number);
	var length = localNumber.length;
	var decimalPlace = localNumber.indexOf(".");
		if (decimalPlace >= 0) {
			var wholeNumber = localNumber.substr(0,decimalPlace);
	var decimal = localNumber.substr(decimalPlace,length);
	var decimalLength = decimal.length;
		if (decimalLength > 3){
			var newDecimal = decimal.substr(0,3);
		} else if (decimalLength = 3) {
			var newDecimal = decimal;
		} else if (decimalLength = 2) {
			var zero = new String(0);
			var newDecimal = decimal.concat(zero);
		} else if (decimalLength <= 1) {
			var newDecimal = new String(00)
		};
	var convertedNumber = wholeNumber.concat(newDecimal);	
		} else {
			var newDecimal = new String(".00");
			var convertedNumber = localNumber.concat(newDecimal);
		};
	return convertedNumber
};

//Part 2
//String
//Determine if a string is a phone number
var isStringPhoneNumber = function(numberstring){
	var string = new String (numberstring);
	var firstHyphen = string.indexOf("-");
	var secondHyphen = string.lastIndexOf("-");
	var stringLength = string.length;
	var lengthValidity = function(){ //determines if the length of the string is valid
		if (stringLength != 12){
			var validity = false
		} else if (firstHyphen != 3){
			var validity = false
		} else if (secondHyphen != 7){
			var validity = false
		} else {
			var validity = true
		};
		return validity
	};
	var areaCode = function(){ //determines if the areaCode section is valid
		for (i = 0; i < firstHyphen; i++){
			if (isNaN(string.charAt(i)) == true){
			var areaCodeValidity = false
			break
			} else {
			var areaCodeValidity = true
			};
		};
		return areaCodeValidity
	};	
	var exchange = function(){ //determines if the exchange portion of the number if valid
		for (i = (firstHyphen + 1); i < secondHyphen; i++){
			if (isNaN(string.charAt(i)) == true){
			var exchangeValidity = false
			break
			} else {
			var exchangeValidity = true
			};
		};
		return exchangeValidity
	};	
	var lastFour = function(){ // determines if the last four digits are valid
		for (i = (secondHyphen + 1); i <= stringLength; i++){
			if (isNaN(string.charAt(i)) == true){
			var lastFourValidity = false
			break
			} else {
			var lastFourValidity = true
			};
		};
		return lastFourValidity
	};
	var overallValidity = function(){ // determines if the whole thing is valid
		var length = lengthValidity();
		var area = areaCode();
		var ex = exchange();
		var last = lastFour();
		if (length&&area&&ex&&last == true){
			var validity = true
		} else {
			var validity = false
		};
		return validity
	};
	var isValid = overallValidity();
	return isValid
};

//Part 3
//Number
//Given a string version of a number such as "42", return the value as an actual Number, such as 42.

var convertToNumber = function(string){
	var realNumber = parseFloat(string);
	return realNumber
};

//Part 4
//String
//Title-case a string (split into words, then uppercase the first letter of each word)

var stringToCap = function(string){
	var rawString = new String(string);
	var newRawString = rawString.split(" ");
	var numberOfWords = newRawString.length;
	var newString = [];
	for (i = 1; i <= numberOfWords; i++){
		var dummyString = newRawString;
		var newWord = dummyString.splice(0,1);
		//console.log(newWord); - debugging purposes
		var newWordString = new String(newWord);
		//console.log(newWordString); - debugging purposes
		var newLetter = newWordString.charAt(0);
		var restOfWord = newWordString.slice(1);
		//console.log(newLetter);
		//console.log(restOfWord);
		var upperCaseLetter = newLetter.toUpperCase();
		//console.log(upperCaseLetter);
		var newWord = upperCaseLetter.concat(restOfWord);
		//console.log(newWord);
		newString.push(newWord);
		};
	var printString = newString.toString();
	var noCommas = printString.replace(/,/gi," ");
	return noCommas
};

//Part 5
//String
//Does a string follow an aaa@bbb.ccc pattern like an email address?

var isValidEmail = function(string){
	var domainsArray = [".aero",".asia",".biz",".cat",".com",".coop",".edu",".gov",".info",".int",".jobs",".mil",".mobi",".museum",".name",".net",".org",".pro",".tel",".travel",".xxx"]; //array of possible . addresses for comparing string to.
	var emailString = new String(string);
	var atSymbolLocation = emailString.indexOf("@");
	var otherAtSymbolLocation = emailString.lastIndexOf("@");
	var hasAtSymbol = function(){
		if (atSymbolLocation == -1){
			var validAt = false
		} else {
			var validAt = true
		};
		return validAt
	};
	var isValidAt = hasAtSymbol();
		if (atSymbolLocation == otherAtSymbolLocation){
			var onlyOneAtSymbol = true
		} else {
			var onlyOneAtSymbol = false
		};
	//console.log("Only one at symbol " + onlyOneAtSymbol);
	//console.log(atSymbolLocation); - for testing purposes to verify atSymbolLocation returns properly
	//console.log(isValidAt); - for testing purposes, to make sure isValidAt returns properly
	var dotSymbolLocation = emailString.lastIndexOf(".");
	//console.log(dotSymboleLocation); - for testing purposes to verify dotSymbolLocation returns properly
	var hasDotAddress = function(){
		if (dotSymbolLocation == -1){
			var validDot = false
		} else {
			var validDot = true
		};
		return validDot
	};
	var isValidDot = hasDotAddress();
	//console.log(isValidDot);  //for testing purposes, to make sure isValidDot returns properly
	var dotAddressValid = function(){
		var dotString = emailString.slice(dotSymbolLocation);
		var hasValidDot = function(){
			var domainLocation = domainsArray.indexOf(dotString);
			if (domainLocation == -1){
				var validDomain = false
			} else {
				var validDomain = true
			};
			return validDomain
			};
		var domainValidity = hasValidDot();
		return domainValidity
	};
	var isDotAddressValid = dotAddressValid();
	//console.log(isDotAddressValid); //for testing
	var atSymbolBeforeDot = function(){
		if (atSymbolLocation < dotSymbolLocation){
			var locationValidity = true
		} else {
			var locationValidity = false
		};
		return locationValidity
	};
	var isSymbolInRightPlace = atSymbolBeforeDot();
	//console.log(isSymbolInRightPlace); //for testing
	var formatValidity = function(){
		if (isSymbolInRightPlace&&isDotAddressValid&&isValidDot&&isValidAt&&onlyOneAtSymbol == true){
			var valid = true
		} else {
			var valid = false
		};
		return valid
	};
	var isEmailValid = formatValidity();
	return isEmailValid
};

//Part 6
//Array
//Find the smallest value in an array that is greater than a given number

var arraySearch = function(array,number){ //where array is an array of numbers and number is the value to search for
	var localArray = array; //renaming simply for my own organizational purposes
	var largestNumber = function(){
		var i = 0;
		var countInArray = localArray.length;
		while (i <= countInArray) {
			if (number < (localArray[i])) {
				var numberIsLargest = false;
				break
			} else { 
				var numberIsLargest = true;
			};
			i++
		};
		return numberIsLargest
	};
	var isLargestNumber = largestNumber();
	var numberLocation = function(){
		if (isLargestNumber == false){
			var i = (number + 1);
			while (i > number) {
				var finder = localArray.indexOf(i);
				var findNumber = function(){
					if (finder != -1){
						var existsInArray = true
					} else {
						var existsInArray = false
					};
					return existsInArray
				};
				var doesNumberExist = findNumber();
				if (doesNumberExist == true){
					break
				};
				i++
			};
		} else {
			var finder = -1
		};
	return finder
	};
	var whereIsNumber = numberLocation();
	if (whereIsNumber == -1){
		var number = "The selected number is larger than any number in the array.";
	} else {
		var number = localArray[whereIsNumber];
	};
	return number
};

	return {
		"formatNumber" : formatNumber,
		"isStringPhoneNumber": isStringPhoneNumber,
		"convertToNumber" : convertToNumber,
		"stringToCap" : stringToCap,
		"isValidEmail" : isValidEmail,
		"arraySearch" : arraySearch
		};
};