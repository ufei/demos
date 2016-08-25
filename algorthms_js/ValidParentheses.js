/**
 * Created by ufei on 2016/7/28.
 *Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
    **
 * @param {string} s
 * @return {boolean}
 * 328 ms
 */
var isValid = function(s) {
    var stack = [];
    for(var i = 0;i<s.length ;i++){
        if(stack.length==0){
            stack.push(convert(s[i]));
        }
        else{
            if(stack[stack.length-1]!=convert(s[i])-1){
                stack.push(convert(s[i]));
            }
            else{
                stack.pop(stack[stack.length-1]);
            }
        }
        console.log(stack);
    }
    if(stack.length==0){
        return true;
    }
    else{
        return false;
    }
};

function convert(character){
    switch(character){
        case '[':return 1;
        case ']':return 2;
        case '{':return 4;
        case '}':return 5;
        case '(':return 7;
        case ')':return 8;
    }
};

var isValid = function(s) {
    var i = 0,
        r = /\(\)|\[\]|\{\}/g,
        length = s.length;
    if(length%2==1){return false;}
    while(i<length/2){
        s = s.replace(r,"");
        console.log(s);
        i++;
    }
    return s==="";
};

var isValid = function(s) {
    var stack = [],
        i;

    s = s.split("");

    for(i = 0; i < s.length; i++){
        switch(s[i]){
            case "(":
                stack.unshift(")");
                break;
            case "[":
                stack.unshift("]");
                break;
            case "{":
                stack.unshift("}");
                break;
            default:
                if(stack.shift() !== s[i])
                    return false;
                break;
        }
    }

    if(stack.length === 0)
        return true;
    return false;
};