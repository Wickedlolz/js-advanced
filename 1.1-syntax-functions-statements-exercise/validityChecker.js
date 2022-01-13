function validityChecker(x1, y1, x2, y2) {
    let result1 = formula(x1, y1, 0, 0);
    let result2 = formula(x2, y2, 0, 0);
    let result3 = formula(x1, y1, x2, y2);

    console.log("{" + x1 + ", " + y1 + "} to {0, 0} is " + result1);
    console.log("{" + x2 + ", " + y2 + "} to {0, 0} is " + result2);
    console.log(
        "{" +
            x1 +
            ", " +
            y1 +
            "} to " +
            "{" +
            x2 +
            ", " +
            y2 +
            "} is " +
            result3
    );

    function formula(x1, y1, x2, y2) {
        let num = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        let result = "";
        if (Math.round(num) == num) {
            result = "valid";
        } else {
            result = "invalid";
        }
        return result;
    }
}

validityChecker(3, 0, 0, 4);
