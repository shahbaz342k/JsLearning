// check if value of array is odd then move to that value to odd index
// check if value of array is even then move to that value to even index

N = 6
arr = [3, 6, 12, 1, 5, 8]

function reArrange(arr, size){

	let myIndex;
	for( let i = 0; i<size; i++ ){

		if( arr[i]%2==0 && i%2 !=0 ){
			console.log(arr[i])
			myIndex = i;
			temp = arr[myIndex-1];
			arr[myIndex-1] = arr[i];
			arr[i] = temp;
		}
	}
	console.log(arr)
	return arr
}

// reArrange(arr, N)

arr2 = [9, 3, 8, 8] //[1, 2, 3, 4]
reArrange(arr2, 4)

// [6,3,12,1,8,5]


// arr2 = [1, 2, 3, 4]
		// 0, 1, 2, 3 // index
// [2,1,4,3]