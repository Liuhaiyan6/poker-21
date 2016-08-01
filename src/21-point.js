/**
 * Created by amber on 16-7-29.
 */

let _ = require('lodash');


function winner(inputs11, inputs12) {


    let sumPart1 = sumPart(inputs1);
    let sumPart2 = sumPart(inputs2);

    let sum1 = dealA(inputs1, sumPart1);
    let sum2 = dealA(inputs2, sumPart2);

    let winner = comparePokerAB(sum1, sum2, inputs11, inputs12);
    return winner;
}

function sumPart(inputs) {
    let a = _.chain(inputs)
        .filter(x=> x !== 'A')
        .map(x=> {
            if (x === 'J' || x === 'Q' || x === 'K') {
                return '10';
            }
            else {
                return x;
            }
        })
        .value();

    let b = _(a).map(x=> parseInt(x))

        .sum();
    // console.log(b);
    return b;


}


function dealA(inputs, sumPart) {
    let a = _.chain(inputs)
        .filter(x=>x === 'A')
        .value();
    let lengthA = a.length;
    let partA = 21 - sumPart;
    let sumPartA;
    let sum;
    if (partA < 0) {
        return sumPart + lengthA;
    }
//       console.log(sum);
//       console.log(sumPartA);
    if (_.floor(partA / 11) !== 0) {
        // sumPartA = lengthA;
        // sum = sumPart + sumPartA;
        // //  console.log(sum);
        // return sum;
        sumPartA = 11 + (lengthA - 1);
        sum = sumPart + sumPartA;
        return sum;

    } else {
        sumPartA = lengthA;
        sum = sumPart + sumPartA;
        //  console.log(sum);
        return sum;

        // sumPartA = 11 + (lengthA - 1);
        // sum = sumPart + sumPartA;
        // return sum;
    }
}


function comparePokerAB(sum1, sum2, inputs1, inputs2) {


    if (sum1 > 21 && sum2 > 21) {
        return 'A and B are drawer';
    }

    else if (sum1 === sum2 && inputs1.length > inputs2.length) {
        return 'A is winner'
    }
    else if (sum1 === sum2 && inputs1.length < inputs2.length) {
        return 'A is winner'
    }
    else if (sum1 === sum2 && inputs1.length === inputs2.length) {
        return 'A and B are drawer';
    }
    else if (sum1 < sum2 && sum1 <= 21 && sum2 <= 21) {
        return 'B is winner';
    }
    else if (sum1 > sum2 && sum1 <= 21 && sum2 <= 21) {
        return 'A is winner';
    }
    else if (sum1 === sum2 && inputs1.length < inputs2.length) {
        return 'A is winner';
    }
    else if (sum1 === sum2 && inputs1.length > inputs2.length) {
        return 'B is winner';
    }
    else if (sum1 > 21 && sum2 <= 21) {
        return 'B is winner'
    }
    if (sum1 <= 21 && sum2 > 21) {
        return "A is winner"
    }


}

module.exports = {
    sumPart: sumPart,
    dealA: dealA,
    comparePokerAB: comparePokerAB,

};


