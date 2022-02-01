function subSum(array, start, end) {
    if (Array.isArray(array) == false) {
        return NaN;
    }

    if (start < 0) {
        start = 0;
    }

    if (end > array.length - 1) {
        end = array.length - 1;
    }

    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += Number(array[i]);
    }

    return sum;
}

console.log(subSum([10, 'twenty', 30, 40], 0, 2));
