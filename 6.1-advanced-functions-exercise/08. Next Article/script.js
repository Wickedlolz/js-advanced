function getArticleGenerator(articles) {
    let articlesList = articles;
    const container = document.querySelector('#content');

    function showNext() {
        if (articlesList.length > 0) {
            let article = articlesList.shift();
            const articleElement = document.createElement('article');
            articleElement.textContent = article;
            console.log(container);
            container.appendChild(articleElement);
        }
    }

    return showNext;
}
