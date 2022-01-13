function sameNumbers(number) {
    let numberToString = number.toString();
    let isEqual = true;
    let sum = 0;

    for (let i = 0; i < numberToString.length - 1; i++) {
        if (numberToString[i] == numberToString[i + 1]) {
            isEqual = true;
        } else {
            isEqual = false;
            break;
        }
    }

    for (let digit of numberToString) {
        sum += Number(digit);
    }

    console.log(isEqual);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);
