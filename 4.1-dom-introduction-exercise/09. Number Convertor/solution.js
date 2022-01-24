function solve() {
    document.querySelector('#selectMenuTo option').value = 'binary';
    document.querySelector('#selectMenuTo option').textContent = 'Binary';
    const selectTo = document.querySelector('#selectMenuTo');
    const newOptionElement = document.createElement('option');
    newOptionElement.value = 'hexadecimal';
    newOptionElement.textContent = 'Hexadecimal';
    selectTo.appendChild(newOptionElement);

    document.querySelector('button').addEventListener('click', onClick);

    function onClick() {
        const resultElement = document.getElementById('result');
        const inputNumber = document.getElementById('input').value;

        if (selectTo.value == 'binary') {
            let number = parseInt(inputNumber);
            let result = number.toString(2);

            resultElement.value = result;
        } else if (selectTo.value == 'hexadecimal') {
            let number = Number(inputNumber);
            let result = decimalToHexString(number);

            resultElement.value = result;
        }
    }

    function decimalToHexString(number) {
        if (number < 0) {
            number = 0xffffffff + number + 1;
        }

        return number.toString(16).toUpperCase();
    }
}
