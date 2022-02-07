function autoEngineeringCompany(array) {
    let carRegister = {};

    for (let line of array) {
        let [carName, carModel, productCars] = line.split(' | ');
        productCars = Number(productCars);

        if (carRegister[carName] == undefined) {
            carRegister[carName] = {};
        }

        if (carRegister[carName][carModel] == undefined) {
            carRegister[carName][carModel] = productCars;
        } else {
            carRegister[carName][carModel] += productCars;
        }
    }

    for (let [key, value] of Object.entries(carRegister)) {
        console.log(key);
        for (let key in value) {
            console.log(`###${key} -> ${value[key]}`);
        }
    }
}

autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10',
]);
