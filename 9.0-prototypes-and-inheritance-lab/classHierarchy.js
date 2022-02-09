function hierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        changeUnits(unit) {
            this.units = unit;
        }

        convertUnit(param) {
            if (this.units == 'm') {
                return (param /= 10);
            } else if (this.units == 'mm') {
                return (param *= 10);
            }

            return param;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this._radius = radius;
        }

        get area() {
            this.radius = this.convertUnit(this._radius);
            return Math.PI * Math.pow(this.radius, 2);
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${
                this.radius
            }`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, heigth, units) {
            super(units);
            this._width = width;
            this._heigth = heigth;
        }

        get area() {
            this.width = this.convertUnit(this._width);
            this.heigth = this.convertUnit(this._heigth);
            return this.width * this.heigth;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${
                this.width
            }, height: ${this.heigth}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle,
    };
}
