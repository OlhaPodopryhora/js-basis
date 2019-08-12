(function(){
	'use strict';

	let students = [
		'Maxim Shevchenko',
        'Andrey Rubtsov',
        'Denys Vasyliev',
        'Valeriya Kolomiiets',
        'Molchanova Tatyana',
        'Посух Дарья',
        //'Ольга Подопригора'
        'Olha'
	];

	let workers = [
		'Kate Kharchenko',
		'Ivan Ivanov'
	];

	let groups = [
        ['Maxim Shevchenko', 'Andrey Rubtsov'],
        ['Denys Vasyliev', 'Valeriya Kolomiiets'],
        ['Tatyana Molchanova', 'Посух Дарья', 'Ольга Подопригора']
    ];

    groups.forEach(function(group, index){
    	document.write(`<h2>Group # ${++index}</h2>`);
    	document.write(`<ul class="some-class">`);
    	group.forEach(function(person){
    		document.write(`<li>${person}</li>`);
    	});
    	document.write(`*</ul>`);
    });

	document.write('<ul>');

	for (var i = 0; i < students.length; i++) {
		document.write(`<li>${students[i]}</li>`); // ${}
	}
	document.write('</ul>');

	/*document.write('<ul>');
	document.write('<li>' + students[0] + '</li>');
	document.write(`<li>${students[1]}</li>`); // ${}
	document.write('</ul>');*/

	document.write('<ul>');
	students.forEach(function(student, index){
		document.write(`<li>${++index} ${student}</li>`);
	});
		
	document.write('</ul>');

	document.write('<ul>');
	students.forEach(function(student){
		document.write(`<li>${student.split(' ')[0]}</li>`);
	});
		
	document.write('</ul>');


	document.write(`<em>${students.join(', ')}</em>`);
	document.write('<br>');
	document.write(`<em>${students.join(', ')}</em>`);
///////////////////

	let people = students.concat(workers);
	delete students[4];

	document.write('<ul>');
	students.concat(workers).forEach(function(student, index){
		let parts = student.split(' ');
		document.write(`<li>
			<b>${++index}</b>
			<em>${parts[0] ? parts[0] : ''}</em>
			<em><b>${parts[1] ? parts[1] : ''}</b></em>
			</li>`);
	});
		
	document.write('</ul>');


	document.write(`<b>${students.join(' * ')}</b>`);
	document.write('<br>');
	document.write(`<b>${students.join(', ')}</b>`);
	document.write('<br>');
	/*document.write(`<b>${students.inexOf('Valeriya Kolomiiets')}</b>`);
	document.write('<br>');
	document.write(`<b>${students.inexOf('Petro')}</b>`);*/


	////////////////////////
})();