/**
 * Created by ufei on 2016/7/27

Given an array of integers and an integer k, find out whether there are
two distinct indices i and j in the array such that nums[i] = nums[j] and
the difference between i and j is at most k.

 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean} 1680 ms
 */
var containsNearbyDuplicate_1 = function(nums, k) {
    var item,count;
    while(nums.length){
        item = nums.shift();
        count=nums.indexOf(item);
        if(count<k && count!=-1){
            return true;
        }
    }
    return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}  93ms
 */
var containsNearbyDuplicate = function(nums, k) {
    var item,count;
    while(nums.length){
        item = nums.shift();
        count=nums.indexOf(item);
        if(count<k && count!=-1){
            return true;
        }
    }
    return false;
};
