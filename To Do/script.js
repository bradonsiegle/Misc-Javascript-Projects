const addItemInput = document.querySelector('#addItem');
const itemsUl = document.querySelector('#items');

addItemInput.addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		if (!this.value) return;
		//Add new item to list
		const newItemText = this.value;
		const newItem = document.createElement('li');
		newItem.innerText = newItemText;
		itemsUl.append(newItem);
		this.value = '';
	}
});
