function heroicInventory(input) {
    let heroesData = [];

    for (let data of input) {
        let [heroName, heroLevel, items] = data.split(" / ");
        heroLevel = Number(heroLevel);
        let heroItems = items ? items.split(", ") : [];
        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems,
        };

        heroesData.push(hero);
    }

    return JSON.stringify(heroesData);
}

heroicInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
]);
