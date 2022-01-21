function sumTable() {
    const sumElement = document.getElementById('sum');
    let elements = document.querySelectorAll('table tbody tr');

    let sum = 0;
    for (let i = 1; i < elements.length - 1; i++) {
        sum += Number(elements[i].children[1].textContent);
    }

    sumElement.textContent = sum;
}
