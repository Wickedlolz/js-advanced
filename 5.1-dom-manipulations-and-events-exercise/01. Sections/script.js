function create(words) {
    const contentElement = document.getElementById('content');
    words.forEach((word) => {
        const divElement = document.createElement('div');
        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = word;
        paragraphElement.style.display = 'none';

        divElement.appendChild(paragraphElement);

        divElement.addEventListener('click', onClick);
        contentElement.appendChild(divElement);
    });

    function onClick(event) {
        const paragraphElement = event.currentTarget.children[0];
        if (paragraphElement.style.display == 'none') {
            paragraphElement.style.display = 'block';
        } else {
            paragraphElement.style.display = 'none';
        }
    }
}
