
function BinarySearch(arr,targetEl){
    var min = 0;
    var max = arr.length-1;
    var mid;
    while( min <= max ) {
        mid = Math.floor((min+max)/2);
        // console.log('loop run for min : ',min)
        // console.log('loop run max : ',max)
        if( targetEl == arr[mid] ){
            console.log('array lenth ',arr.length)
            return 'index : '+ mid;
        } else if( targetEl > arr[mid] ){
            // 8 > 4
            min = mid+1;
        }else{
            // 8 < 23
            max = mid-1;
        }
    }
    return -1;
}
var arr = [3,5,6,8,9,23,45,67,80];
// targetEl = 67;
// console.log( BinarySearch(arr,23));
// while( 0<=8 ), i = 1; mid = 0+8/2 => 4 , if(23 == 9) not, else if( 23 > 9 ) yes then min = 4+1 => 5
// while( 5<=8 ), i = 2; mid = 5+8/2 => 6 , if(23 == 45) not, else if( 23 > 45 ) no else max = mid-1;
// while( 5<=7 ), i = 3; mid = 5+7/2 => 6 , if(23 == 45) not, else if( 23 > 45 ) no else max = mid-1;
// while( 5<=6 ), i = 4; mid = 5+6/2 => 5 , if(23 == 23) return mid;


// console.log( BinarySearch(arr,67));
// while( 0<=8 ), i = 1; mid = 0+8/2 => 4 , if(67 == 9) not, else if( 67 > 9 ) yes then min = 4+1 => 5
// while( 5<=8 ), i = 2; mid = 5+8/2 => 6 , if(67 == 45) not, else if( 67 > 45 ) yes then min = 6+1 => 7
// while( 7<=7 ), i = 3; mid = 7+7/2 => 7 , if(67 == 67) yes return mid;

function binarySearchRecursion(arr, key, min, max){
    // console.log(arr,key, min, max)
    i=1;
    if( min > max ){
        return -1
    }
    var mid = Math.floor((min+max)/2);
    // console.log('mid', mid)
    if( key == arr[mid] ){
        return 'idx : '+mid;
    }
    if( key > arr[mid] ){
        return binarySearchRecursion( arr, key, mid+1, max );
    }
    return binarySearchRecursion( arr, key,min, mid-1 )
    
}

// console.log(binarySearchRecursion(arr,33,0,arr.length-1))
/* 
key = 6;
1st et
if( 0 > 8 ), mid = 0 +8/ 2 = 4 , if( 6 > 9 ) no then if( 6 < 9 ) yes binarySearchRecursion(low, mid-1)
2nd et
if( 0 > 3 ), mid = 0 +3/ 2 = 1 , if( 5 == 6 ) if( 6 > 5 ) yes binarySearchRecursion(mid+1,high)
3rd et 
if( 2 > 3 ), mid = 2 + 3/ 2 = 2 , if( 6 == 6 ) yes return mid;
*/

function binaraySrch(array, element){

    let min = 0;
    let max = array.length-1;
    let mid;

    while( min <= max ){

        mid = Math.floor((min+max)/2);
        if( element === array[mid] ){
            return mid;
        }else if( element > array[mid]   ){
            min = mid+1;
        }else {
            max = mid-1;
        }
    }
    return -1;
}

let res = binaraySrch(arr,90)
console.log(res)

// map and foreach 
let resmap  = arr.map( (item) => item *3 );
console.log(resmap)
console.log('before not use for each :', arr)

arr.forEach( (item,key,arr) => {
    arr[key] = item *2;
})
console.log(arr)
console.log('after use for each :', arr)


 //-------------------------

const myArray = new Array(2);
myArray[1] = 1
myArray[3] = 3

console.log('length', myArray.length);

console.log('Elemnts');
for( const element of myArray ){
   console.log('\t', element)
}

//-------------------------

const arr3 = [];

try{
   arr3.push('try');
   throw new Error()
}catch(err){
   arr3.push('catch')
}finally{
   arr3.push('finally')
}

 //-------------------------

// console.log(arr3)
// The yield* expression in JavaScript is used when one wants to delegate some other iterable object.
function* gen1(){
    console.log(yield 1)
    console.log(yield 2)
    console.log(yield 3)
}
 const itreator = gen1()
 console.log(itreator.next('a').value)
 console.log(itreator.next('b').value)
 console.log(itreator.next('c').value)


 //-------------------------
 async function apiCall(){
    return new Promise( resolve => {
       setTimeout( () => {
          resolve('b')
       },50)
    });
 }
 async function logger()  {
    setTimeout( () => console.log('a'),10)
    console.log( await apiCall() );
    console.log('c')
 }
 
 logger()
 

 

 total = 1; let num1 = [1, 2, 3,]; 
function output(total, value) { return total * value; }

let num2 = num1.reduce(output);