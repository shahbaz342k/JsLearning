// how to make time complexity to linear
// now we will check array left one elment and right one elment
// match the condtion
function improvisegetPairofSumZero(arr){
    let left = 0; // index 0
    let right = arr.length-1 // last index of arr

    for (let index = 0; index < arr.length; index++) {
        const checkRes = arr[left] + arr[right];
        if ( checkRes == 0 ){
            return [
                arr[left],arr[right]
            ]
        }else if( checkRes > 0 ){
            right --
        }else if( checkRes < 0 ){
            left++;
        }
        
    }
}
console.log('imporve version')
const resimp = improvisegetPairofSumZero(arr)
console.log(resimp)

// time complexity : o(n) so its leanear