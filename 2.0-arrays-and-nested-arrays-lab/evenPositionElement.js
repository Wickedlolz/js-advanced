function evenPosition(input) {
    let arr = input.slice();

    let evenNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            evenNumbers.push(arr[i]);
        }
    }

    console.log(evenNumbers.join(" "));
}

evenPosition(["20", "30", "40", "50", "60"]);
