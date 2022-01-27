function solve() {
    document.querySelector('#exercise').addEventListener('click', onClick);

    function onClick(event) {
        if (
            event.target.tagName == 'BUTTON' &&
            event.target.textContent == 'Generate'
        ) {
            const inputTxt =
                event.target.parentElement.querySelector('textarea');

            let parsedJsonInput = JSON.parse(inputTxt.value);

            parsedJsonInput.forEach((object) => {
                const tr = document.createElement('tr');
                const tdImg = document.createElement('td');
                const tdName = document.createElement('td');
                const tdPrice = document.createElement('td');
                const tdDecFactor = document.createElement('td');
                const tdCheckbox = document.createElement('td');

                const image = document.createElement('img');
                image.setAttribute('src', object.img);
                tdImg.appendChild(image);

                const paragraphName = document.createElement('p');
                paragraphName.textContent = object.name;
                tdName.appendChild(paragraphName);

                const paragraphPrice = document.createElement('p');
                paragraphPrice.textContent = object.price;
                tdPrice.appendChild(paragraphPrice);

                const paragraphDecFactor = document.createElement('p');
                paragraphDecFactor.textContent = object.decFactor;
                tdDecFactor.appendChild(paragraphDecFactor);

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                tdCheckbox.appendChild(checkbox);

                tr.appendChild(tdImg);
                tr.appendChild(tdName);
                tr.appendChild(tdPrice);
                tr.appendChild(tdDecFactor);
                tr.appendChild(tdCheckbox);

                document.querySelector('.table tbody').appendChild(tr);
            });
        }

        if (
            event.target.tagName == 'BUTTON' &&
            event.target.textContent == 'Buy'
        ) {
            const rows = Array.from(
                document.querySelectorAll('.table tbody tr')
            );
            let products = [];
            let prices = [];
            let decFactors = [];

            rows.forEach((tableRow) => {
                const isChecked = tableRow.lastElementChild.children[0].checked;

                if (isChecked) {
                    const tableData = tableRow.children;

                    let stringData = '';
                    for (let i = 1; i < tableData.length - 1; i++) {
                        const currentElement = tableData[i];
                        const currentElementData = currentElement.children[0];
                        stringData += currentElementData.textContent + ' ';
                    }

                    let [name, price, decFactor] = stringData.split(' ');
                    price = Number(price);
                    decFactor = Number(decFactor);

                    products.push(name);
                    prices.push(price);
                    decFactors.push(decFactor);
                }
            });

            let totalPrice = prices.reduce((a, b) => a + b);
            let decFactorSum = decFactors.reduce((a, b) => a + b);
            let avgDecFactor = decFactorSum / decFactors.length;
            document.querySelectorAll(
                'textarea'
            )[1].value = `Bought furniture: ${products.join(
                ', '
            )}\nTotal price: ${totalPrice.toFixed(
                2
            )}\nAverage decoration factor: ${avgDecFactor}`;
        }
    }
}
