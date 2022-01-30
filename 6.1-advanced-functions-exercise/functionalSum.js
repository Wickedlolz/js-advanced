function solve(number) {
    let sum = number;

    function add(num) {
        sum += num;
        return add;
    }

    add.toString = () => {
        return sum;
    };

    return add;
}

console.log(solve(1).toString()); // 1
console.log(solve(1)(6)(-3).toString()); // 4
