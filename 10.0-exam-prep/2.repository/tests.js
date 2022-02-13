let { Repository } = require('./solution.js');
const { expect } = require('chai');

describe('Tests …', function () {
    let properties = {
        name: 'string',
        age: 'number',
        birthday: 'object',
    };

    describe('Testing if count returns valid count.', function () {
        let entity = {
            name: 'Pesho',
            age: 22,
            birthday: new Date(1998, 0, 7),
        };

        let repository = new Repository(properties);

        it('When adding two entity should return 2', function () {
            repository.add(entity);
            repository.add(entity);
            expect(repository.count).to.be.equal(2);
        });

        it('When not adding entity should return 0', () => {
            let repository = new Repository(properties);

            expect(repository.count).to.be.equal(0);
        });
    });

    describe('Testing add method', () => {
        let entity = {
            name: 'Pesho',
            age: 22,
            birthday: new Date(1998, 0, 7),
        };

        it('Testing with one missing input', () => {
            let repository = new Repository(properties);
            expect(() => repository.add({ name: 'Pesho', age: 22 })).to.throw();
            expect(() =>
                repository.add({ name: 'Pesho', birthday: '1998-0-7' })
            ).to.throw();
            expect(() =>
                repository.add({ age: 22, birthday: '1998-0-7' })
            ).to.throw();
        });

        it('Testing if returns current ID', () => {
            let repository = new Repository(properties);
            expect(repository.add(entity)).to.be.equal(0);
        });

        it('Testing if prop is present but with another type', () => {
            let repository = new Repository(properties);
            expect(() =>
                repository.add({ name: 2, age: 22, birthday: '1998-1-20' })
            ).to.throw();

            expect(() =>
                repository.add({
                    name: 'Pesho',
                    age: '22',
                    birthday: '1998-1-20',
                })
            ).to.throw();

            expect(() =>
                repository.add({ name: 2, age: 22, birthday: {} })
            ).to.throw();

            expect(() =>
                repository.add({ name: [], age: NaN, birthday: {} })
            ).to.throw();
        });
    });

    describe('Testing getId method', () => {
        let entity1 = {
            name: 'Pesho',
            age: 22,
            birthday: new Date(1998, 0, 7),
        };

        let entity2 = {
            name: 'Peter',
            age: 23,
            birthday: new Date(1998, 0, 8),
        };

        it('Testing if return currect ID', () => {
            let repository = new Repository(properties);
            repository.add(entity1);
            repository.add(entity2);

            expect(repository.getId(1)).to.be.equal(entity2);
            expect(repository.getId(0)).to.be.equal(entity1);
        });

        it('Testing if ID does not exist', () => {
            let repository = new Repository(properties);
            repository.add(entity1);
            expect(() => repository.getId(2)).to.throw();
        });
    });

    describe('Testing update method', () => {
        let entity = {
            name: 'Pesho',
            age: 22,
            birthday: new Date(1998, 0, 7),
        };

        let updatedEntity = {
            name: 'Peter',
            age: 24,
            birthday: new Date(2000, 0, 9),
        };

        let repository = new Repository(properties);

        it('Testing if ID not exist', () => {
            repository.add(entity);
            expect(() => repository.update(2, updatedEntity)).to.throw();
        });

        it('Testing if update correctly', () => {
            repository.add(entity);
            repository.update(0, updatedEntity);
            expect(repository.getId(0)).to.be.equal(updatedEntity);
        });
    });

    describe('Testing del method', () => {
        let entity = {
            name: 'Pesho',
            age: 22,
            birthday: new Date(1998, 0, 7),
        };

        let repository = new Repository(properties);

        it('Testing if ID not exist', () => {
            expect(() => repository.del(2)).to.throw();
            expect(() => repository.del(-2)).to.throw();
        });

        it('Testing if delete correcly.', () => {
            repository.add(entity);

            repository.del(0);

            expect(() => repository.getId(0)).to.throw();
        });
    });
});
