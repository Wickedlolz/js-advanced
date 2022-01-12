function aggregateElements(numbersArr) {
    console.log(numbersArr.reduce((a, b) => a + b));
    let sum = 0;
    let concating = "";

    for (let number of numbersArr) {
        sum += 1 / number;
        concating += number;
    }

    console.log(sum);
    console.log(concating);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
