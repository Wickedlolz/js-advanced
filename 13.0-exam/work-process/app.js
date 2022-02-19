function solve() {
    const fields = {
        fname: document.getElementById('fname'),
        lname: document.getElementById('lname'),
        email: document.getElementById('email'),
        birth: document.getElementById('birth'),
        position: document.getElementById('position'),
        salary: document.getElementById('salary'),
    };

    const sumSpan = document.getElementById('sum');
    const tbodyContainer = document.getElementById('tbody');
    const addBtn = document.getElementById('add-worker');
    addBtn.addEventListener('click', onAddHandler);

    function onAddHandler(event) {
        event.preventDefault();

        if (
            fields.fname.value == '' ||
            fields.lname.value == '' ||
            fields.email.value == '' ||
            fields.birth.value == '' ||
            fields.position.value == '' ||
            fields.salary.value == ''
        ) {
            return;
        }

        const firedBtn = e('button', { className: 'fired' }, 'Fired');
        const editBtn = e('button', { className: 'edit' }, 'Edit');

        const trElement = e(
            'tr',
            {},
            e('td', {}, fields.fname.value),
            e('td', {}, fields.lname.value),
            e('td', {}, fields.email.value),
            e('td', {}, fields.birth.value),
            e('td', {}, fields.position.value),
            e('td', {}, Number(fields.salary.value)),
            e('td', {}, firedBtn, editBtn)
        );

        tbodyContainer.appendChild(trElement);
        editBtn.addEventListener('click', onEditHandler.bind(null, trElement));
        firedBtn.addEventListener(
            'click',
            onFiredHandler.bind(null, trElement)
        );

        let currentSalary = Number(sumSpan.textContent);
        currentSalary += Number(fields.salary.value);

        sumSpan.textContent = currentSalary.toFixed(2);

        Object.values(fields).forEach((f) => (f.value = ''));
    }

    function onEditHandler(trElement) {
        const fullName = trElement.children[0].textContent;
        const lastName = trElement.children[1].textContent;
        const currEmail = trElement.children[2].textContent;
        const currBirthday = trElement.children[3].textContent;
        const currPosition = trElement.children[4].textContent;
        const currSalary = Number(trElement.children[5].textContent);

        fields.fname.value = fullName;
        fields.lname.value = lastName;
        fields.email.value = currEmail;
        fields.birth.value = currBirthday;
        fields.position.value = currPosition;
        fields.salary.value = currSalary;

        trElement.remove();
        let currentSalary = Number(sumSpan.textContent);
        currentSalary -= currSalary;
        sumSpan.textContent = currentSalary.toFixed(2);
    }

    function onFiredHandler(trElement) {
        const workerSalary = Number(trElement.children[5].textContent);
        let currentSalary = Number(sumSpan.textContent);

        currentSalary -= workerSalary;

        trElement.remove();
        sumSpan.textContent = currentSalary.toFixed(2);
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
solve();
