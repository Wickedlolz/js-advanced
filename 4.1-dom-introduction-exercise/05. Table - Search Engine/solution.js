function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const tableElements = Array.from(
            document.querySelectorAll('.container tbody tr')
        );
        const input = document.getElementById('searchField');
        const searchField = input.value.toLocaleLowerCase();

        tableElements.forEach((el) => {
            if (searchField != '') {
                if (el.textContent.toLocaleLowerCase().includes(searchField)) {
                    el.classList.add('select');
                } else {
                    el.classList.remove('select');
                }
            }
        });

        input.value = '';
    }
}
