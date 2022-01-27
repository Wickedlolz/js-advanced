function lockedProfile() {
    document.querySelector('#main').addEventListener('click', onClick);

    function onClick(event) {
        if (
            event.target.tagName == 'BUTTON' &&
            event.target.textContent == 'Show more'
        ) {
            const isUnlocked = event.target.parentElement.querySelectorAll(
                "input[type='radio']"
            )[1];

            if (isUnlocked.checked) {
                const hiddenDiv =
                    event.target.parentElement.querySelector('div');

                hiddenDiv.style.display = 'block';
                event.target.textContent = 'Hide it';
            }
        } else if (
            event.target.tagName == 'BUTTON' &&
            event.target.textContent == 'Hide it'
        ) {
            const isUnlocked = event.target.parentElement.querySelectorAll(
                "input[type='radio']"
            )[1];

            if (isUnlocked.checked) {
                const hiddenDiv =
                    event.target.parentElement.querySelector('div');
                hiddenDiv.style.display = 'none';
                event.target.textContent = 'Show more';
            }
        }
    }
}
