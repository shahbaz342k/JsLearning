
const myarr = [1,2,3,4,3,5,4,6,7,8]
// [1,2,3,4,3,5,4,6,7,8] // total elements : 10
// count the sum of largest consective digits of array
// num = 4 [ 4,6,7,8 ]
// o/p will be : 25;
// formula : total_elements - num + 1;
// array and num we take in our function

// two loop
// i for col and j for num
function getLargestSumOfConsecutiveDitgis( array, num ){
    if( num > array.length ){
        throw new Error(' number is greator than array ')
    }else{
        let max = 0;
        let mycondition = array.length - num + 1; // 7
        for (let i = 0; i < mycondition; i++) {
            let temp = 0;
            for (let j = 0; j < num; j++) {
                temp += array[i+j];
                console.log('i', i)
                console.log('j', j)
                console.log('temp', temp)
            }
            if( temp > max){
                max = temp;
            }
        }
        return max;
    }
}
// const myarr =[34,4,6,8,23,7]
// const res = getLargestSumOfConsecutiveDitgis(myarr,4);
// console.log(res)

// make a closure function 

function my(){
    var a = 10;
    // this is closure function
    return function b(){
        console.log(a);
    }
}
const x = my();
x()


