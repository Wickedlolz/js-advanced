function addItem() {
    const newItemText = document.getElementById('newItemText');
    const itemsList = document.getElementById('items');

    if (newItemText.value != '') {
        const liElement = document.createElement('li');
        liElement.textContent = newItemText.value;
        const deleteBtn = document.createElement('a');
        deleteBtn.setAttribute('href', '#');
        deleteBtn.textContent = '[Delete]';

        deleteBtn.addEventListener('click', onDelete);

        liElement.appendChild(deleteBtn);
        itemsList.appendChild(liElement);

        newItemText.value = '';
    }

    function onDelete(event) {
        let parentElement = event.target.parentNode;
        parentElement.remove();
    }
}
