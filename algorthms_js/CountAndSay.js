/**
 * Created by ufei on 2016/7/28.
 *
 * The count-and-say sequence is the sequence of integers beginning as follows:
 1, 11, 21, 1211, 111221, ...
 1 is read off as "one 1" or 11.
 11 is read off as "two 1s" or 21.
 21 is read off as "one 2, then one 1" or 1211.

 Given an integer n, generate the nth sequence.
 Note: The sequence of integers will be represented as a string.
 */

/**
 * @param {number} n
 * @return {string}
 * 100ms
 */
var countAndSay = function(n) {
    var str = '1';
    while(n-1){
        count =1;
        var tmp = '';
        for(var i = 0 ;i< str.length;i++){
            if(str[i]==str[i+1] && str[i+1]){
                count++;
            }
            else{
                tmp = tmp + count + str[i];
                count=1;
            }
        }
        n--;
        str = tmp;
    }
    return str;
};
