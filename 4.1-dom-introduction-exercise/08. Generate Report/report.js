function generateReport() {
    document.querySelector('#output').value = '';
    const theadElements = Array.from(
        document.querySelectorAll('table thead tr th')
    );
    const tbodyElements = Array.from(
        document.querySelectorAll('table tbody tr')
    );

    let result = [];
    let isCheckedElements = [];

    for (let i = 0; i < theadElements.length; i++) {
        let isChecked = theadElements[i].querySelector('input').checked;

        if (isChecked) {
            isCheckedElements.push({ element: theadElements[i], index: i });
        }
    }

    for (let i = 0; i < tbodyElements.length; i++) {
        let element = {};
        for (let j = 0; j < isCheckedElements.length; j++) {
            let propName = isCheckedElements[j].element.textContent
                .trim()
                .toLocaleLowerCase();
            element[propName] =
                tbodyElements[i].children[
                    isCheckedElements[j].index
                ].textContent;
        }

        result.push(element);
    }

    document.querySelector('#output').value = JSON.stringify(result);
}
