// make protoType of map, filter, reduce  
const arr = [1,2,3,4,5];


// myMap 
// map(val, index, array)
Array.prototype.myMap = function(mapcb){
	let result = [];
	for( let i = 0; i < this.length; i++ ){
		result.push( mapcb(this[i], i, this) );
	}
	return result;
}

// const res = arr.myMap( (val) => val * 2);
// console.log( res );  


// myFilter 
// filter(val, index, array)
Array.prototype.myFilter = function(filterCb){
	let result = [];
	for( let i = 0; i < this.length; i++ ){
		if( filterCb(this[i], i, this) ) result.push( this[i] );
	}
	return result;
}

const res = arr.myFilter( (val) => val > 3)
// const res = arr.myMap( (val) => val * 2).myFilter( (val) => val > 3);
// console.log( res );  

// arr.reduce( (acc, val, i, arr) => {}, initialValue)
Array.prototype.myReduce = function(reduceCb, initialValue){
	let res = 0;
	let acc = initialValue;
	for( let i = 0; i < this.length; i++ ){
		// res = res + reduceCb(acc, this[i], i, this) 
		acc = acc ? reduceCb(acc, this[i], i, this) : this[i] 
	}
	return acc;
}
const sum = arr.myReduce( (acc, val) => (acc+val),1 );
const finalRes = arr.myMap( (val) => val * 2).myFilter( (val) => val > 3).myReduce( (acc, val) => (acc+val), 0);
console.log( finalRes )


Array.prototype.myMap = function(cb){

	let result = [];

	for(let i=0; i<this.length; i++){
		result.push( cb(this[i], i, this) )
	}
	return result;
}

Array.prototype.myFilter = function(cb){
	let result = [];
	for( let i=0; i<this.length; i++){
		if( cb(this[i], i, this) ) result.push(this[i])
	}
	return result;
}

Array.prototype.myReduce = function(cb, initialValue){

	let acc = initialValue;
	for(let i = 0; i<this.length; i++){
		acc = acc ? cb(acc, this[i], i, this) : this[i];
	}
	return acc;
}