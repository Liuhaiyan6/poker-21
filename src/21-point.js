/**
 * Created by amber on 16-8-4.
 */

let _ = require('lodash');
function getCards(input) {
    return input.split('-');
}
function convertJkqToNumberCards(formattedInput) {
    return _.map(formattedInput, cards=> {
        let isJkq = _.includes(['J', 'K', 'Q'], cards);
        return isJkq ? '10' : cards;
    })
}
function getPointAndCount(numberCards) {
    let countOfA = _(numberCards).filter(card=> card === 'A').size();
    let sumPart = _(numberCards).map(element=>element === 'A' ? 1 : parseInt(element))
        .sum();
    let point = _(_.times(countOfA)).reduce(bestPoint=> {
        let tryPoint = bestPoint + 10;
        return tryPoint > 21 ? bestPoint : tryPoint;
    }, sumPart);
    return {
        point,
        count: numberCards.length
    }
}
function getComparedResult(aPointAndCount, bPointAndCount) {
    let {point:aPoint, count:aCount} = aPointAndCount;
    let {point:bpoint, count:bCount}=bPointAndCount;
    if (aPoint > 21 && bpoint > 21) return 'tied';
    if (aPoint > 21) return 'B won';
    if (bpoint > 21)  return 'A won';
    if (aPoint > bpoint) return 'A won';
    if (aPoint < bpoint)  return 'B won';
    if (aCount > bCount) return 'B won';
    if (aCount < bCount) return 'A won';
    return 'tied';
}
function printWinner(inputA, inputB) {
    let aPointAndCount = getPointAndCount(convertJkqToNumberCards(getCards(inputA)));
    let bPointAndCount = getPointAndCount(convertJkqToNumberCards(getCards(inputB)));
    let result = getComparedResult(aPointAndCount, bPointAndCount);
    console.log(result);
}
module.exports = {
    getCards: getCards,
    convertJkqToNumberCards: convertJkqToNumberCards,
    getPointAndCount: getPointAndCount,
    printWinner: printWinner,
    getComparedResult: getComparedResult
};


