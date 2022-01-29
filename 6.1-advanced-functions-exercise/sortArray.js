function sortArray(array, sortedValue) {
    const sorting = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a,
    };

    return array.sort(sorting[sortedValue]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));
