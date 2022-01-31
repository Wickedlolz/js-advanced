function solve() {
    const [addTaskSection, openSection, inProgressSection, completeSection] =
        Array.from(document.querySelectorAll('.wrapper section'));

    addTaskSection.addEventListener('click', onAdd);
    openSection.addEventListener('click', onOpen);
    inProgressSection.addEventListener('click', onInProgress);

    function onAdd(event) {
        event.preventDefault();

        if (event.target.tagName == 'BUTTON' && event.target.id == 'add') {
            const taskName = document.getElementById('task');
            const description = document.getElementById('description');
            const date = document.getElementById('date');

            if (
                taskName.value != '' &&
                description.value != '' &&
                date.value != ''
            ) {
                const articleElement = document.createElement('article');

                const h3TaskNameElement = document.createElement('h3');
                h3TaskNameElement.textContent = taskName.value;

                const pDescriptionElement = document.createElement('p');
                pDescriptionElement.textContent = `Description: ${description.value}`;

                const pDateElement = document.createElement('p');
                pDateElement.textContent = `Due Date: ${date.value}`;

                const divElement = document.createElement('div');
                divElement.classList.add('flex');

                const startBtn = document.createElement('button');
                startBtn.classList.add('green');
                startBtn.textContent = 'Start';

                const deleteBtn = document.createElement('button');
                deleteBtn.classList.add('red');
                deleteBtn.textContent = 'Delete';

                divElement.appendChild(startBtn);
                divElement.appendChild(deleteBtn);

                articleElement.appendChild(h3TaskNameElement);
                articleElement.appendChild(pDescriptionElement);
                articleElement.appendChild(pDateElement);
                articleElement.appendChild(divElement);

                openSection.children[1].appendChild(articleElement);

                taskName.value = '';
                description.value = '';
                date.value = '';
            }
        }
    }

    function onOpen(event) {
        if (
            event.target.tagName == 'BUTTON' &&
            event.target.textContent == 'Start'
        ) {
            const clonedArticle =
                event.target.parentElement.parentElement.cloneNode(true);

            clonedArticle.children[3].children[0].classList = 'red';
            clonedArticle.children[3].children[0].textContent = 'Delete';

            clonedArticle.children[3].children[1].classList = 'orange';
            clonedArticle.children[3].children[1].textContent = 'Finish';

            event.target.parentElement.parentElement.remove();
            inProgressSection.children[1].appendChild(clonedArticle);
        } else if (
            event.target.tagName == 'BUTTON' &&
            event.target.textContent == 'Delete'
        ) {
            event.target.parentElement.parentElement.remove();
        }
    }

    function onInProgress(event) {
        if (
            event.target.tagName == 'BUTTON' &&
            event.target.textContent == 'Finish'
        ) {
            const clonedElement =
                event.target.parentElement.parentElement.cloneNode(true);
            clonedElement.children[3].remove();

            event.target.parentElement.parentElement.remove();
            completeSection.children[1].appendChild(clonedElement);
        } else if (
            event.target.tagName == 'BUTTON' &&
            event.target.textContent == 'Delete'
        ) {
            event.target.parentElement.parentElement.remove();
        }
    }
}
