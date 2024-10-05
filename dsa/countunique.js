// arr = [1,1,2,2,3,4,4,5,5,6,7,8]

// output will be : 8 

const arr = [1,1,2,2,3,4,4,5,5,6,7,8,5,6,9,13,54]

function getUniqueCountOfArr( arr ){
    let temp = [];
    let res = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if( !temp.includes(element) ){
            temp.push(element)
        }
    }
    
    return temp.length
}

// console.log(getUniqueCountOfArr( arr ))
// console.log("first".length)

const users = [
    {firstName: "John", lastName: "doe", age:34},
    {firstName: "Shaun", lastName: "smith", age:32},
    {firstName: "Lauren", lastName: "desop", age:18},
    {firstName: "Steve", lastName: "harmission", age:23},
]
const output = users.map( (item) => `${item.firstName}  ${item.lastName}` );
// console.log(output)


var firstWord = "heytnty";
var secondWord = "nheyytdt";



function isAnagram(first, second) {
  // For case insensitivity, change both words to lowercase.
  var a = first.toLowerCase();
  var b = second.toLowerCase();

  // Sort the strings, and join the resulting array to a string. Compare the results
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");
//   console.log(b)

  return a === b;
}

console.log( isAnagram(firstWord, secondWord) ); // true

// //  Q12: How would you use a closure to create a private counter? ////////////
// function counter() {

//     var _counter = 0;
//     return {
//         add: function(n){
//             _counter = _counter + n;
//         },
//         retrive: function(){    
//             return 'The counter is currently at: ' + _counter;
//         }
//     }
// }
// let c = counter();
// c.add(4);
// c.add(49);
// console.log( c.retrive() )



var y = 1;
if (function f() { }) {
  y += typeof f;
}
console.log(y); // we get 1undefined because fn f() is created at run time of program
// console.log(typeof f); 




(function() {
    var b = 1
    var a = b;
    b = 4;
    console.log(a);
    console.log(b);
})();
  
 console.log(b); // we get b=5 becoz in function block b is not decalred var b = 5 so it comes to global scope

 