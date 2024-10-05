// searchRange([1],1)
// (2) [0, 0]
// searchRange([3,3,3],1)
// (2) [-1, -1]
// searchRange([3,3,3],3)
// (4) [0, 0, 1, 2]
// searchRange([3,3,3],3)
// (4) [0, 0, 1, 2]
var searchRange = function(nums, target) {
    let output=[];
    let flag=false;
    for( let i=0; i<nums.length; i++ ){
        if( nums[i] == target ){
            output.push(i);
            flag = true;
        }
      
    }
    if( output.length == 1 ){
        output.push(output[0])
    }
    if( output.length > 2 ){
        output = [output[0],output[output.length-1]]
    }
    if( flag ){
        return output
    }else{
        return [-1,-1]
    }
};

searchRange([3,3,3],3)
searchRange([1],1)
searchRange([1,3,5,6,8,11],6)
