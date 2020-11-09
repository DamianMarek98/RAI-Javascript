const expect = require('chai').expect;
const CodeSrc = require('../src/code');

const code = new CodeSrc();

describe('code-tests', function () {


        beforeEach(function () {
        });
        it('class definition should create class', function () {
            expect(typeof code.car).to.eql("object")
        });

        it('anonymous function should work', function () {
            let found = code.arr.find(x => x > 4);
            expect(found).to.eql(code.moreThanFour);
        });

        it('block scope variable should be undefined outside', function () {
            let x;
            for (let i = 0; i < code.arr.length; i++) {
                let x = code.arr[i]
            }
            expect(x).to.eql(undefined);
        })

        it('Object create should create object from prototype', function () {
            expect(eval('typeof Object.create(Object.prototype, {\n' +
                '        foo: { value: 123, enumerable: true },\n' +
                '        bar: { value: \'abc\', enumerable: true }\n' +
                '    })')).eq('object');
        });

        it('Default parameter should be used when param is not given', function () {
            expect(eval("code.fWithDefaultParameter(10)")).eq(20);
        })

        it('Decomposition of structure should work', function () {
            let a, b;
            ({a, b} = {a: 1, b: 2})
            expect(a === 1 && b === 2).eq(true);
        })

        it('Decomposition of list should work', function () {
            let a, b;
            [a, , b] = [1, 2, 3];
            expect(a === 1 && b === 3).eq(true);
        })

        it('String interpolation should work', function () {
            let imie = "Damian";
            let index = 171952;
            const interpolation = `${imie} - ${index}`;
            let resultOfInterpolation = "Damian - 171952";
            expect(interpolation).eq(resultOfInterpolation);
        })

        it('Rest parameters should work', function () {
            expect(eval('code.fWithRestParameter(1,2,3,4,5)')).eq(5);
        });
        it('This nested should work', function () {
            code.fNestedThis();
            expect(code.answear).eq(code.expectedNum);
        })
    }
)