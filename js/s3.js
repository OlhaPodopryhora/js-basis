(function(){
	"use strict";

	function ucFirst(str) {
		let firstLetter = str.charAt(0);
		return firstLetter.toUpperCase() + str.substring(1);

		/*function ucFirst(str) {
		return str.charAt(0).toUpperCase() + str.substring(1);}*/

	}
	document.write(ucFirst('kate'));
	document.write(ucFirst(''));

	
	var num, 
		isNotNumber = true,
		isNotCond = true;

	do {
		num = prompt('Enter number more than 100:');

		isNotNumber = BooLean(num) && Number.isNaN(+num);
		isNotCond = BooLean(num) && (num < 100);

	} while(isNotNumber || (BooLean(num) && (num < 100)));

})();