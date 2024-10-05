// get the palidrom using recursion

function helper ( s, start, end){
    if( start >= end ){
        return 1;
    }
    if( s[start] != s[end] ){
        return 0;
    }
    return helper( s, start+1, end-1 );
}
function palidromRec (mystring){

    let end = mystring.length-1;
    return helper(mystring, 0, end);

}
let str = 'abcba'
// console.log( palidromRec(str) )


/*
find the reverse array using recursion
*/
let arr = [1,2,3,4,5]
function hel(arr,start,end){
    let res=[];   
    if( start == arr.length-1 ){
        return res;
    }else{
        temp = arr[end];
        arr[start] = arr[end];
        arr[end] = temp;
        // console.log(temp);
        op = hel(arr, start+1, end-1);
        sd = res.push(op);
        
    }
    
    console.log(sd)
}
function reversArrRec( arr ){
    var reversed = [];
    function reverse( arr ){
        if( arr.length !== 0 ){
            reversed.push( arr.pop() );
            reverse(arr);
        }
        
    }
    reverse(arr);
    console.log(reversed);
    return reversed;
}
reversArrRec( arr )
