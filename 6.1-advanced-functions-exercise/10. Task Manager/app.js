function solve() {
    const [addTaskSection, openSection, inProgressSection, completeSection] =
        Array.from(document.querySelectorAll('.wrapper section'));

    addTaskSection.addEventListener('click', onAdd);
    openSection.addEventListener('click', onOpen);
    inProgressSection.addEventListener('click', onInProgress);
    completeSection.addEventListener('click', onComplete);

    function onAdd(event) {
        event.preventDefault();

        if (event.target.tagName == 'BUTTON' && event.target.id == 'add') {
            const taskName = document.getElementById('task');
            const description = document.getElementById('description');
            const date = document.getElementById('date');

            console.log(taskName.value, description.value, date.value);
        }
    }

    function onOpen(event) {}

    function onInProgress(event) {}

    function onComplete(event) {}
}
