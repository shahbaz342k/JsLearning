let myStr = 'My name is Shahbaz'
// yM eman si zabhahS
function getRevWordString( str ){
    
    const lastWord = str.split(" ").pop();
    // console.log(lastWord);
    let revWord = "";
    let revWordString="";
    
    for( let i=0; i<str.length; i++){
        let elementI = str[i];
        // check str has space and perform logic
        if( str[i] == " "){
            
            for(let j = revWord.length-1; j>=0; j-- ){
                revWordString += revWord[j];
            }
            // remove space from revWordString 
            revWordString = revWordString + " ";
            
            // empty the revWord
            revWord = "";
            
        }else{
            revWord += elementI
        }
    }
    // for last Word logic
    for( ls = lastWord.length-1; ls >=0; ls-- ){
        revWordString += lastWord[ls];
    }
    console.log(revWordString)
    return revWordString;
}
getRevWordString( myStr );
// json.stringify()


const myobj = {
    a:1,
    b:2,
    c:{
        d:4
    }
}

console.log(myobj)
let myobj2 = JSON.stringify({...myobj})
myobj2.a = 44;
myobj2 = JSON.parse(myobj2);
myobj2.c.d = 33;
console.log(myobj2)
console.log('aff', myobj)


// const arr = [2,34,5,6];
// arr.length = 0;
// delete arr[2]
console.log('>>>', arr.length)





// const arr = [2,34,21,11,4];
// arr.length = 0;
// delete arr[2]
// console.log('>>>', arr.length)





// find the second largest element of array
// # without using built in function javascript
const arr = [2,34,21,11,4];

function mySortArr(arr){
    
    for( let i=0; i<arr.length;i++){
        
        for( j=0; j<arr.length-i-1; j++ ){
            if( arr[j+1] < arr[j] ){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    // console.log(arr)
    return arr;
}


function getSecondLargestElement(arr){
    mySortArr(arr);
    let max = arr[0];
    console.log(arr)
    let n = arr.length-1;
    console.log( arr[n-1] )
    for( let i=0; i<arr.length; i++ ){
        if( arr[i] > max ){
            max = arr[i]
        }
    }
    // console.log(max)
}
// getSecondLargestElement(arr)

// # using js built in function get second max
var secondMax = function (arr){ 
    var max = Math.max.apply(null, arr) // get the max of the array
   
    var maxi = arr.indexOf(max);
    arr[maxi] = -Infinity; // replace max in the array with -infinity
    
    var secondMax = Math.max.apply(null, arr); // get the new max 
     console.log(secondMax)
    arr[maxi] = max;
    console.log(arr)
    // console.log(secondMax)
    return secondMax;
};
secondMax(arr)







const str = "hello world"

function getMaxOccurenceLetter(str){
    let strObj = {}
    let maxOccur; 
    
    for( let i=0;i<str.length;i++){
        if( !strObj[str[i]] ){
            strObj[str[i]] = 0;
        }
        strObj[str[i]]++;
    }
    
    // check if key exists
    // const hasKey = ' ' in strObj;
    // if(hasKey) {
    //     delete strObj[' ']
    //     console.log('The key exists.');
    // }
    
    let allVal = Object.values(strObj);
    maxOccur   = Math.max.apply(null,allVal)
    let res    = Object.keys(strObj).find( (key) => strObj[key] == maxOccur );
    console.log(res,":", maxOccur)
    return res,":", maxOccur;
    
}
getMaxOccurenceLetter(str)









