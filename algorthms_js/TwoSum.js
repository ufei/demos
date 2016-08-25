/**
 * Created by ufei on 2016/7/27.
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution.

    Example:
    Given nums = [2, 7, 11, 15], target = 9,
    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var tmp,sub;
    for(var i=0;i<nums.length;i++){
        tmp = nums.splice(i,1);
        sub = nums.indexOf(tmp);
        if(sub!=-1){
            return [i,sub+i];
        }
    }
};

var twoSum = function(nums,target){
    var saved = {};
    for(var i=0;i<nums.length;i++){
        if(saved.hasOwnProperty(nums[i])){
            return [i,saved[nums[i]]];
        }
        saved[target-nums[i]] = i;
    }
}