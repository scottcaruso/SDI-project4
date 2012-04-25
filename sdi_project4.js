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
//Number
//Find the number of hours or days difference between two dates.
var isStringPhoneNumber = function(number){
	var string = new String (number);
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

	return {
		"formatNumber" : formatNumber,
		"isStringPhoneNumber": isStringPhoneNumber
		};
};

var lib = scottLib(); 
console.log(lib.formatNumber(14));
console.log(lib.isStringPhoneNumber("203-867-5309"));