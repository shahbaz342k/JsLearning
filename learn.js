//////////////////////// reverse word string with custom function /////////////////////////////

let mystring = "Welcome to this Javascript Guide!";

const getLengthOfString = mystring.length;
// console.log(getLengthOfString)

// function getReverseString(str){
//     let newReverseString = '';
//     for (let index = getLengthOfString-1; index >= 0 ; index--) {
//         const element = mystring[index];
//         newReverseString += element; 
//     }
//     return newReverseString;
// }
// console.log(getReverseString(mystring))

function getRevWordStr(mystr){
    // mystr.slice
    const lastWord = mystr.split(' ').pop();
    // console.log(lastWord); 
        let word = "";
        let revWord = "";
        let revWordString = "";
        // let countSpace = 0;
        
        for (let index = 0; index < mystr.length; index++) {
            let element = mystr[index];
            if( mystr[index] == " "){
                // countSpace++;
                for (let chilIndex = revWord.length-1; chilIndex >= 0; chilIndex--) {
                    const element = revWord[chilIndex];
                    revWordString += element;
                    
                }
                revWordString = revWordString + " ";
                word = "";
                revWord="";
            }else{
                word +=element
                revWord = word;
            }
            
        }
        for (let lastwordindex = lastWord.length-1; lastwordindex >= 0;  lastwordindex--) {
            const element = lastWord[lastwordindex];
            revWordString += element;
            
        }
        return revWordString;
        
    
}
// console.log(getRevWordStr(mystring));


//////////////////////////// Built in function with reverse word string /////////////////////


var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
console.log(reverseEachWord)
console.time(getRevWordStr(mystring));
    //    console.log( myMemoizeCalSumProduct(12312,2234) );
    //    console.timeEnd('first call');
const myobj = {
    name: "John doe",
    age: 23,
    country: "india"
}
console.log(typeof myobj)

// How would you check if a number is an integer?

// Answer
// A very simply way to check if a number is a decimal or integer is to see if there is a remainder left when you divide by 1.

function isInt(num) {
  return num % 1 === 0;
}

//console.log(isInt(4)); // true
//console.log(isInt(12.2)); // false
//console.log(isInt(0.3)); // false


// problem ques
/* for (var i = 0; i < 5; i++) {
    function myfn(i){
        setTimeout(() => {
            console.log(i)
            // console.log(i*2000)
        }, i*2000);
    }
    myfn(i)
    
} */



let myStr = 'My name is Shahbaz'
// function getRevWordStr(mystr){

//     const lastWord = mystr.split(' ').pop();
//     // console.log('lastWord',lastWord)
//     let revWord="";
//     let revWordString="";

//     for(let i=0; i<mystr.length; i++){
//         let elementI = mystr[i];
//         if( mystr[i] == " "){
            
//             // console.log('if ')
//             for(let j=revWord.length-1;j>=0;j--){
//                 revWordString += revWord[j];
//             }
//             revWordString = revWordString + " ";
//             revWord="";
//         }else{
//             // console.log('else ')
//             revWord += elementI;
//         }
//     }  
//     for( let lstw = lastWord.length-1; lstw>=0;lstw--){
//         revWordString += lastWord[lstw]
//     }
//     console.log(revWordString)
    
// }
// getRevWordStr(myStr)



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
    for( ls = lastWord.length-1; ls >=0; ls-- ){
        revWordString += lastWord[ls];
    }
    console.log(revWordString)
    return revWordString;
}
getRevWordString( myStr );