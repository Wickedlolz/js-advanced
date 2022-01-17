function magicMatrices(matrix = []) {
    let magicSum = Number.MAX_SAFE_INTEGER;
    let isMagicMatrix = true;

    for (let row = 0; row < matrix.length; row++) {
        let sum = 0;
        for (let col = 0; col < matrix[row].length; col++) {
            sum += matrix[row][col];
        }

        if (magicSum === Number.MAX_SAFE_INTEGER) {
            magicSum = sum;
        }

        if (sum != magicSum) {
            isMagicMatrix = false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let sum = 0;
        for (let row = 0; row < matrix.length; row++) {
            sum += matrix[row][col];
        }

        if (sum != magicSum) {
            isMagicMatrix = false;
        }
    }

    return isMagicMatrix;
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
]);

magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
]);

magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
]);
