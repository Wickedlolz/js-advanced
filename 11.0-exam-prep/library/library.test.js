const library = require('./library');
const { expect } = require('chai');

describe('Library Checker', () => {
    describe('calcPriceOfBook tests', () => {
        it('Testing nameOfBook with integer', () => {
            expect(() => library.calcPriceOfBook(2, 1980)).to.throw(
                'Invalid input'
            );
        });

        it('Testing year with string', () => {
            expect(() =>
                library.calcPriceOfBook('The Little Prince', '20')
            ).to.throw('Invalid input');
        });

        it('Testing with year below 1980', () => {
            expect(
                library.calcPriceOfBook('The Little Prince', 1950)
            ).to.be.equal(`Price of The Little Prince is 10.00`);
        });

        it('Testing with year 1980', () => {
            expect(
                library.calcPriceOfBook('The Little Prince', 1980)
            ).to.be.equal('Price of The Little Prince is 10.00');
        });

        it('Testing with year under 1980', () => {
            expect(
                library.calcPriceOfBook('The Little Prince', 2000)
            ).to.be.equal('Price of The Little Prince is 20.00');
        });
    });

    describe('findBook test', () => {
        it('Testing with empty booksArr', () => {
            expect(() => library.findBook([], 'The Little Prince')).to.throw(
                'No books currently available'
            );
        });

        it('Testing if foud current book', () => {
            expect(
                library.findBook(['Troy', 'The Little Prince'], 'Troy')
            ).to.be.equal('We found the book you want.');
        });

        it('Testing if book is not in booksArr', () => {
            expect(
                library.findBook([
                    'Troy',
                    'The Little Prince',
                    'Fifty Shades of Gray',
                ])
            ).to.be.equal('The book you are looking for is not here!');
        });
    });

    describe('arrangeTheBooks tests', () => {
        it('Testing input with string', () => {
            expect(() => library.arrangeTheBooks('test')).to.throw(
                'Invalid input'
            );
        });

        it('Testing input with negative number', () => {
            expect(() => library.arrangeTheBooks(-10)).to.throw(
                'Invalid input'
            );
        });

        it('Testing count of books less then 39', () => {
            expect(library.arrangeTheBooks(39)).to.be.equal(
                'Great job, the books are arranged.'
            );
        });

        it('Testing count of books with 40', () => {
            expect(library.arrangeTheBooks(40)).to.be.equal(
                'Great job, the books are arranged.'
            );
        });

        it('Testing count of books bigger then 40', () => {
            expect(library.arrangeTheBooks(41)).to.be.equal(
                'Insufficient space, more shelves need to be purchased.'
            );
        });
    });
});
