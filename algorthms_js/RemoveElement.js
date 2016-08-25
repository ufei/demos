/**
 * Created by ufei on 2016/7/28.
 * Given an array and a value, remove all instances of that value in place and return the new length.

 Do not allocate extra space for another array, you must do this in place with constant memory.

 The order of elements can be changed. It doesn't matter what you leave beyond the new length.

 Example:
 Given input array nums = [3,2,2,3], val = 3

 Your function should return length = 2, with the first two elements of nums being 2.
 *
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var i;
    while(nums.indexOf(val)!=-1){
        i = nums.indexOf(val);
        nums.splice(i,1);
    }
    return nums.length;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var endP = nums.length - 1,
        firstP = 0;

    while(firstP < endP){
        if(nums[firstP] === val){
            nums[firstP] = nums[endP];
            nums[endP] = val;
            endP--;
        }else{
            firstP++;
        }
    }

    if(nums[endP] === val)
        return endP;
    return endP + 1;
};
