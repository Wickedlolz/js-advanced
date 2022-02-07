function juiceFlavors(array) {
    let storage = {};
    let bootles = {};

    for (let line of array) {
        let [juiceName, juiceQuantity] = line.split(' => ');
        if (storage[juiceName] == undefined) {
            storage[juiceName] = 0;
        }

        storage[juiceName] += Number(juiceQuantity);

        let currentFruitValue = storage[juiceName];

        if (currentFruitValue >= 1000) {
            let currBootles = Math.trunc(currentFruitValue / 1000);
            bootles[juiceName] = currBootles;
        }
    }

    for (let key in bootles) {
        console.log(`${key} => ${bootles[key]}`);
    }
}

// juiceFlavors([
//     'Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549',
// ]);

juiceFlavors([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789',
]);
