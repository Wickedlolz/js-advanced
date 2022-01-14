function biggestElement(array) {
    let biggestNumbers = [];

    for (let element of array) {
        let maxNumber = Math.max(...element);
        biggestNumbers.push(maxNumber);
    }

    let biggest = Math.max(...biggestNumbers);
    return biggest;
}

console.log(
    biggestElement([
        [20, 50, 10],
        [8, 33, 145],
    ])
);
