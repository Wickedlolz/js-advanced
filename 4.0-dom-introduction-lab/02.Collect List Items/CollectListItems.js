function extractText() {
    const listItems = document.getElementById('items').children;
    const resultEl = document.getElementById('result');

    const result = Array.from(listItems).map((el) => el.textContent);
    resultEl.value = result.join('\n');
}
