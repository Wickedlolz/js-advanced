function calorieObject(array) {
    let calories = {};

    for (let i = 0; i < array.length; i += 2) {
        let name = array[i];
        let calorie = Number(array[i + 1]);

        if (calories[name] == undefined) {
            calories[name] = calorie;
        } else {
            calories[name] += calorie;
        }
    }

    console.log(calories);
}

calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
calorieObject(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
