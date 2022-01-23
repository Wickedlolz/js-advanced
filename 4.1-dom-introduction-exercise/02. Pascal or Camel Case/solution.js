function solve() {
    const textInput = document.getElementById('text').value;
    const namingConvention = document.getElementById('naming-convention').value;
    const result = document.getElementById('result');

    if (namingConvention == 'Camel Case') {
        result.textContent = camelCase(textInput).join('');
    } else if (namingConvention == 'Pascal Case') {
        result.textContent = pascalCase(textInput).join('');
    } else {
        result.textContent = 'Error!';
    }

    function camelCase(elementTxt) {
        let splittedTxt = elementTxt.split(' ');
        let firstWord = splittedTxt.shift();
        let firstChar = firstWord[0].toLocaleLowerCase();
        let restChars = firstWord.slice(1).toLocaleLowerCase();
        firstWord = firstChar + restChars;

        let result = splittedTxt.map((word) => {
            let resultWord = word[0].toLocaleUpperCase();
            let restChars = word.slice(1).toLocaleLowerCase();

            resultWord += restChars;
            return resultWord;
        });

        result.unshift(firstWord);

        return result;
    }

    function pascalCase(elementTxt) {
        let splittedTxt = elementTxt.split(' ');
        let firstWord = splittedTxt.shift();
        let firstChar = firstWord[0].toLocaleUpperCase();
        let restChars = firstWord.slice(1).toLocaleLowerCase();
        firstWord = firstChar + restChars;

        let result = splittedTxt.map((word) => {
            let resultWord = word[0].toLocaleUpperCase();
            let restChars = word.slice(1).toLocaleLowerCase();

            resultWord += restChars;
            return resultWord;
        });

        result.unshift(firstWord);
        return result;
    }
}
