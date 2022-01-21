function colorize() {
    const table = document.querySelector('table tbody').children;

    let arrayTable = Array.from(table);
    for (let i = 0; i < arrayTable.length; i++) {
        if (i % 2 == 1) {
            arrayTable[i].style.backgroundColor = 'teal';
        }
    }
}
