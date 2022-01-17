function extractSubsequence(array) {
    // let result = array.filter((x) => {
    //     if (x >= biggestNumber) {
    //         biggestNumber = x;
    //         return true;
    //     } else {
    //         return false;
    //     }
    // });

    // return result;

    let biggestNumber = 0;
    let resultArray = [];

    array.reduce((acc, value) => {
        if (value >= biggestNumber) {
            acc.push(value);
        }

        return acc;
    }, resultArray);

    return resultArray;
}

console.log(extractSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractSubsequence([1, 2, 3, 4]));
console.log(extractSubsequence([20, 3, 2, 15, 6, 1]));
