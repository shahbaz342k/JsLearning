const arr = [1,2,3,4,8,9,12,15,19,23,24,26,29,33]

const isEven = (n) => {
  return n % 2 == 0;
}
let res = arr.filter( (item) => isEven(item) ) 
console.log(res);
let sumAllofEven = arr.reduce( (acc,val) => (val%2===0 ? val+acc : acc), 0) 
console.log('sum of all even numbers is ', sumAllofEven)



const arr = [2,8,1,7,21,34,3,9]
console.log(arr.length)
// find the length of arr without using js built function
function getLength(arr){
    let len=0;
    while(arr[len] != null){
        len=len+1
    }
    return len;
}
const len = getLength(arr);
console.log(len)




/ sort array without using built in function in js

const arr = [2,8,1,7,21,34,3,9]
// find the length of arr without using js built function
function getLength(arr){
    let len=0;
    while(arr[len] != null){
        len=len+1
    }
    return len;
}
// const len = getLength(arr);

function customSort(arr, type='asc'){
    let len = getLength(arr);
    for(i=0;i<len;i++){
        for(j=0;j<len-i-1;j++){
            if( type == 'desc' ){
                if(  arr[j] < arr[j+1]  ){
                    let temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = temp
                }
            }else{
                if(  arr[j] > arr[j+1]  ){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp
                }
            }
            
        }
    }
    console.log(arr)
    return arr;
}
customSort(arr,'desc')