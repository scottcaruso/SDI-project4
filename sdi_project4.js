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
//var daysBetween = function(earlierDate,laterDate){Something happens here to turn this into usable data.};

	return {
		"formatNumber" : formatNumber,
		"daysBetween": []
		};
};

var lib = scottLib(); 
console.log(lib.formatNumber(14));