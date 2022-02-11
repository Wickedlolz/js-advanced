window.addEventListener('load', solve);

function solve() {
    const furnitureFields = {
        model: document.getElementById('model'),
        year: document.getElementById('year'),
        description: document.getElementById('description'),
        price: document.getElementById('price'),
    };

    const furnitureList = document.getElementById('furniture-list');
    const totalPrice = document.querySelector('.total-price');
    document.getElementById('add').addEventListener('click', onAdd);

    function onAdd(event) {
        event.preventDefault();

        if (
            furnitureFields.model.value.trim() == '' ||
            furnitureFields.year.value.trim() == '' ||
            furnitureFields.description.value.trim() == '' ||
            furnitureFields.price.value.trim() == '' ||
            Number(furnitureFields.year.value.trim()) < 0 ||
            Number(furnitureFields.price.value.trim()) < 0
        ) {
            return;
        }

        const moreBtn = e('button', { className: 'moreBtn' }, 'More Info');
        const buyBtn = e('button', { className: 'buyBtn' }, 'Buy it');

        const furnitureItem = e(
            'tr',
            { className: 'info' },
            '',
            e('td', {}, furnitureFields.model.value),
            e('td', {}, Number(furnitureFields.price.value).toFixed(2)),
            e('td', {}, moreBtn, buyBtn)
        );

        const furnitureDescription = e(
            'tr',
            { className: 'hide' },
            '',
            e('td', {}, 'Year: ' + furnitureFields.year.value),
            e(
                'td',
                { colSpan: '3' },
                'Description: ' + furnitureFields.description.value
            )
        );

        moreBtn.addEventListener(
            'click',
            onMore.bind(null, furnitureDescription, moreBtn)
        );

        buyBtn.addEventListener(
            'click',
            onBuy.bind(null, furnitureItem, furnitureDescription)
        );

        furnitureList.appendChild(furnitureItem);
        furnitureList.appendChild(furnitureDescription);

        furnitureFields.model.value = '';
        furnitureFields.year.value = '';
        furnitureFields.description.value = '';
        furnitureFields.price.value = '';
    }

    function onMore(furnitureDescription, moreBtn) {
        if (furnitureDescription.style.display == 'contents') {
            furnitureDescription.style.display = 'none';
            moreBtn.textContent = 'More Info';
        } else {
            furnitureDescription.style.display = 'contents';
            moreBtn.textContent = 'Less Info';
        }
    }

    function onBuy(furnitureItem, furnitureDescription) {
        const price = Number(furnitureItem.children[1].textContent);
        let currentTotalPrice = Number(totalPrice.textContent);
        totalPrice.textContent = (currentTotalPrice + price).toFixed(2);

        furnitureItem.remove();
        furnitureDescription.remove();
    }

    function e(type, attr, ...content) {
        let element = document.createElement(type);

        for (let prop in attr) {
            element[prop] = attr[prop];
        }

        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }

            element.appendChild(item);
        }

        return element;
    }
}
