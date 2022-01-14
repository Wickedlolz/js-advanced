function processOddPositions(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 1) {
            result.push(array[i]);
        }
    }

    let doubledNumbers = result.map((e) => e * 2).reverse();
    console.log(doubledNumbers.join(" "));
}

processOddPositions([10, 15, 20, 25]);
