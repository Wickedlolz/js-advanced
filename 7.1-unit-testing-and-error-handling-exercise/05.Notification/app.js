function notify(message) {
    const notifyDiv = document.querySelector('#notification');
    notifyDiv.style.display = 'block';
    notifyDiv.textContent = message;

    notifyDiv.addEventListener('click', () => {
        notifyDiv.style.display = 'none';
    });
}
