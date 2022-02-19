class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.');
        }

        this.books.push({
            bookName,
            bookAuthor,
            payed: false,
        });

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let foundedBook = this.books.find((b) => b.bookName == bookName);

        if (foundedBook == undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (foundedBook.payed == true) {
            throw new Error(`${bookName} has already been paid.`);
        }

        foundedBook.payed = true;

        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let foundedBook = this.books.find((b) => b.bookName == bookName);

        if (foundedBook == undefined) {
            throw new Error(`The book, you're looking for, is not found.`);
        }

        if (foundedBook.payed == false) {
            throw new Error(
                `${bookName} need to be paid before removing from the collection.`
            );
        }

        let index = this.books.findIndex((b) => b.bookName == bookName);
        this.books.splice(index, 1);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor = '') {
        if (bookAuthor.length == '') {
            let output = `The book collection has ${
                this.capacity - this.books.length
            } empty spots left.`;

            let sorted = this.books.sort((a, b) =>
                a.bookName.localeCompare(b.bookName)
            );
            let booksArr = [];

            sorted.forEach((book) => {
                booksArr.push(
                    `${book.bookName} == ${book.bookAuthor} - ${
                        book.payed ? 'Has Paid.' : 'Not Paid.'
                    }`
                );
            });

            output += '\n' + booksArr.join('\n');

            return output;
        } else {
            let foundedBook = this.books.find(
                (b) => b.bookAuthor == bookAuthor
            );

            if (foundedBook == undefined) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }

            return `${foundedBook.bookName} == ${foundedBook.bookAuthor} - ${
                foundedBook.payed ? 'Has Paid.' : 'Not Paid.'
            }`;
        }
    }
}

const library = new LibraryCollection(5);
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
