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
            this.listOfArticles[articleName].quantity += quantity;
        } else {
            this.listOfArticles.push({
                model: articleModel,
                name: articleName,
                quantity,
            });
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}`;
    }

    inviteGuests(guestName, personality) {
        if (this.guests.some((g) => g.name == guestName)) {
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
        if (
            this.listOfArticles.some((a) => a.name == articleName) == false ||
            this.listOfArticles.some((a) => a.model == articleModel) == false
        ) {
            throw new Error('This article is not found.');
        }

        let index = this.listOfArticles.indexOf((a) => a.name == articleName);

        if (this.listOfArticles[index].quantity == 0) {
            return `The ${articleName} is not available.`;
        }

        if (this.guests.some((g) => g.guestName == guestName) == false) {
            return `This guest is not invited.`;
        }
    }

    showGalleryInfo(criteria) {}
}
