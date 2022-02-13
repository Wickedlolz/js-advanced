window.addEventListener('load', solution);

function solution() {
    const fields = {
        fname: document.getElementById('fname'),
        email: document.getElementById('email'),
        phone: document.getElementById('phone'),
        address: document.getElementById('address'),
        code: document.getElementById('code'),
    };

    const rootElement = document.getElementById('block');
    const infoPreview = document.getElementById('infoPreview');
    const submitBtn = document.getElementById('submitBTN');
    submitBtn.addEventListener('click', onSubmitClick);

    const editBtn = document.getElementById('editBTN');
    const continueBtn = document.getElementById('continueBTN');

    function onSubmitClick(event) {
        event.preventDefault();

        if (
            fields.fname.value == '' ||
            fields.email.value == '' ||
            fields.phone.value == '' ||
            fields.address.value == '' ||
            fields.code.value == ''
        ) {
            return;
        }

        const fnameLi = e('li', {}, `Full Name: ${fields.fname.value}`);
        const emailLi = e('li', {}, `Email: ${fields.email.value}`);
        const phoneLi = e('li', {}, `Phone Number: ${fields.phone.value}`);
        const adressLi = e('li', {}, `Address: ${fields.address.value}`);
        const postalCodeLi = e('li', {}, `Postal Code: ${fields.code.value}`);

        infoPreview.appendChild(fnameLi);
        infoPreview.appendChild(emailLi);
        infoPreview.appendChild(phoneLi);
        infoPreview.appendChild(adressLi);
        infoPreview.appendChild(postalCodeLi);

        Object.values(fields).forEach((f) => (f.value = ''));
        submitBtn.setAttribute('disabled', true);

        editBtn.removeAttribute('disabled');
        continueBtn.removeAttribute('disabled');

        editBtn.addEventListener(
            'click',
            onEditClick.bind(
                null,
                fnameLi,
                emailLi,
                phoneLi,
                adressLi,
                postalCodeLi
            )
        );
        continueBtn.addEventListener('click', onContinueClick);
    }

    function onEditClick(fnameLi, emailLi, phoneLi, adressLi, postalCodeLi) {
        let name = fnameLi.textContent.split(': ')[1];
        let email = emailLi.textContent.split(': ')[1];
        let phone = Number(phoneLi.textContent.split(': ')[1]);
        let adress = adressLi.textContent.split(': ')[1];
        let postalCode = Number(postalCodeLi.textContent.split(': ')[1]);

        fields.fname.value = name;
        fields.email.value = email;
        fields.phone.value = phone;
        fields.address.value = adress;
        fields.code.value = postalCode;

        editBtn.setAttribute('disabled', true);
        continueBtn.setAttribute('disabled', true);

        submitBtn.removeAttribute('disabled');

        infoPreview.innerHTML = '';
    }

    function onContinueClick() {
        rootElement.innerHTML = '';
        rootElement.appendChild(e('h3', {}, 'Thank you for your reservation!'));
    }

    function e(type, attr, ...content) {
        let element = document.createElement(type);

        for (let prop in attr) {
            element[prop] = attr[prop];
        }

        for (let entry of content) {
            if (typeof entry == 'string' || typeof entry == 'number') {
                entry = document.createTextNode(entry);
            }

            element.appendChild(entry);
        }

        return element;
    }
}
