// find two elements in array whose sum is equal to given number
const arr = [2,5,12,8,0,33,4,8,1,7,21];
const num =12;

function getSumTwoElementsWhoseSumEqualToNum(arr, num){
    const len = arr.length;
    let res = false;
    let resValues = [];
    let number=0;
    outerLoop:for(let i=0; i<len; i++){ 
        innerLoop:for(let j=i; j<len; j++){
            let sum = arr[i] + arr[j];
            console.log( 'arr[i] ',arr[i], ' arr[j] ',arr[j], ++number)
            if( sum == num && (arr[i] != num) && (arr[i]!= 0 || arr[j] !=0) ){
                res = true;
                resValues.push(arr[i]);
                resValues.push(arr[j]);
                break outerLoop;
            }
        }
    }
    console.log( res, resValues );
    return res;
}
getSumTwoElementsWhoseSumEqualToNum(arr, num)


// find the duplicate element count in the given array 

const arr = [4,5,6,4,2,2,7,8];

// const res = arr.filter( (item) => (item == ))
function getDuplicateItemsCount(arr){
    let res = {};
    let output = 0;
    for(let i = 0; i < arr.length; i++){
         
         if( res[arr[i]] ){
             res[arr[i]] = res[arr[i]] + 1
         }else{
             res[arr[i]] = 1; 
         }
         
         
        
    }
    // console.log(res);
    for(let i = 0; i < arr.length; i++){
         
         if( res[i] > 1 ){
            output += res[i] 
        }
    }
        console.log(output);
    
}
getDuplicateItemsCount(arr)