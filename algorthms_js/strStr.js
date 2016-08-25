/**
 * Created by ufei on 2016/7/30.
 *
 *Implement strStr().

 Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var length = needle.length;
    if(haystack.length<needle.length){
        return -1;
    }
    if(haystack.length==0||needle.length==0){
        return 0;
    }
    for(var i=0;i<haystack.length;i++){
        if(haystack.slice(i,i+length)== needle){
            return i
        }
    }
    return -1;
};
