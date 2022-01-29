function argumentInfo(...args) {
    let counter = {};

    for (let arg of args) {
        let type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (counter[type] == undefined) {
            counter[type] = 0;
        }

        counter[type]++;
    }

    let sortedByDesc = Object.entries(counter).sort((a, b) => {
        return b[1] - a[1] || 0;
    });

    for (let [key, value] of sortedByDesc) {
        console.log(`${key} = ${value}`);
    }
}

argumentInfo('cat', 42, function () {
    console.log('Hello world!');
});
