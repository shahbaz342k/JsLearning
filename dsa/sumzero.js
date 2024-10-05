// problems
// 1. [-5,-4,2,0,2,3,4,6,8] get the pair of this array whose sum is zero
const arr = [-5,-4,2,0,2,3,4,6,8];
// [?,?] result
function getPairofSumZero(arr){

    for (let number of arr) {
        // console.log(number);
        for (let index = 1; index < arr.length; index++) {
            // console.log(index, arr.length);
            if( number + arr[index] === 0 ){
                return [number,arr[index]]
            }
            
        }
    }
}
const res = getPairofSumZero(arr)
console.log(res)
// time complexity : o(n^2) quardratic