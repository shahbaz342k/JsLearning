//  anagram
// "hello" => "lleho" like both length is 5 and ll is 2 times, h is 1 time and so on...
// {h:1,e:1,ll:2,o:1}
// both string length and character will be equal

// ans
// first check both string length should be equal
// sting hello 
// {h:1,e:1,ll:2,o:1}

const string1 = "Hello";
const string2 = "lehlo";
function isAnagram ( str1, str2 ){

    var str1 =  str1.toLowerCase() // convert string 1 to lowercase;
    var str2 =  str2.toLowerCase(); // convert string 2 to lowercase;

    // check both string length is equal 
    if ( str1.length == str2.length ){
        // return true
        let countres = {};

        for( let letter of str1 ){
            countres[letter] = (countres[letter] || 0) +1;
        }
        
        for (let items of str2){

            if ( countres[items] ){
                countres[items]--
            }else{
                // console.log('check false condition', countres[items])
                return false;
            }
        }

        return true; // angaram

    }else{
        return false; // not anagram
    }
}
const res = isAnagram( string1, string2 );
console.log(res)
// time complexity in leaner because there is no nested loop using here


//  using javascript function check string anagram or not
// Points
// first both length check
// convert to lower case both string
// create array from string.
// sort array elements
// now revert the sort array to string
// check both are equal or not

function checkIsAnagram(str1, str2){

    // convert to lower case both string
    let firstStr = str1.toLowerCase();         
    let secondStr = str2.toLowerCase();  

    // first both length check
    if( firstStr.length === secondStr.length ){
        //  create array from string.
        // sort array elements
        // now revert the sort array to string
        firstStr = firstStr.split("").sort().join(""); 
        secondStr = secondStr.split("").sort().join("");

        // check both are equal or not 
        return firstStr === secondStr;

    }else{  
        return false;
    }

}

const res1 = checkIsAnagram(string1, string2);
console.log(res1)


