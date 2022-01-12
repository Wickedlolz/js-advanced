function mathOperations(numOne, numTwo, operator) {
    const operators = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
        "%": (a, b) => a % b,
        "**": (a, b) => a ** b,
    };

    if (operators[operator] != undefined) {
        const result = operators[operator](numOne, numTwo);
        console.log(result);
    }
}

mathOperations(5, 6, "+");
mathOperations(3, 5.5, "*");
