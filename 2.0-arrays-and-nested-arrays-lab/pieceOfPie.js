function pieceOfPie(pieFlavors, start, end) {
    let startIndex = pieFlavors.indexOf(start);
    let endIndex = pieFlavors.indexOf(end);

    let result = pieFlavors.slice(startIndex, endIndex + 1);
    return result;
}

pieceOfPie(
    [
        "Pumpkin Pie",
        "Key Lime Pie",
        "Cherry Pie",
        "Lemon Meringue Pie",
        "Sugar Cream Pie",
    ],
    "Key Lime Pie",
    "Lemon Meringue Pie"
);
