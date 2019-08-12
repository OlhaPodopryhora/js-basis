;(function(){
	"use strict";

	/*var planet = 'Earth',
		user = 'P';

	var userName = prompt("Hi! What is your name?", "Name");
	alert( "Glad to see you here," + userName + "!");

	//alert(prompt("Hi! What is your name?"));*/

	//let a = Math.round(Math.random() * (6 -1)) + 1;
	


				//им игральных костей
	

	document.write(genRand(1, 6) + ' : ' + genRand(1, 6));
	document.write('<br>');

	function genRand(min, max){
		return Math.round(Math.random() * (max - min)) + min;
	}


				//им орел-решка
	
	document.write(genRand(0, 1));
	document.write('<br>');

	if (genRand(0, 1)) {
		document.write('reshka');
	} else {
		document.write('orel');
	}

	document.write('<br>')

	genRand(0, 1) ? document.write('reshka') : document.write('orel');
	document.write('<br>')

	document.write( genRand(0, 1) ? 'reshka' : 'orel');
	document.write('<br>')

				//случ число от 1 до числа пользователя
	var userMin, userMax;

	do {
		userMin = +prompt('Enter number:');
	} while(Number.isNaN(userMin));

	do {
		userMax = +prompt('Enter second number:');
	} while(Number.isNaN(userMax));

	document.write(genRand(userMin, userMax));
	document.write('<br>')




})();