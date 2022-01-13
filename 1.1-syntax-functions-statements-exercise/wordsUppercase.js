function wordsUppercase(string) {
    const pattern = /[A-Za-z0-9]+/g;

    const match = string.match(pattern);
    const result = [...match].map((e) => e.toLocaleUpperCase());

    console.log(result.join(", "));
}

wordsUppercase("Hi, how are you");
wordsUppercase("Hello");
