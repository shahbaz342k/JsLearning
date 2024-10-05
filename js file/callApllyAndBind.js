
const person1 = {
    firstName: 'John',
    lastName: 'Deo',
    printFullName: function(){
        console.log(this)
        console.log( this.firstName + ' ' + this.lastName )
    }
}


const person2 = {firstName:"Mohd", lastName:"Shahbaz"}
const person3 = {firstName:"Sahching", lastName:"Tendulatk"}
const person4 = {firstName:"Shomu", lastName:"Sings"}


personDetails = function (city, state) {
    console.log( 
        `${this.firstName} ${this.lastName} from ${city}, ${state} `
     )
}
// function borrowing
// call : Call method which is used to invoked a function directly by passing in the reference which point to this variable 
// inside the method.

// apply: It does the same thing, the only diff is it takes second arugument as an array whereas call method take second argument as
// as comma separated.
person1.printFullName.call(person2);

personDetails.call(person2,'Kanpur', 'U.P');
personDetails.apply(person3,['Mumbai', 'Maharashtra']);

// bind: It does not invoked directly it gives you a copy of exactly same method
// which can be invoked later.
personDetails.bind(person4,['Mumbai', 'Maharashtra']);


mul = function(a){

    return function (b){
        if( b ) return mul(a*b)
        return a
    }
    
    
}
const res = mul(2)(3)(5)(2)(6);
// const res1 = mul(2)(6)(4);
console.log('multipicatino is :', res())
// console.log('multipicatino is :', res1)