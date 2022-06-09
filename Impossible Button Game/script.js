const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', function () {
	//Determine random offset value from the browser window's height and width
	const height = Math.floor(Math.random() * window.innerHeight);
	const width = Math.floor(Math.random() * window.innerWidth);
	//Move the button using the random value
	btn.style.left = `${width}px`;
	btn.style.top = `${height}px`;
});

btn.addEventListener('click', function () {
	btn.innerText = 'You got me!';
	document.body.style.backgroundColor = 'green';
});
