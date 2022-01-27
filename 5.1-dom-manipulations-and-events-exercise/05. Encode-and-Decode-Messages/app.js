function encodeAndDecodeMessages() {
    const [encodeBtn, decodeBtn] = Array.from(
        document.querySelectorAll('#main div button')
    );

    encodeBtn.addEventListener('click', onEncode);
    decodeBtn.addEventListener('click', onDecode);

    function onEncode(event) {
        const inputTxt = event.target.parentElement.querySelector('textarea');
        let encodedMessage = '';

        for (let char of inputTxt.value) {
            let currentCharCode = char.charCodeAt(0);
            let modifiedCharCode = currentCharCode + 1;

            encodedMessage += String.fromCharCode(modifiedCharCode);
        }

        let decodedField =
            event.target.parentElement.parentElement.querySelectorAll(
                'textarea'
            )[1];

        decodedField.value = encodedMessage;
        inputTxt.value = '';
    }

    function onDecode(event) {
        const inputTxt = event.target.parentElement.querySelector('textarea');
        let decodedMessage = '';

        for (let char of inputTxt.value) {
            let currentCharCode = char.charCodeAt(0);
            let modifiedCharCode = currentCharCode - 1;

            decodedMessage += String.fromCharCode(modifiedCharCode);
        }

        inputTxt.disabled = false;
        inputTxt.value = decodedMessage;
        inputTxt.disabled = true;
    }
}
