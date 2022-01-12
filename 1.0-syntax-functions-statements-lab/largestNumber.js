function largestNumber(numOne, numTwo, numThree) {
    let result = 0;
    if (numOne > numTwo && numOne > numThree) {
        result = numOne;
    } else if (numTwo > numOne && numTwo > numThree) {
        result = numTwo;
    } else {
        result = numThree;
    }

    console.log(`The largest number is ${result}.`);
}

largestNumber(3, -3, 16);

function solve(...args) {
    console.log(`The largest number is ${Math.max(...args)}`);
}

solve(3, -3, 16);
