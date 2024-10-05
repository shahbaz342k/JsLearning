function leanerSearch(array, searchElement){

    for (const item of array) {
        
        if( searchElement === item ){
            return true;
        }
    }
    return false;
}
var arr = ['abc','test','xyz']
const se = leanerSearch(arr,'xyz');
console.log(se)