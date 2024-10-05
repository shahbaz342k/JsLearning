/* call stack :  The Call Stack tracks function calls. It is a LIFO stack of frames. 
 Each frame represents a function call.

  The Call Stack is a fundamental part of the JavaScript language.
  It is a record-keeping structure that allows us to perform function calls. 
  Each function call is represented as a frame on the Call Stack. 
  This is how the JavaScript engine keeps track of which functions have been called and in what order. 
*/

// event loop : 
/* event loop continously check is call stack empty or not 
   if yes then it takes the task from call back queue (task queue) and put inside call stack
   becoz call stack take only one task at a time.
*/

// Task Queue : ( Callback queue) 
/*
    The Task Queue is a FIFO queue of Tasks that are going to be executed by the Event Loop. 
    Tasks are synchronous blocks of code that can enqueue other Tasks while they're running.
*/

// Microtask Queue : 
/* The Microtask Queue was added in ES6 to handle Promises. It's a lot like the Call Stack.
 The main difference is how Microtasks are enqueued and when they are processed.
 Micro task queue is handle the promise callback function
 */

 // web api ///

// * setTimout()
// * DOM API -> 
// * fetch()
// * console()