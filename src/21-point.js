/**
 * Created by amber on 16-7-29.
 */
let _ = require('lodash');


function winner(inputs1, inputs2) {

    let charArray1 = dealString(inputs1);
    let charArray2 = dealString(inputs2);

    let sumPart1 = otherSummations(charArray1);
    let sumPart2 = otherSummations(charArray2);

    let sum1 = dealA(charArray2, sumPart1);
    let sum2 = dealA(charArray2, sumPart2);

    let Winner = comparePokerAB(sum1, sum2);
    return Winner;
}

function dealString(inputs) {
    return charArray = _.split(inputs, '-');


    function otherSummations(charArray) {
        let a = _.chain(charArray).filter(x=> x !== 'A')
            .map(x=> {
                if (x = ['J', 'Q', 'K']) {
                    return 10;
                }
                else {
                    return x;
                }
            }).value();
        return sumPart = _(a).map(x=> _.parseInt(x)).sum();
    }
}


function dealA(charArray, sumPart) {
    let a = _.chain(charArray);
    _.filter(x=>x === 'A')
        .value();
    let lengthA = a.length;
    let partA = 21 - sumPart;
    if (partA < 0) {
        return 'over!';
    } else {
        let sumPartA;
        let sum1;
        if (_.floor(partA % 11 === 0)) {
            sumPartA = lengthA1 + 1;
            sum = sumPart + sumPartA;
            return sum;
        } else {
            sumPartA = 11 + (lengthA - 1);
            sum = partSum + sumPartA;
            return sum;
        }
    }
}


function comparePokerAB(sum1, sum2, inputs1, inputs2) {
    if (sum1 > 21 && sum2 > 21) {
        return 'A and B are drawer';
    } else {
        if (sum1 === sum2 && inputs1.length > inputs2.length) {
            return 'A is winner'
        }
        if (sum1 === sum2 && inputs1.length < inputs2.length) {
            return 'B is winner'
        }
        if (sum1 === sum2 && inputs1.length === inputs2.length) {
            return 'A and B are drawer';
        } else {
            if (sum1 < sum2 && inputs1.length < inputs2.length) {
                return 'B is winner';

            }
            if (sum1 < sum2 && inputs1.length > inputs2.length) {
                return 'B is winner';

            }
            if (sum1 > sum2 && inputs1.length > inputs2.length) {
                return 'A is winner';
            }
            if (sum1 > sum2 && inputs1.length < inputs2.length) {
                return 'B is winner';
            }
            else {
                return 'A is winner';
            }
        }

    }
}

module.exports = {
    dealString: dealString,
    otherSummations: otherSummations,
    dealA: dealA,
    comparePokerAB: comparePokerAB,

};


