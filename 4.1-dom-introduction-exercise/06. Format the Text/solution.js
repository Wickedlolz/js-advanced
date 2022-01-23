function solve() {
    const inputTxt = document.getElementById('input').value;
    const output = document.getElementById('output');
    let splittedText = inputTxt.split('.').filter((el) => el != '');

    for (let i = 0; i < splittedText.length; i += 3) {
        let arr = [];
        for (let j = 0; j < 3; j++) {
            if (splittedText[i + j]) {
                arr.push(splittedText[i + j]);
            }
        }

        let paragraph = arr.join('. ') + '.';
        output.innerHTML += `<p>${paragraph}</p>`;
    }
}
