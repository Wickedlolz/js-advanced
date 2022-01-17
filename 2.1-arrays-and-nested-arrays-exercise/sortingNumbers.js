function sortingNumbers(array) {
    let sortedByAscending = array.sort((a, b) => a - b);
    let middleIndex = Math.floor(sortedByAscending.length / 2);
    let firstHalf = sortedByAscending.slice(0, middleIndex);
    let secondHalf = sortedByAscending.slice(middleIndex).reverse();
    let result = [];

    for (let i = 0; i < firstHalf.length; i++) {
        result.push(firstHalf[i], secondHalf[i]);
    }

    if (array.length % 2 == 1) {
        result.push(secondHalf[secondHalf.length - 1]);
    }
    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
