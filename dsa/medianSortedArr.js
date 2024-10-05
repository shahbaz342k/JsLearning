/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    let mergeArr=[];
    let m = nums1.length;
    let n = nums2.length;
    let middleElemnts;
    
    for( let i=0; i<m; i++ ){
        mergeArr.push(nums1[i]);
    }
    for( let i=0; i<n; i++ ){
        mergeArr.push(nums2[i]);
    }
    mergeArr = mergeArr.sort();
    if( (mergeArr.length)%2==0 ){
        //even
        console.log('even')
        console.log('mergeArr[0]', mergeArr[0]);
        console.log('(mergeArr.length-1)/2',(mergeArr.length-1)/2)
         middleElemnts = mergeArr[0]+(mergeArr.length-1)/2;
        // console.log(middleElemnts)
        if ( mergeArr[Math.round(middleElemnts)] == 0 ){
        	middleElemnts = 0;
        }
    }else{
       // odd
        console.log('odd')
        console.log('mergeArr[0]', mergeArr[0]);
        console.log('(mergeArr.length-1)/2',(mergeArr.length-1)/2)
        middleElemnts = mergeArr[0]+(mergeArr.length-1)/2;
        if ( mergeArr[Math.round(middleElemnts)] == 0 ){
        	middleElemnts = 0;
        }
        // console.log(middleElemnts)
        
    }

    function allAreNull(arr) {
        return arr.every(element => element <= 0);
    }

    console.log(middleElemnts)
    if( allAreNull(mergeArr) ){
        return 0;
    }else{
        return middleElemnts;
    }

    
    
     
    
};

findMedianSortedArrays([3], [-2,-1])







