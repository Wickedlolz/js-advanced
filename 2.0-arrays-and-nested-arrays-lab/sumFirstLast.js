function sum(array) {
    const result = Number(array.shift()) + Number(array.pop());
    console.log(result);
}

sum(["20", "30", "40"]);
sum(["5", "10"]);
