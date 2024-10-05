
/* console.log("start")

document.getElementById("name").addEventListener( "click", function cb(e) {
    e.preventDefault()
    console.log('clallback')
});

console.log('end'); */

//  call stack /// 

// whenever js program run then global executoion of context is created in call stack


// web api ///

// * setTimout()
// * DOM API -> 
// * fetch()
// * console()

//  callback queue // 

//  cb()

// event loop continously check call stack is empty or not 
//  if yes then it takes the task from callback queue and put inside the call stack
// becoz call stack take only one task at a time


console.log('new start')
setTimeout(cbt = () => {
    console.log("CB setetimout")
}, 100);
fetch('https://jsonplaceholder.typicode.com/todos/')
.then( response => response.json() )
.then( jsn => console.log(jsn))
console.log('new end')



















/*

I am mohd shahbaz form Kanpur U.P, i have 4.7 year experience as a software developer, I started my career as a PHP
developer and i worked on different types of projects like blog, ecommerce, appointement schedule etc
i have 3+ experience in php now working as a react js developer since july 2021 in my current company
In react js i have done 2 projects one ecommerce and other one was small project like personal website only for contact us.
I have also knoledge about node js 


*/
