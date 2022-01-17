function sortByTwoCriteria(array) {
    const sorted = array.sort(compare);
    console.log(sorted.join("\n"));

    function compare(a, b) {
        return a.length - b.length || a.localeCompare(b);
    }
}

// sortByTwoCriteria(["alpha", "beta", "gamma"]);
// sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortByTwoCriteria(["test", "Deny", "omen", "Default"]);
