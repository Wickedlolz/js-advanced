function printNthElement(array, number) {
    let result = [];

    for (let i = 0; i < array.length; i += number) {
        result.push(array[i]);
    }

    return result;
}

printNthElement(["5", "20", "31", "4", "20"], 2);
