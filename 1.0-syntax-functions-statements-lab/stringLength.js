function stringLength(...args) {
    let sum = 0;
    args.forEach((str) => (sum += str.length));

    let avgLength = Math.round(sum / 3);

    console.log(sum);
    console.log(avgLength);
}

stringLength("chocolate", "ice cream", "cake");
