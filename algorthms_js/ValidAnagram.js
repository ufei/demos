/**
 * Created by ufei on 2016/7/28.
 *
 * Given two strings s and t, write a function to determine if t is an anagram of s.

 For example,
 s = "anagram", t = "nagaram", return true.
 s = "rat", t = "car", return false.

 Note:
 You may assume the string contains only lowercase alphabets.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var sa=[],st = [];
    if(s.length!==t.length){
        return false;
    }
    for(var i = 0; i<s.length;i++){
        sa.push(s[i]);
        st.push(t[i]);
    }
    sa.sort();
    console.log(sa);
    st.sort();
    console.log(st);
    return sa==st;
};

isAnagram("anasa","naaas");
