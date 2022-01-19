function storeCatalog(input) {
    let catalog = {};

    input.forEach((el) => {
        let groupLetter = el[0];
        let [product, price] = el.split(" : ");
        price = Number(price);

        if (catalog[groupLetter] == undefined) {
            catalog[groupLetter] = {};
        }

        catalog[groupLetter][product] = price;
    });

    let sortedByAscending = Object.entries(catalog).sort((a, b) =>
        a[0].localeCompare(b[0])
    );

    for (let [group, products] of sortedByAscending) {
        console.log(group);
        let sortedProducts = Object.entries(products).sort((a, b) =>
            a[0].localeCompare(b[0])
        );

        for (let [prod, price] of sortedProducts) {
            console.log(` ${prod}: ${price}`);
        }
    }
}

storeCatalog([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
]);
