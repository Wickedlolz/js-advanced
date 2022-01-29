function listProcessor(array) {
    let result = [];

    let actions = {
        add: (string) => {
            result.push(string);
        },
        remove: (string) => {
            result = result.filter((x) => x != string);
        },
        print: () => {
            console.log(result.join(','));
        },
    };

    for (let line of array) {
        let [command, name] = line.split(' ');
        let action = actions[command];
        action(name);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
