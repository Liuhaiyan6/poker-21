/**
 * Created by amber on 16-7-29.
 */
let _ = require('lodash');

function dealString1(inputs1) {
   return  _.split(inputs,'-');
}

function dealString2(inputs2) {
    return  _.split(inputs,'-');
}


function  sumPart(charArray1) {
    let charArray1=_.chain(charArray1)
        .filter(x=>x!=='A')
        .map(x=>{
            if(x==='J'||x==='Q'||x==='K'){
                 return _.chain (x).replace(x,10)
                     .value();
            }
                else{
                    return(x);
                }
        })
        .value();
    return _.(charArray1).map(x=>_.parseInt(x)).sum();
}

function dealStringArrayA(charArray1,sumPart){
    let  a= _.chain(charArray1);
    _.filter(x=>x==='A')
        .value();
     let lengthA = a.length;
    let  partA=21-sumPart;
    if(partA<0){
        return 'over!';
    }else{
        let sumPartA;
        let sum;
        if(_.floor(partA%11===0)){
            sumPartA =lengthA +1;
            sum=sumPart+sumPartA;
            return sum;
        }else{
            sum=11+(lengthA-1);
            sum=sumPart+sumPartA;
            return sum;
        }
    }
}





module.exports = {
    dealString: dealString
};


