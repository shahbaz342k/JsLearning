// sdf

let user = {
    name: 'john doe',
    age:23,
    adress:{
        city:'Kan',
        
    },
    getAddress:function(){
            return 'address 123';
    }
    
}

/*let user2 = user; // in object assign its assign reference not value
user2.name = 'Jonnhy Shao'
console.log(user) // { name : 'Jonnhy Shao'}*/


// *************** Shalow copy ***************
// 1. 
let user2 = {...user}; 
// in object assign its assign reference not value
// 2. 
// let user2 = Object.assign({},user) // 
user2.name = 'Jonnhy Shao'
console.log(user) // { name : 'john doe'}
console.log(user2) // { name : 'Jonnhy Shao'}

// *************** Deep copy ***************
let user3 = JSON.parse(JSON.stringify(user));
console.log(user3) 




// shalow copy and deep copy
// in shalow copy we can copy the only main Object 
// in deep copy we can copy main and also the nested object


// What is the copy in shalow and deep copy
// In shalow and deep copy all values will be copy instead of memory locaiton.
