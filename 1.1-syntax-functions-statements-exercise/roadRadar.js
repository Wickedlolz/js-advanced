function roadRadar(speed, area) {
    const limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    if (limits[area] != undefined) {
        if (speed <= limits[area]) {
            console.log(`Driving ${speed} km/h in a ${limits[area]} zone`);
        } else if (speed > limits[area] && speed <= limits[area] + 20) {
            let difference = speed - limits[area];
            console.log(
                `The speed is ${difference} km/h faster than the allowed speed of ${limits[area]} - speeding`
            );
        } else if (speed > limits[area] && speed <= limits[area] + 40) {
            let difference = speed - limits[area];
            console.log(
                `The speed is ${difference} km/h faster than the allowed speed of ${limits[area]} - excessive speeding`
            );
        } else {
            let difference = speed - limits[area];
            console.log(
                `The speed is ${difference} km/h faster than the allowed speed of ${limits[area]} - reckless driving`
            );
        }
    }
}

roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
