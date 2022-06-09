const btn = document.querySelector('.btn'),
	result = document.querySelector('.result'),
	vowels = [ 'A', 'E', 'I', 'O', 'U' ];

btn.addEventListener('click', count);

function count () {
	//Sanitize user input
	const word = document
		.querySelector('input')
		.value.toUpperCase()
		.replaceAll(' ', '');

	let vowelCount = 0;

	//Check for empty input
	if (word === '') {
		result.style.color = 'red';
		result.innerHTML = 'Please enter a word.';
	}
	else {
		//Spread the string and check each letters against the vowels array
		[ ...word ].forEach((c) => {
			if (vowels.includes(c)) {
				vowelCount++;
			}
		});
	}
	//Display the result
	result.innerHTML = `${word} contains ${vowelCount} vowels`;
}
