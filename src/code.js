module.exports = function () {
    class Car {

    }

    this.car = new Car();
    this.moreThanFour = 5;
    this.arr = [1, 2, 3, 4, this.moreThanFour];

    let obj = Object.create(Object.prototype, {
        foo: {value: 123, enumerable: true},
        bar: {value: 'abc', enumerable: true}
    });

    let defaultY = 10;
    this.fWithDefaultParameter = function (x, y = defaultY) {
        return x + y;
    }

    this.fWithRestParameter = function (x, y, ...a) {
        return 2 + a.length;
    }

    this.expectedNum = 15;
    this.answear = 0;
    this.fNestedThis = function () {
        let num;
        [1, 2, 3, 5, 15].forEach(function (v) {
            if (v % 5 === 0) {
                num = v;
            }
        })
        this.answear = num;
    }

}