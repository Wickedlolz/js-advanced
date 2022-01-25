function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMouseMove);

    function onMouseMove(event) {
        let box = event.target;
        let offset = Math.floor((event.offsetX / box.clientWidth) * 100);
        document.getElementById('result').textContent = `${offset}%`;
    }
}
