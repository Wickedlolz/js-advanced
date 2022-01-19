function townsToJson(input) {
    const result = [];
    let splitted = input.shift().split("|");
    const town = splitted[1].trim();
    const latitude = splitted[2].trim();
    const longitude = splitted[3].trim();

    for (let row of input) {
        let obj = {};
        let splittedParts = row.split("|");
        const currentTown = splittedParts[1].trim();
        const currLatitude = splittedParts[2].trim();
        const currLongitude = splittedParts[3].trim();
        obj[town] = currentTown;
        obj[latitude] = Number(Number(currLatitude).toFixed(2));
        obj[longitude] = Number(Number(currLongitude).toFixed(2));

        result.push(obj);
    }

    return JSON.stringify(result);
}

townsToJson([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
]);
