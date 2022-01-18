function townPopulation(array) {
    let towns = {};

    for (let data of array) {
        let [townName, townPopulation] = data.split(" <-> ");
        townPopulation = Number(townPopulation);

        if (towns[townName] != undefined) {
            towns[townName] += townPopulation;
        } else {
            towns[townName] = townPopulation;
        }
    }

    for (let name in towns) {
        console.log(`${name} : ${towns[name]}`);
    }
}

townPopulation([
    "Sofia <-> 1200000",
    "Montana <-> 20000",
    "New York <-> 10000000",
    "Washington <-> 2345000",
    "Las Vegas <-> 1000000",
]);

townPopulation([
    "Istanbul <-> 100000",
    "Honk Kong <-> 2100004",
    "Jerusalem <-> 2352344",
    "Mexico City <-> 23401925",
    "Istanbul <-> 1000",
]);
