/**
 * Created by amber on 16-7-29.
 */
'use strict';
let {sumPart, dealA, comparePokerAB} =require("../src/21-point.js");


describe('#1 sumPart', function () {
    it('sumPart', function () {
        let inputs = ['2','5','9'];
        let sumParts = sumPart(inputs);
        let printParts=16;
        expect(sumParts).toEqual(printParts);
    })
});
describe('#2 sumPart', function () {
    it('sumPart', function () {
        let inputs = ['J','Q','K'];
        let sumParts = sumPart(inputs);
        let printParts=30;
        expect(sumParts).toEqual(printParts);
    })
});

describe('#3 sumPart', function () {
    it('sumPart', function () {
        let inputs = ['A','A','A','A'];
        let sumParts = sumPart(inputs);
        let printParts=0;
        expect(sumParts).toEqual(printParts);
    })
});
describe('#4 sumPart', function () {
    it('sumPart', function () {
        let inputs = ['2','J','A'];
        let sumParts = sumPart(inputs);
        let printParts=12;

        expect(sumParts).toEqual(printParts);
    })
});
describe('#5sumPart', function () {
    it('sumPart', function () {
        let inputs = ['A','A','2','Q'];
        let sumParts = sumPart(inputs);
        let printParts=12;
        expect(sumParts).toEqual(printParts);
    })
});
describe('#6 sumPart', function () {
    it('sumPart', function () {
        let inputs = ['A','Q','K'];
        let sumParts = sumPart(inputs);
        let printParts=20;
        expect(sumParts).toEqual(printParts);
    })
});



describe('#1 dealA1', function () {

    it('dealA1', function () {
        let sumPart = 16;
        let inputs = ['2','5','9'];
        let sum = dealA(inputs, sumPart);
        let expected =16;
        expect(sum).toEqual(expected);
    })
});
describe('#2 dealA1', function () {
    it('dealA1', function () {
        let sumPart = 30;
        let inputs = ['J','Q','K'];
        let sum = dealA(inputs, sumPart);
        let expected =30;
        expect(sum).toEqual(expected);
    })
});
describe('#3 dealA1', function () {
    it('dealA1', function () {
        let sumPart = 0;
        let inputs = ['A','A','A','A'];
        let sum = dealA(inputs, sumPart);
        let expected =14;
        expect(sum).toEqual(expected);
    })
});
describe('#4 1dealA1', function () {
    it('dealA1', function () {
        let sumPart = 12;
        let inputs = ['2','J','A'];
        let sum = dealA(inputs, sumPart);
        let expected =13;
        expect(sum).toEqual(expected);
    })
});describe('#5 dealA1', function () {

    it('dealA1', function () {
        let sumPart = 12;
        let inputs = ['A','A','2','Q'];
        let sum = dealA(inputs, sumPart);
        let expected =14;

        expect(sum).toEqual(expected);
    })
});
describe('#6 dealA1', function () {
    it('dealA1', function () {
        let sumPart = 20;
        let inputs = ['A','Q','K'];
        let sum = dealA(inputs, sumPart);
        let expected =21;
        expect(sum).toEqual(expected);
    })
});



describe('#1 comparePokerAB', function () {
    it('comparePokerAB', function () {
        let sum1 = 43;
        let sum2 = 43;
        let winner = comparePokerAB(sum1, sum2);
        expect(winner).toEqual('A and B are drawer');
    })
});




describe('#2 comparePokerAB', function () {

    let sum1 = 22;
    let sum2 = 23;
    it('comparePokerAB', function () {
        let winner = comparePokerAB(sum1, sum2);
        expect(winner).toEqual('A and B are drawer');
    })
});

describe('#3 comparePokerAB', function () {

    let sum1 = 18;
    let sum2 = 19;
    it('comparePokerAB', function () {
        let winner = comparePokerAB(sum1, sum2);
        expect(winner).toEqual('B is winner');
    })
});

describe('#4 comparePokerAB', function () {

    let sum1 = 18;
    let sum2 = 18;
    let inputs11 =['2','9','7'];
    let inputs12=['2','6','3','7'];
    it('comparePokerAB', function () {
        let winner =comparePokerAB(sum1, sum2, inputs11, inputs12);
        expect(winner).toEqual('A is winner');
    })
});


describe('#5 comparePokerAB', function () {

    let sum1 = 22;
    let sum2 = 20;

    it('comparePokerAB', function () {
        let winner = comparePokerAB(sum1, sum2);
        expect(winner).toEqual('B is winner');
    })
});












