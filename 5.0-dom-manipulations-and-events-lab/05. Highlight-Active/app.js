function focused() {
    const fields = Array.from(document.querySelectorAll('input'));

    fields.forEach((field) => {
        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', onBlur);
    });

    function onFocus(event) {
        let parentElement = event.target.parentNode;
        parentElement.classList.add('focused');
    }

    function onBlur(event) {
        let parentElement = event.target.parentNode;
        parentElement.classList.remove('focused');
    }
}
