function addAndRemove(array) {
    let numbers = [];
    let initialNumber = 1;

    for (let command of array) {
        if (command == "add") {
            numbers.push(initialNumber);
            initialNumber = initialNumber + 1;
        } else if (command == "remove") {
            numbers.splice(numbers.length - 1, 1);
            initialNumber = initialNumber + 1;
        }
    }

    if (numbers.length == 0) {
        console.log("Empty");
    } else {
        console.log(numbers.join("\n"));
    }
}

addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
