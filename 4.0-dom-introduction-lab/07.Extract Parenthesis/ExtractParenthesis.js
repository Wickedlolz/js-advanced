function extract(content) {
    const contentElement = document.getElementById(content).textContent;
    const pattern = /\([A-Za-z0-9\s]+\)/gm;

    let match = contentElement.match(pattern);
    let resultStr = '';

    if (match != null) {
        match.forEach((txt) => {
            resultStr += txt.slice(1, txt.length - 1) + '; ';
        });
    }

    return resultStr.trim();
}
