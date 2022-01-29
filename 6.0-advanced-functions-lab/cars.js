function cars(array) {
    let result = {};

    let actions = {
        create: (data) => {
            const [name, inherit, parentName] = data;

            result[name] = {};

            if (inherit) {
                result[name] = Object.setPrototypeOf(
                    result[name],
                    result[parentName]
                );
            }
        },
        set: (data) => {
            let [name, key, value] = data;
            if (result[name] != undefined) {
                result[name][key] = value;
            }
        },
        print: (name) => {
            let output = [];

            for (let key in result[name]) {
                output.push(`${key}:${result[name][key]}`);
            }

            console.log(output.join(','));
        },
    };

    for (let line of array) {
        let tokens = line.split(' ');
        let command = tokens.shift();
        let action = actions[command];
        action(tokens);
    }
}

cars([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2',
]);
