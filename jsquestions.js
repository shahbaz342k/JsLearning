// Hey guys new Javascript question here 
// find non-repetitive numbers, that are only once in a given array.
// Input: [2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5]
// Output: [9, 1]

const arr = [2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5]
function getNonRepeatNumber(arr){
	const len = arr.length;
	const datahashmap = {};
	const result = [];

	for( let i = 0; i < len; i++ ){

		// check if item already exist in hashmap, only increment by 1
		if( datahashmap[arr[i]] ){

			datahashmap[arr[i]] = datahashmap[arr[i]] + 1;

		}else{
			// add value 1 in hashmap  
			datahashmap[arr[i]] = 1;
		}
		
	}

	//console.log(datahashmap) // { '1': 1, '2': 3, '3': 3, '4': 2, '5': 2, '9': 1 }

	for( let i = 0; i < len; i++ ){
		// now check thow key whose value 1 then push that in result 
		if( datahashmap[arr[i]] == 1 ){
			result.push(arr[i])
		}
		
	}
	return result;

}
const res = getNonRepeatNumber(arr);
console.log(res) // [9, 1]