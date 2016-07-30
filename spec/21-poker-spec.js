/**
 * Created by amber on 16-7-29.
 */
'use strict';
let {formattedString1,distingNUMchars1,dealA} =require("../src/21-poker.js");

describe('dealString1', function () {
let inputs1 = "1-2-3-A-k";
  it('dealString', function () {
    var charArray1 = dealString1(inputs1);
    expect(charArray1).toEqual(['1','2','3','A','k']);
  })
});
describe('dealString2', function () {
  let inputs2 = "1-2-A-k";
  it('dealString', function () {
    var charArray2 = dealString1(inputs2);
    expect(charArray2).toEqual(['1','2','A','k']);
  })
});

// describe('dealString2', function () {
//   let  inputs2 = "1*2*K*";
//   it('dealString', function () {
//     var charArray2 = even_to_letter(collection);
//     expect(charArray).toEqual(['1','2','K']);
//   })
// });
describe('sumPart(charArray1', function () {
  let charArray1 = ['1','2','3','A','k'];
  it('dealString', function () {
    var sumPart1 = sumPart(charArray1);
    expect(sumPart1).toEqual(16);
  })
});
describe('sumPart(charArray2', function () {
  let charArray2 = ['1','2','A','k'];
  it('dealString', function () {
    var sumPart2 = sumPart(charArray2);
    expect(sumPart2).toEqual(13);
  })
});// describe('distingNUMchars2', function () {
//   let  charArray2 = ['1','2','K'];
//   it('dealString', function () {
//     var charArray = even_to_letter(collection);
//     expect(charArray1).toEqual(['1','2','3','A']);
//   })
// });

describe('dealA1', function () {
  let sumPart1 = 16;
  let charArray1=['1','2','3','A','k'];
  it('dealString', function () {
    var sum1 = dealStringArrayA(charArray1,sumPart1);
    expect(sum1).toEqual(17);
  })
});
describe('dealA2', function () {
  let sumPart2 = 13;
  let charArray2=['1','2','A','k'];

  it('dealString', function () {
    var sum2 = dealStringArrayA(charArray2,sumPart2);
    expect(sum2).toEqual(14);
  })
});



//
// 'use strict';
// let {formattedString} =require("../src/21-poker.js");
//
// describe('even_to_letter', function () {
//   var collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   it('数组的每个偶数映射为字母', function () {
//     var result = even_to_letter(collection);
//     expect(result).toEqual(['b', 'd', 'f', 'h', 'j']);
//   })
// });
//