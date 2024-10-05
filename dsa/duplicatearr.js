// arr = [1,2,3,4,5] and result is duplicate(arr) // output [1,2,3,4,5,1,2,3,4,5]
let arr = [1,2,3,4,5]
function duplicateArr(arr){
    return arr.concat(arr);
}
// console.log( duplicateArr(arr) )

function customDuplicateArr(arr){
    let res = [];
    let lastIndex = arr.length-1;
    for (let index = 0; index < 2; index++) {
        for (const iterator of arr) {
            res.push(iterator)
        }
    }
    
    return res;
}
console.log( customDuplicateArr(arr) )

let newarr = {...arr};
// console.log(arr.join(','))   
let binaraArr = arr.map( (item) => item.toString(2) );
console.log(binaraArr)

// filter out the value using arr
console.log(arr.filter( (x) =>  x % 2 ));

// reduce method with arr
// console.log( arr.reduce( (sum,x) => sum+x, 0 ) )
const op = arr.reduce( (max,acc) => {
    if( acc > max ){
        max = acc;
    }
    return max
}, 0 );

console.log( op )
// 