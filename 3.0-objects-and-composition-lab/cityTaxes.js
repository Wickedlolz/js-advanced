function cityTaxes(name, population, treasury) {
    let city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.round(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            let percent = percentage / 100;
            this.population += Math.round(this.population * percent);
        },
        applyRecession(percentage) {
            let percent = percentage / 100;
            this.treasury -= Math.round(this.treasury * percent);
        },
    };

    return city;
}

let city = cityTaxes("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
