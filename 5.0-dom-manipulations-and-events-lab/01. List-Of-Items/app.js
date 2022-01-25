function addItem() {
    const newItemText = document.getElementById('newItemText');
    const itemsList = document.getElementById('items');

    if (newItemText.value != '') {
        const liElement = document.createElement('li');
        liElement.textContent = newItemText.value;

        itemsList.appendChild(liElement);

        newItemText.value = '';
    }
}
