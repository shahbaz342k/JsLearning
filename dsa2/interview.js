// primitive data type in js are:
// Number, String, Boolean, Null, Symbol, Undefined

var y = 234;
var z = y;

/*
In the above example, assign operator knows that the value assigned to y is a primitive type (number type in this case),
 so when the second line code executes, where the value of y is assigned to z, the assign operator takes the
  value of y (234) and allocates a new space in the memory and returns the address. Therefore, variable z is not 
  pointing to the location of variable y, instead it is pointing to a new location in the memory.

var y = #8454; // y pointing to address of the value 234

var z = y; 
        
var z = #5411; // z pointing to a completely new address of the value 234
        */
// Changing the value of y
y = 23;
// console.log(z);  // Returns 234, since z points to a new address in the memory so changes in y will not effect z
// console.log(z)
// console.log(y)


// non primivitive data type in js is only object
var obj1 = { name: "Vivek", surname: "Bisht" };

var obj2 = obj1;

// In the above example, the assign operator, directly passes the location of the variable obj to the variable obj2. 
// In other words, the reference of the variable obj is passed to the variable obj2.

// var obj = #8711;  // obj pointing to address of { name: "Vivek", surname: "Bisht" }

// var obj2 = obj;
        
// var obj2 = #8711; // obj2 pointing to the same address 
        
        
// changing the value of obj1
        
obj1.name = "Akki";
        
// console.log(obj2);
        
// Returns {name:"Akki", surname:"Bisht"} since both the variables are pointing to the same address.


// ---------------------------------------------------

///////// Explain Higher Order Functions in javascript. ///////////////////////
// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
// example 1
function higherOrder(fnabc){
    // ............
    // ................
    fnabc()
}

// higherOrder(function() { console.log("Hello world from higher order function") });
//  example 2
function higherOrder2() {
    var a = 2;
    return function() {
      console.log(a);
    }
  }
          
  var x = higherOrder2();
//   x()   // Returns "Do something"
// ----------------------------

////////////  What is an Immediately Invoked Function in JavaScript? //////////////////
// An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.

// (function(){
//     console.log('immediate invoked function');
// })();

// -----------------------------------

// what is this keyword in js
// The “this” keyword refers to the object that the function is a property of.

// The value of “this” keyword will always depend on the object that is invoking the function.

function doSomething() {
    // a = 223;
    console.log('above this',this)
  
}
        
// x = doSomething();
// console.log(x());

/*
#explanations

In the above code, function is a property of which object?

Since the function is invoked in the global context, the function is a property of the global object.

Therefore, the output of the above code will be the global object. Since we ran the above code inside 
the browser, the global object is the window object.



// example
*/

var obj1 = {
  name : "Testname",
  address:"Mumbai",
  getName: function(){
    console.log(this.name); 
  },
  getAddress:function(){
    console.log(this.address)
  }
}
     
// var getName = obj1.getName;
// var obj2 = {name:"akshay",getName};
// console.log( obj2.name )

var getAddress = obj1.getAddress;
obj2 = {address:"Delhi", getAddress}
// console.log(obj2.getAddress())

/*
// ========================== call, apply and bind method ============================//
// It's a predefined method in javascript.

// 1. call() 
// This method invokes a method (function) by specifying
the owner object.
// syntax someFunction.call(obj)


// 2. apply()
// syntax someFunction.apply(obj)

 
// 3. bind()
This method returns a new function, where the value of 
“this” keyword will be bound to the owner object,
which is provided as a parameter.

*/


//  something.call(params)

// function someFun(){
//   console.log("Hello",this.name)
// }
// var person = {name:'heny'};
// someFun.call(person)
// someFun.apply(person)
// const sb = someFun.bind(person) // bid return function


// console.log(sb)
var person = {
  age: 23,
  getAge:function (){
    console.log(this.age)
  },
  message: function (message) {
    console.log(message)
  }
}
function sonemfun(msg){
  console.log( 'this is msg: '+ msg ) ;
}
// person.getAge()
var person2 = {age:32};
// person.getAge.call(person2)
// person.getAge.apply(person2)
person.getAge.call(person2, 'this is my age')
person.message.call(person2, 'this is my age from call method')
person.message.apply(person2, ['this is my age from apply method'])

sonemfun.call('','hello apply')
sonemfun.apply('',['hello bind']);