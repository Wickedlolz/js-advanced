function calcFruits(type, weight, money) {
    const price = weight * money;
    console.log(
        `I need $${(price / 1000).toFixed(2)} to buy ${(weight / 1000).toFixed(
            2
        )} kilograms ${type}.`
    );
}

calcFruits("orange", 2500, 1.8);
