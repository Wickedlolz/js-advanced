function biggerHalf(array) {
    let sortedAByAscending = array.sort((a, b) => a - b);
    let result = [];

    if (sortedAByAscending.length % 2 == 0) {
        let halfNumbers = sortedAByAscending.slice(
            sortedAByAscending.length / 2
        );
        result.push(...halfNumbers);
    } else {
        let length = Math.floor(sortedAByAscending.length / 2);
        let halfNumbers = sortedAByAscending.slice(length);
        result.push(...halfNumbers);
    }

    return result;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2]);
