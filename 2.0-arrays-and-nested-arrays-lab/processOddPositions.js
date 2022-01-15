function processOddPositions(array) {
    let oddNumbers = array.filter((x) => x % 2 == 1);
    let doubledNumbers = oddNumbers.map((x) => x * 2);
    doubledNumbers.reverse();

    console.log(doubledNumbers.join(" "));
}

processOddPositions([10, 15, 20, 25]);
