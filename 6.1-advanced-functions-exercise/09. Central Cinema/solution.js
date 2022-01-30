function solve() {
    const onScreenBtn = document.querySelector('#add-new #container button');
    onScreenBtn.addEventListener('click', onScreenAdd);
    const clearBtn = document.querySelector('#archive button');
    clearBtn.addEventListener('click', onClear);

    function onScreenAdd(event) {
        event.preventDefault();
        const title = event.target.parentElement.children[0];
        const hall = event.target.parentElement.children[1];
        const ticketPrice = event.target.parentElement.children[2];

        const typeOfInput = isNaN(
            Number(event.target.parentElement.children[2].value)
        );

        if (
            title.value != '' &&
            hall.value != '' &&
            typeOfInput == false &&
            ticketPrice.value != 0
        ) {
            const li = document.createElement('li');

            const spanTitleElement = document.createElement('span');
            spanTitleElement.textContent = title.value;

            const strongTagHallElement = document.createElement('strong');
            strongTagHallElement.textContent = `Hall: ${hall.value}`;

            const divElement = document.createElement('div');

            const strongTagPrice = document.createElement('strong');
            strongTagPrice.textContent = Number(ticketPrice.value).toFixed(2);

            const inputTicketsSoldElement = document.createElement('input');
            inputTicketsSoldElement.placeholder = 'Tickets Sold';

            const archiveBtn = document.createElement('button');
            archiveBtn.textContent = 'Archive';
            archiveBtn.addEventListener('click', onArchive);

            divElement.appendChild(strongTagPrice);
            divElement.appendChild(inputTicketsSoldElement);
            divElement.appendChild(archiveBtn);

            li.appendChild(spanTitleElement);
            li.appendChild(strongTagHallElement);
            li.appendChild(divElement);

            document.querySelector('#movies ul').appendChild(li);

            title.value = '';
            hall.value = '';
            ticketPrice.value = '';
        }
    }

    function onArchive(event) {
        const typeOfInput = isNaN(
            Number(event.target.parentElement.children[1].value)
        );

        if (
            event.target.parentElement.children[1].value != '' &&
            typeOfInput == false
        ) {
            const price = Number(
                event.target.parentElement.children[0].textContent
            );
            const tickets = Number(
                event.target.parentElement.children[1].value
            );
            const totalPrice = price * tickets;
            const movieTitle =
                event.target.parentElement.parentElement.children[0]
                    .textContent;

            const liElement = document.createElement('li');

            const spanTagTitle = document.createElement('span');
            spanTagTitle.textContent = movieTitle;

            const strongTagTotalAmount = document.createElement('strong');
            strongTagTotalAmount.textContent = `Total amount: ${totalPrice.toFixed(
                2
            )}`;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', onDelete);

            liElement.appendChild(spanTagTitle);
            liElement.appendChild(strongTagTotalAmount);
            liElement.appendChild(deleteBtn);

            document.querySelector('#archive ul').appendChild(liElement);

            event.target.parentElement.parentElement.remove();
        }
    }

    function onDelete(event) {
        event.target.parentElement.remove();
    }

    function onClear(event) {
        event.target.parentElement.children[1].textContent = '';
    }
}
