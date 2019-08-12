(function(){
	'use strict';

	let marks = [6,9,3,8,12,7,8];

	/*marks.forEach(function(mark){
		document.write(mark);
		document.write('<br>');
	})*/

	let sum = 0;

	marks.forEach(function(mark){
		sum += mark;
	});

	document.write(sum);
	document.write('<br>');
	document.write((sum / marks.length).toFixed(2));

	let max = marks[0],
		min = marks[0];

	marks.forEach(function(mark){
		/*if (max < mark) {
			max = mark;
		}*/
		max = max < mark ? mark : max;

		/*if (min > mark) {
			min = mark;
		}*/
		min = min > mark ? mark : min;
	})

	document.write('<br>');
	document.write(max - min);

	marks.forEach(function(mark){
		if (mark % 2) {
			document.write('<br>');
			document.write(mark);
		};
	});

	marks.forEach(function(mark){
		if (!(mark % 2)) {
			document.write('<br>');
			document.write(mark);
		};
	});


	let prices = [34.50, 78.15, 12.70],
		discount = 10,
		discountLimit = 20.00;

	prices.forEach(function(price){
		//let newPrice = (price - (discount * price) / 100).toFixed(2);
		let newPrice = price;
		if (price >= discountLimit){
			newPrice = ((1 - discount / 100) * price).toFixed(2);
		}
		document.write('<br>');
		document.write(price + ' - ' + newPrice);
	});

})();