// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

const lengthOfLongestSubstring = (str) => {
    // we can use sliding window technique

    if( !str ){
        return 0;
    }
    let start=0;
    let end=0;
    let maxLen = 0;
    let strLen = str.length;

    let uniqueChars = new Set();

    while( end < strLen ){

        if( !uniqueChars.has(str[end]) ){
            uniqueChars.add(str[end]);
                        console.log('if cond : ',uniqueChars)

            end++;
            maxLen = Math.max(maxLen,uniqueChars.size);
        }else{
            console.log('else cond : ',uniqueChars)
            uniqueChars.delete(str[start]);
            start++;
        }
    }
    console.log('last : ', uniqueChars);
    return maxLen;
}
const s = "abcabcbb" // abc: 3;
const s1 = "pwwkew" // wke :3;
const s2 = "krtwwbt" // wbt : 3 ;
console.log( lengthOfLongestSubstring(s1) );