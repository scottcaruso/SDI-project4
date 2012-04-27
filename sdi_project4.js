var lib = scottLib(); 
var yourNumber = 1; //number
var yourPhone = "1-54663"; //string
var yourNumberConversion = "1.36 miles per hour"; //string
var yourStringToCapitalize = "my string to capitalize"; //string
var yourEmailToVerify = "scott@gmail.com"; //string
var yourArray = [1,2,3,4,5,6,7,8,9,10]; //array
var yourNumberForArray = 5; //number

//Verifications of first function - numbers to decimal places.
console.log("The following logs demonstrate formatting a number in the manner of currency.");
console.log("The number 14 becomes: " + (lib.formatNumber(14)));
console.log("The number 14.2 becomes: " + (lib.formatNumber(14.2)));
console.log("The number 14.25463 becomes: " + (lib.formatNumber(14.26563)));
console.log("The variable you entered \- " + yourNumber + " \- becomes " + (lib.formatNumber(yourNumber)));

//Verifications of second function - is it a valid phone number?
console.log("The following logs demonstrate that the code recognizes valid phone numbers.");
console.log("The string \"203\-867\-5309\" returns as: " + (lib.isStringPhoneNumber("203-867-5309")));
console.log("The string \"36753\-09\" returns as: " + (lib.isStringPhoneNumber("36753-09")));
console.log("The phone number you entered \- " + yourPhone + " \- returns as\: " + (lib.isStringPhoneNumber(yourPhone)));

//Verifications of third function - converting a number from a string
console.log("The following logs demonstrate that the code parses numbers from strings.");
console.log("The string \"3.75 pounds\" returns as: " + (lib.convertToNumber("3.75 pounds")));
console.log("The string you entered \- " + yourNumberConversion + " \- returns as\: " + (lib.convertToNumber(yourNumberConversion)));

//Verifications of fourth function - capitalizing an entire string
console.log("The following logs demonstrate that the code can capitalize all words in a string.");
console.log("The string \"let's turn this into a capitalized string\" returns as: " + (lib.stringToCap("let's turn this into a capitalized string")));
console.log("The string you entered \- " + yourStringToCapitalize + " \- returns as\: " + (lib.stringToCap(yourStringToCapitalize)));

//Verifications of fifth function - verifying if an email address is valid
console.log("The following logs demonstrate that the code can verify the validity of an email address.");
console.log("The string \"scottcaruso@fullsail.edu\" returns as: " + (lib.isValidEmail("scottcaruso@fullsail.edu")));
console.log("The string \"sc@ttcaruso@fullsail.edu\" returns as: " + (lib.isValidEmail("sc@ttcaruso@fullsail.edu")));
console.log("The string \"scottcaruso@fullsail.exr\" returns as: " + (lib.isValidEmail("scottcaruso@fullsail.exr")));
console.log("The string \"scottcaruso.fullsail@edu\" returns as: " + (lib.isValidEmail("scottcaruso.fullsail@edu")));
console.log("The string you entered \- " + yourEmailToVerify + " \- returns as\: " + (lib.isValidEmail(yourEmailToVerify)));

//Verifications of sixth function - finding the smallest number in array that is larger than a given number
console.log("The following logs demonstrate that the code can find the smallest number in an array that is larger than a given number.");
console.log("The number 8 and the array \[6,15,12,3,154\] returns as:  " + (lib.arraySearch([6,15,12,3,154],8)));
console.log("The number 155 and the array \[6,15,12,3,154\] returns as:  " + (lib.arraySearch([6,15,12,3,154],155)));
console.log("The number you entered \- " + yourNumberForArray + " and the array you entered \- " + yourArray + " \- returns as\: " + (lib.arraySearch(yourArray,yourNumberForArray)));