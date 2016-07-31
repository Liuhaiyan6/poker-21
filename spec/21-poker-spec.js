/**
 * Created by amber on 16-7-29.
 */
'use strict';
let {dealString,  otherSummations, dealA,comparePokerAB} =require("../src/21-point.js");

describe('dealString1', function () {
    let inputs1 = "1-2-3-A-k";
    it('dealString1', function () {
        let charArray1 = dealString(inputs1);
        expect(charArray1).toEqual(['1', '2', '3', 'A', 'k']);
    })
});


describe('dealString2', function () {
    let inputs2 = "1-2-A-k";
    xit('dealString2', function () {
        let charArray2 = dealString(inputs2);
        expect(charArray2).toEqual(['1', '2', 'A', 'k']);
    })
});


describe('sumPart1', function () {
    let charArray1 = ['1', '2', '3', 'A', 'k'];
    it('sumPart1', function () {
        let sumPart1 = otherSummations(charArray1);
        expect(sumPart1).toEqual(16);
    })
});
describe('sumPart2', function () {
    let charArray2 = ['1', '2', 'A', 'k'];
    it('sumPart2', function () {
        let sumPart2 = otherSummations(charArray2);
        expect(sumPart2).toEqual(13);
    })
});

describe('dealA1', function () {
    let sumPart1 = 16;
    let charArray1 = ['1', '2', '3', 'A', 'k'];
    fit('dealA1', function () {
        let sum1 = dealA(charArray1, sumPart1);
        expect(sum1).toEqual(17);
    })
});
describe('dealA2', function () {
    let sumPart2 = 13;
    let charArray2 = ['1', '2', 'A', 'k'];
    fit('dealA2', function () {
        let  sum2 = dealA(charArray2, sumPart2);
        expect(sum2).toEqual(14);
    })
});
describe('comparePokerAB',function () {
    let inputs1 = "1-2-3-A-k";
    let inputs2 = "1-2-A-k";
    let sum1 = 17;
    let sum2 = 14;
    it('comparePokerAB',function () {
        let winner = comparePokerAB(sum1, sum2, inputs1, inputs2);
        expect(winner).toEqual('A is winner');
    })
});

describe('comparePokerAB',function () {
    let inputs1 = "1-2-3-A-k";
    let inputs2 = "1-2-A-k";
    let sum1 = 17;
    let sum2 = 14;
    it('comparePokerAB',function () {
        let winner = comparePokerAB(sum1, sum2, inputs1, inputs2);
        expect(winner).toEqual('A is winner');
    })
});

describe('comparePokerAB',function () {
    let inputs1 = "A";
    let inputs2 = "A-A-A";
    let sum1 = 11;
    let sum2 = 13;
    it('comparePokerAB',function () {
        let winner = comparePokerAB(sum1, sum2, inputs1, inputs2);
        expect(winner).toEqual('B is winner');
    })
});
describe('comparePokerAB',function () {
    let inputs1 = "5-7-9";
    let inputs2 = "6-7-10";
    let sum1 = 18;
    let sum2 = 23;
    it('comparePokerAB',function () {
        let winner = comparePokerAB(sum1, sum2, inputs1, inputs2);
        expect(winner).toEqual('A is winner');
    })
});

describe('comparePokerAB',function () {
    let inputs1 = "J-2-6";
    let inputs2 = "J-2-2-4";
    let sum1 = 18;
    let sum2 = 18;
    it('comparePokerAB',function () {
        let winner = comparePokerAB(sum1, sum2, inputs1, inputs2);
        expect(winner).toEqual('A is winner');
    })
});
describe('comparePokerAB',function () {
    let inputs1 = "J-A-k";
    let inputs2 = "A-J";
    let sum1 = 21;
    let sum2 =21;
    it('comparePokerAB',function () {
        let winner = comparePokerAB(sum1, sum2, inputs1, inputs2);
        expect(winner).toEqual('A and B is drawer');
    })
});

describe('comparePokerAB',function () {
    let inputs1 = "10-A-1";
    let inputs2 = "A-10-10";
    let sum1 = 12;
    let sum2 =21;
    it('comparePokerAB',function () {
        let winner = comparePokerAB(sum1, sum2, inputs1, inputs2);
        expect(winner).toEqual('B is winner');
    })
});

describe('comparePokerAB',function () {
    let inputs1 = "10-A-1";
    let inputs2 = "A-10-10";
    let sum1 = 12;
    let sum2 =21;
    it('comparePokerAB',function () {
        let winner = comparePokerAB(sum1, sum2, inputs1, inputs2);
        expect(winner).toEqual('B is winner');
    })
});

describe('comparePokerAB',function () {
    let inputs1 = "9-A-1-1";
    let inputs2 = "A-10-1";
    let sum1 = 12;
    let sum2 =21;
    it('comparePokerAB',function () {
        let winner = comparePokerAB(sum1, sum2, inputs1, inputs2);
        expect(winner).toEqual('A is winner');
    })
});


describe('comparePokerAB',function () {
    let inputs1 = "9-J-Q";
    let inputs2 = "9-K-Q";
    let sum1 = 29;
    let sum2 =29;
    it('comparePokerAB',function () {
        let winner = comparePokerAB(sum1, sum2, inputs1, inputs2);
        expect(winner).toEqual('A and B is drawer');
    })
});







