function biggestElement(array) {
    let biggestNumbers = array.map((arr) => Math.max(...arr));
    return Math.max(...biggestNumbers);
}

console.log(
    biggestElement([
        [20, 50, 10],
        [8, 33, 145],
    ])
);
