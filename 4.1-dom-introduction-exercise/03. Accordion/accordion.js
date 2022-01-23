function toggle() {
    const btn = document.querySelector('.head span');
    const hiddenElement = document.getElementById('extra');

    if (btn.textContent == 'More') {
        btn.textContent = 'Less';
        hiddenElement.style.display = 'block';
    } else {
        btn.textContent = 'More';
        hiddenElement.style.display = 'none';
    }
}
