
;(function(){
	"use strict";

if(false) {
	var a = 6,
		b = 10,
		result;

	/*if (a + b < 4) {
		result = 'Мало';
	} else {
		result = 'Много';
	}*/
	
	result = (a + b < 4) ? 'Мало' : 'Много';

	document.write(result);
}

if(false) {
	var numberA, numberB;

	//= +prompt('Enter first number:'),
	//= +prompt('Enter second number:');

	do {
		numberA = +prompt('Enter first number:');
	} while (Number.isNaN(numberA));

	
	do {
		numberB = +prompt('Enter second number:');
	} while (Number.isNaN(numberB));

	/*if (numberA > numberB){
		document.write(numberA);
	}
	else if (numberA < numberB) {
		document.write(numberB);
	} else {
		document.write(numberA + ' ' + numberB);
	}*/

	//numberA > numberB ? document.write(numberA) : document.write(numberB);

	switch (true) {
		case (numberA > numberB):
			document.write(numberA);
			break;
		case (numberA < numberB):
			document.write(numberB);
			break;
		default:
			document.write(numberA + ' ' + numberB);
			break;
	}
}

if(false) {
	var answer = prompt('Каково «официальное» название JavaScript?');
	if (answer && answer.toLowerCase() == 'ECMAScript'.toLowerCase()){
		alert ('Верно!');
		}
	else {
		alert ('Не знаете? «ECMAScript»!');
		}
}



if (false) {
	//сумма чисел кот. ввел пользователь
	var numberA, numberB;

	//= +prompt('Enter first number:'),
	//= +prompt('Enter second number:');

	do {
		numberA = +prompt('Enter first number:');
	} while (Number.isNaN(numberA));

	
	do {
		numberB = +prompt('Enter second number:');
	} while (Number.isNaN(numberB));

	document.write(numberA + numberB);

}

for (var i = 10; i >= 0; i--) {
	document.write(i);
	document.write('<br>');
}



})();