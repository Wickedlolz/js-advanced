function squareOfStars(size = 5) {
    for (let i = 0; i < size; i++) {
        console.log("* ".repeat(size));
    }
}

squareOfStars(1);
console.log("------");
squareOfStars(2);
console.log("------");
squareOfStars(5);
console.log("------");
squareOfStars(7);
console.log("------");
squareOfStars();
