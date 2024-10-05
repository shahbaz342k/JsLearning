const arr = [2,4,55,2,6,7,4,8,55,2,7]
const data = new Map();

// data.set('name','John Doe');
// data.set('age',33);
// data.delete('name')
// console.log( data.get('name') )

for (let i=0; i < arr.length; i++) {

	if( data.has(arr[i]) ){
		let prevVal = data.get(arr[i]);
		// console.log(prevVal)
		data.set(arr[i],prevVal+1)
	}
	else{
		data.set(arr[i],1);
	}
}
// output : {2:2,3:1,4:2,6:1,7:1,8:1,55:2}
console.log(data)

// Hi Gyus, In Javascript how we can get the occurence of element in array using Map data structure.
// { 2 => 3, 4 => 2, 55 => 2, 6 => 1, 7 => 2, 8 => 1 }

// return third highest and third lowest element of given array
const arr2 = [2,4,1,3,99,44,5,20,8,63];

const myCusFnc = (arr) =>{

	let len = arr.length;
	// sorting arr
	arr2.sort( (a,b) => a-b)
	
	let thirdHigestEl = arr[len-2];
	let thirdLowestEl = arr[2];
	console.log('hig : ',thirdHigestEl);
	console.log('low :', thirdLowestEl );
	// for( let i=0; i<len; i++ ){
	// 		}
	// }

}