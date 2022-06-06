const btn = document.querySelector('.btn'),
	result = document.querySelector('.result');

btn.addEventListener('click', palindrome);

function palindrome () {
	//Sanitize user input
	const word = document
		.querySelector('input')
		.value.toUpperCase()
		.replaceAll(' ', '');

	//Check for empty input
	if (word === '') {
		result.style.color = 'red';
		result.innerHTML = 'Please enter a word.';
	}
	else if (word === word.split('').reverse().join('')) {
		//Check for palindrome
		result.style.color = 'green';
		result.innerHTML = `${word} is a palindrome!`;
	}
	else {
		result.style.color = 'red';
		result.innerHTML = `${word} is not a palindrome!`;
	}
}
