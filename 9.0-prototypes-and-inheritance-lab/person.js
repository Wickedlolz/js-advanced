function person(first, last) {
    this.fistName = first;
    this.last = last;

    Object.defineProperty(this, 'fullName', {
        set: function (value) {},
        get: function () {},
    });
}
