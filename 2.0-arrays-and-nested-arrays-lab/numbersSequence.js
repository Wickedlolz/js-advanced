function numbersSequence(length, range) {
    let resultArray = [1];

    for (let i = 1; i < length; i++) {
        let innerSequence = resultArray.slice(-range);
        let sum = 0;

        innerSequence.forEach((digit) => {
            sum += digit;
        });

        resultArray.push(sum);
    }

    return resultArray;
}

console.log(numbersSequence(6, 3));
console.log(numbersSequence(8, 2));
