(function(){
	'use strict';

	let data = [
		{
			text : 'У нас есть массив var lottery = [ 1, 44, 32, 55, 12, 17]; Какой код выведет число “1”?',
			variants : [
				'a. console.log( lottery )',
				'b. console.log( lottery[1] )',
				'c. console.log( lottery(0) )',
				'd. console.log( lottery[0] )',
				'e. все перечисленные'
			],
			right : 'd',
			weight : 3
		},
		{
			text : 'Как добавить число 23 в начало массива ages?',
			variants : [
				'a. ages.pop(23)',
				'b. ages.unshift(23)',
				'c. ages.shift(23)',
				'd. ages.push(23)'
			],
			right : 'b',
			weight : 5
		},
		{
			text : 'Можно ли добавлять несколько значений в массив командой push(). напр scores.push( 77, 76, 89 );?',
			variants : [
				'a. да',
				'b. нет'
			],
			right : 'a',
			weight : 2
		}
	];

	let total = 0,
		rightAnswers = [],
		wrongAnswers = [];

	data.forEach(function(question, index){
		let answer = prompt(question.text + '\n' + question.variants.join('\n')); 

		if (answer == question.right) {
			total += question.weight;
			rightAnswers.push(index);

		} else {
			total -= question.weight;
			wrongAnswers.push(index);
		}

	});
	alert(`You got ${total} points!`);

	/*document.write('<h2>Right Answers:</h2>');
	document.write('<ul>');

	data.forEach(function(question, index){
		if (rightAnswers.indexOf(index) != -1) {
			document.write(`<li>${question.text}</li>`);
		}
	})
	document.write('</ul>');*/

	/*document.write('<h2>Wrong Answers:</h2>');
	document.write('<ul>');

	data.forEach(function(question, index){
		if (wrongAnswers.indexOf(index) != -1) {
			document.write(`<li>${question.text}</li>`);
		}
	})
	document.write('</ul>');*/

	showResult('Right', rightAnswers);
	showResult('Wrong', wrongAnswers);


////////////////////////////////////////////////////////////////////
	function showResult(title, list) {
		document.write(`<h2>${title} Answers:</h2>`);
		document.write('<ul>');

		data.forEach(function(question, index){
		if (list.indexOf(index) != -1) {
			document.write(`<li>${question.text}</li>`);
		}
	})
	document.write('</ul>');
	}

})();