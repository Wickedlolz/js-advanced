class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }

    render(id) {
        const rootElement = document.getElementById(id);
        const article = document.createElement('article');

        const divTitle = document.createElement('div');
        divTitle.classList.add('title');
        this.online
            ? divTitle.classList.add('online')
            : divTitle.classList.remove('online');
        divTitle.textContent = `${this.firstName} ${this.lastName}`;
        const button = document.createElement('button');
        button.addEventListener('click', this.onToggle);
        button.innerHTML = '&#8505;';
        divTitle.appendChild(button);

        const divInfo = document.createElement('div');
        divInfo.classList.add('info');
        divInfo.style.display = 'none';

        const phoneSpan = document.createElement('span');
        phoneSpan.textContent = '\u260E ' + this.phone;
        const emailSpan = document.createElement('span');
        emailSpan.innerHTML += '&#9993; ' + this.email;
        divInfo.appendChild(phoneSpan);
        divInfo.appendChild(emailSpan);

        article.appendChild(divTitle);
        article.appendChild(divInfo);

        rootElement.appendChild(article);
    }

    onToggle(event) {
        const divInfo = event.target.parentElement.parentElement.children[1];

        if (divInfo.style.display == 'none') {
            divInfo.style.display = 'block';
        } else {
            divInfo.style.display = 'none';
        }
    }
}

let contacts = [
    new Contact('Ivan', 'Ivanov', '0888 123 456', 'i.ivanov@gmail.com'),
    new Contact('Maria', 'Petrova', '0899 987 654', 'mar4eto@abv.bg'),
    new Contact('Jordan', 'Kirov', '0988 456 789', 'jordk@gmail.com'),
];

contacts.forEach((c) => c.render('main'));
contacts[1].online = true;
