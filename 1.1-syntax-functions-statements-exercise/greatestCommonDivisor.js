function gcd(numOne, numTwo) {
    while (numTwo) {
        let temp = numTwo;
        numTwo = numOne % numTwo;
        numOne = temp;
    }

    console.log(numOne);
}

gcd(15, 5);
gcd(2154, 458);
