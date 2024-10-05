// in this algo inintial iteration of array, the largest element move in the last  

function bubbleSort(arr){
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        // console.log('1')
        for (let j = 0; j < n-i-1; j++) {
            // console.log('1')
            if( arr[j] > arr[j+1] ){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
                
            }
        }       
    }
    return arr;
}

function bubbleSort1(arr){
    const n = arr.length;
    var startTime = performance.now()    

    for (let i = 0; i < n; i++) {
        // console.log('1')
        for (let j = 0; j < n-i-1; j++) {
            console.log('1')
            if( arr[j] > arr[j+1] ){
                // // swap using 3rd variable
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 

                // without using 3 rd variable sorting
                // [arr[j],arr[j+1]] = [ arr[j+1], arr[j] ];
                
            }
        }       
    }
    var endTime = performance.now()

    console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
    return arr;
}

let arr1 = [32,2,4,6,1,8,0];
let arr2 = [54,3,4,5,8,9];
console.log('bubble sort')
const res = bubbleSort(arr2);
console.log(res)


// console.log('new start')
// setTimeout(cbt = () => {
//     console.log("CB setetimout")
// }, 1000);
// fetch('https://jsonplaceholder.typicode.com/todos/')
// .then( response => response.json() )
// .then( jsn => console.log(jsn))
// console.log('new end')

 function adVanceBubbleSort(arr){

    let n = arr.length;
    var startTime = performance.now()    
    for (let i = 0; i < n; i++) {
        let isSwapped;
        for (let j = 0; j < n-1-i; j++) {
            console.log('1')
            // condition
            if( arr[j] > arr[j+1] ){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true
            }
        }
        if( !isSwapped ){
            break;
        }
    }
    
    var endTime = performance.now()

    console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
    return arr;
 }
 const adres = adVanceBubbleSort(arr2);
 console.log('advance bubble sort')
console.log(adres)

