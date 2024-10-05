const promise1 = new Promise((resolve, reject)   => {

	setTimeout( () => {
		resolve('1st promse done');
	},4000)
});

const promise2 = new Promise((resolve, reject)   => {

	setTimeout( () => {
		resolve('2nd promse done');
	},500)
})

const promise3 = new Promise((resolve, reject)   => {

	setTimeout( () => {
		resolve('3rd promse done');
	},200)
});


// # promise chaining 

// promise1.then( (data1) => {
// 	console.log(data1);
// 	promise2.then( (data2) => {
// 		console.log(data2);
// 		promise3.then( (data3) => {
// 			console.log(data3)
// 		}).catch( err => console.log(err) ) 
// 	}).catch(err => console.log(err) )
// }).catch( err => console.log(err) )


// removing promise chaning from using async and await

function one() {
	const promise1 = new Promise((resolve, reject)   => {

		setTimeout( () => {
			resolve('1st promse done');
		},300)
	});
	return promise1

}

function two() {
	const promise2 = new Promise((resolve, reject)   => {

		setTimeout( () => {
			// resolve('2nd promse done');
			reject('2nd promse reject');
		},500)
	});
	return promise2
}

function three() {
	const promise3 = new Promise((resolve, reject)   => {

		setTimeout( () => {
			resolve('3rd promse done');
		},200)
	});
	return promise3
}

const result =  async () => {
	// this is for handle promise sequentially 
	// means one after another
	try{
		const res1 = await one();
		const res2 = await two();
		const res3 = await three();
		console.log(res1);
		console.log(res2);
		console.log(res3);
	}catch(err){
				console.log(err);

	}
	
}
// result();


const result1 =  async () => {

	let loading = true
	// this is for handle promises parallelaly 
	try{
		const res = await Promise.all([one(), two(), three()])
		console.log(res);
	}catch(err){
		console.log(err);
	}finally{
		loading = false // finally is used for when promise is resolved or reject then 
	}
	
}
// result1();


// for debugging and getting all info when call promise.allsetteled
const result2 =  async () => {

	try{
		const res = await Promise.allSettled([one(), two(), three()])
		console.log(res);
		// Promise.allSettled is does not wait for 
		// promise reject or resolve. Whatever happens 
		// it will take the value and store that and return the response in array 
		// [
		//   { status: 'fulfilled', value: '1st promse done' },
		//   { status: 'rejected', reason: '2nd promse reject' },
		//   { status: 'fulfilled', value: '3rd promse done' }
		// ]
	}catch(err){
		console.log(err);
	}
	
}
result2();