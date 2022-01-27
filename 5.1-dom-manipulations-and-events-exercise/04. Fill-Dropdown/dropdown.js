function addItem() {
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');

    if (newItemText.value != '' && newItemValue.value != '') {
        const optionElement = document.createElement('option');
        optionElement.value = newItemValue.value;
        optionElement.textContent = newItemText.value;

        menu.appendChild(optionElement);

        newItemText.value = '';
        newItemValue.value = '';
    }
}
