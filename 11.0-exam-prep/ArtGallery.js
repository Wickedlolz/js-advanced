class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { picture: 200, photo: 50, item: 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLocaleLowerCase();
        articleName = articleName.toLocaleLowerCase();
        quantity = Number(quantity);

        if (this.possibleArticles[articleModel] == undefined) {
            throw new Error(
                'This article model is not included in this gallery!'
            );
        }

        if (
            this.listOfArticles.some((a) => a.name == articleName) &&
            this.possibleArticles.hasOwnProperty(articleModel)
        ) {
            let article = this.listOfArticles.find(
                (a) => a.name == articleName
            );
            article.quantity = quantity;
        } else {
            this.listOfArticles.push({
                model: articleModel,
                name: articleName,
                quantity,
            });
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}`;
    }

    inviteGuest(guestName, personality) {
        if (this.guests.some((g) => g.guestName == guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }

        if (personality == 'Vip') {
            this.guests.push({
                guestName,
                points: 500,
                purchaseArticle: 0,
            });
        } else if (personality == 'Middle') {
            this.guests.push({
                guestName,
                points: 250,
                purchaseArticle: 0,
            });
        } else {
            this.guests.push({
                guestName,
                points: 50,
                purchaseArticle: 0,
            });
        }

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        articleModel = articleModel.toLocaleLowerCase();
        articleName = articleName.toLocaleLowerCase();

        if (
            this.listOfArticles.some((a) => a.name == articleName) == false ||
            this.listOfArticles.some((a) => a.model == articleModel) == false
        ) {
            throw new Error('This article is not found.');
        }

        let article = this.listOfArticles.find((a) => a.name == articleName);

        if (article.quantity == 0) {
            return `The article is not available.`;
        }

        if (this.guests.some((g) => g.guestName == guestName) == false) {
            return `This guest is not invited.`;
        }

        let guest = this.guests.find((g) => g.guestName == guestName);

        if (guest.points >= this.possibleArticles[articleModel]) {
            guest.points -= this.possibleArticles[articleModel];
            article.quantity -= 1;
            guest.purchaseArticle += 1;

            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
        } else {
            return `You need to more points to purchase the article.`;
        }
    }

    showGalleryInfo(criteria) {
        if (criteria == 'article') {
            let result = ['Articles information:'];
            this.listOfArticles.forEach((a) => {
                result.push(`${a.model} - ${a.name} - ${a.quantity}`);
            });

            return result.join('\n');
        } else if (criteria == 'guest') {
            let result = ['Guests information:'];
            this.guests.forEach((g) => {
                result.push(`${g.guestName} - ${g.purchaseArticle}`);
            });

            return result.join('\n');
        }
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));
