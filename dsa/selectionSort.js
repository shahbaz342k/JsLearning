// in this we can consider min value is 0 index of array and then compare in inner loop j
function selectionSort(arr){
    
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        // console.log('pointer', arr[i])
        for (let j = i+1; j < arr.length; j++) {
            // console.log(1)
            if( arr[j] < arr[min] ){
                min = j;
                // console.log('min',min)
            }
        }

        // swapping value
        if(i!==min){
            // console.log('min ',min)
            // console.log('i ',i)
            temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
            // console.log(arr)
        }       
    }

    // for (let i = 0; i < array.length; i++) {
    //     let min = i;
    //     for (let j = i+1; j < array.length; j++) {
    //         if( arr[j] < arr[min] ){
    //             min = j;
    //         }
    //     }    
    //     if( i!== min ){
    //         let temp = arr[i];
    //         arr[i] = arr[min];
    //         arr[min] = temp
    //     }
    // }
    return arr
}
let arr1 = [32,2,4,6,1,8,0];

const res = selectionSort(arr1);
console.log('selection sort')
console.log(res)
/*           P(pointer)
// case 1 : [32,2,4,6,1,8,0],  res 1: [0,2,4,6,1,8,32] change
               P
// case 2 : [0,2,4,6,1,8,32],  res 2: [0,1,4,6,2,8,32] change
                 P
// case 3 : [0,1,4,6,2,8,32],  res 3: [0,1,2,6,4,8,32] change
                   P
// case 4 : [0,1,2,6,4,8,32],  res 4: [0,1,2,4,6,8,32] change
                     P                   
// case 5 : [0,1,2,4,6,8,32],  res 5: [0,1,2,4,6,8,32] no change
                       P
// case 6 : [0,1,2,4,6,8,32],  res 6: [0,1,2,4,6,8,32] no change
                         P
// case 7 : [0,1,2,4,6,8,32],  res 6: [0,1,2,4,6,8,32] no change

 now loop end

*/



