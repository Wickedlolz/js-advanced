function solution() {
    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        },
    };

    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    const actions = {
        restock: (microElement, quantity) => {
            ingredients[microElement] += quantity;
            return 'Success';
        },
        prepare: (recipe, quantity) => {
            const remainingIngredients = {};

            for (const element in recipes[recipe]) {
                const remaining =
                    ingredients[element] - recipes[recipe][element] * quantity;

                if (remaining < 0) {
                    return `Error: not enough ${element} in stock`;
                } else {
                    remainingIngredients[element] = remaining;
                }
            }

            Object.assign(ingredients, remainingIngredients);
            return 'Success';
        },
        report: () => {
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
        },
    };

    function control(input) {
        let [command, item, quantity] = input.split(' ');
        quantity = Number(quantity);
        let action = actions[command];
        return action(item, quantity);
    }

    return control;
}

let manager = solution();
console.log(manager('restock flavour 50')); // Success
console.log(manager('prepare lemonade 4')); // Error: not enough carbohydrate in stock
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));
