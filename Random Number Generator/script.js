const number = document.querySelector('.num');
const btn = document.querySelector('.generate');

const generateNumber = () => {
	//Generate number between 1 and 100
	const randomNum = Math.floor(Math.random() * 100 + 1);
	number.innerHTML = randomNum;
};

btn.addEventListener('click', generateNumber);
