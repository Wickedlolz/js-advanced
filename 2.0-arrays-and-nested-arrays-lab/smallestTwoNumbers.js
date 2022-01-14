function smallestNumbers(array) {
    let smallestNums = [];

    for (let i = 0; i < 2; i++) {
        let num = Math.min(...array);
        let index = array.indexOf(num);
        array.splice(index, 1);

        smallestNums.push(num);
    }

    console.log(smallestNums.join(" "));
}

smallestNumbers([30, 15, 50, 5]);
