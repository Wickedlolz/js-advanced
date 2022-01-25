function validate() {
    const email = document.getElementById('email');
    email.addEventListener('change', onChange);

    function onChange(event) {
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (pattern.test(email.value)) {
            event.target.classList.remove('error');
        } else {
            event.target.classList.add('error');
        }
    }
}
