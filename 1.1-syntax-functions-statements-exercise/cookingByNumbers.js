function cookingByNumbers(...args) {
    let staringPoint = Number(args.shift());
    const operations = {
        chop: (number) => number / 2,
        dice: (number) => Math.sqrt(number),
        spice: (number) => number + 1,
        bake: (number) => number * 3,
        fillet: (number) => number - number * 0.2,
    };

    args.forEach((command) => {
        if (operations[command] != undefined) {
            staringPoint = operations[command](staringPoint);
            console.log(staringPoint);
        }
    });
}

cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
