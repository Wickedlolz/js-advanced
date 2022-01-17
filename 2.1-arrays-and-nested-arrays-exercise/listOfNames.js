function list(array) {
    let sortedArray = array.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < sortedArray.length; i++) {
        console.log(`${i + 1}.${sortedArray[i]}`);
    }
}

list(["John", "Bob", "Christina", "Ema"]);
