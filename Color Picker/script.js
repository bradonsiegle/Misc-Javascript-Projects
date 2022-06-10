const colors = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'indigo',
	'violet'
];
const userColor = document.querySelector('p');

const printColor = function () {
	const color = this.style.backgroundColor;
	userColor.innerHTML = `The color is <b>${color}</b>!`;
	userColor.style.color = color;
};
const container = document.querySelector('#boxes');

for (let color of colors) {
	const box = document.createElement('div');
	box.style.backgroundColor = color;
	box.classList.add('box');
	container.append(box);
	box.addEventListener('click', printColor);
}
