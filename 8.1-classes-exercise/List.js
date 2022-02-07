class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.list.push(element);
        this.size = this.list.length;
        this.sorting();
    }

    remove(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error('Index is outside of the list length');
        }

        this.list.splice(index, 1);
        this.sorting();
        this.size = this.list.length;
    }

    get(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error('Index is outside of the list length');
        }

        return this.list[index];
    }

    sorting() {
        this.list.sort((a, b) => a - b);
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(12);
console.log(list.get(1));
console.log(list.list);
