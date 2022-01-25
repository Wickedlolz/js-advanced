function deleteByEmail() {
    const inputTxt = document.querySelector("input[type='text']");
    const rows = Array.from(document.querySelectorAll('#customers tbody tr'));

    let isDeleted = false;

    rows.forEach((row) => {
        let email = row.children[1].textContent;
        if (inputTxt.value == email) {
            row.remove();
            isDeleted = true;
        }
    });

    if (isDeleted) {
        document.getElementById('result').textContent = 'Deleted.';
    } else {
        document.getElementById('result').textContent = 'Not found.';
    }
}
