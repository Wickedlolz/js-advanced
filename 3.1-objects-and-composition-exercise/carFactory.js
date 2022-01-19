function factory(order) {
    let car = {};
    car.model = order.model;

    if (order.power <= 100) {
        car.engine = {
            power: 90,
            volume: 1800,
        };
    } else if (order.power >= 110 && order.power < 180) {
        car.engine = {
            power: 120,
            volume: 2400,
        };
    } else if (order.power >= 200) {
        car.engine = {
            power: 200,
            volume: 3500,
        };
    }

    car.carriage = {
        type: order.carriage,
        color: order.color,
    };

    let carWheels = order.wheelsize;
    if (carWheels % 2 == 1) {
        car.wheels = [carWheels, carWheels, carWheels, carWheels];
    } else {
        while (carWheels % 2 != 1) {
            carWheels -= 1;
        }

        car.wheels = [carWheels, carWheels, carWheels, carWheels];
    }

    return car;
}

console.log(
    factory({
        model: "VW Golf II",
        power: 90,
        color: "blue",
        carriage: "hatchback",
        wheelsize: 14,
    })
);

console.log(
    factory({
        model: "Opel Vectra",
        power: 110,
        color: "grey",
        carriage: "coupe",
        wheelsize: 17,
    })
);
