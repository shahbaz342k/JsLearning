// get the o/p 2 of ppwer of n

function getPowerOfData(n){

    // base case 
    if( n==1 ){
        return 2;
    }

    // recursive call
    let recCall = getPowerOfData(n-1);

    // small calculation
    let finalRes = 2 * recCall;
    return finalRes;
}
// let op = getPowerOfData(9);
// console.log(op)



/* fibanoici series */
function fibanoiciByRec(n){

    // base case n=1 return 1 and n=0 return 0
    if( n==1 ){
        return 1;
    }
    if( n==0 ){
        return 0;
    }

    // rec calls
    let recCall1 = fibanoiciByRec(n-1);
    let recCall2 = fibanoiciByRec(n-2);

    // small cal
    let res = recCall1 + recCall2;
    return res;
}
let fop = fibanoiciByRec(7);
console.log(`${fop} is the 7th number of fibonacci series`); 
// 0,1,1,2,3,5,8












