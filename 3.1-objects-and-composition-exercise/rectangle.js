function rectangle(width, height, color) {
    let firstLetter = color[0].toLocaleUpperCase();
    let modifiedColor = firstLetter;
    for (let i = 1; i < color.length; i++) {
        modifiedColor += color[i];
    }

    return {
        width,
        height,
        color: modifiedColor,
        calcArea() {
            return this.width * this.height;
        },
    };
}

let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
