function search() {
    const result = document.getElementById('result');
    const ulTowns = document.getElementById('towns');
    const searchText = document.getElementById('searchText');
    let counter = 0;

    Array.from(ulTowns.children).forEach((town) => {
        town.style.fontWeight = 'normal';
        town.style.textDecoration = 'none';
    });

    Array.from(ulTowns.children).forEach((town) => {
        if (town.textContent.includes(searchText.value)) {
            counter++;
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
        }
    });

    result.textContent = `${counter} matches found`;
}
