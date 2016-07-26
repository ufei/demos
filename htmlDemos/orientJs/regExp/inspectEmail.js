/**
 * Created by ufei on 2016/7/24.
 */

window.onload = function(){
    var string_1="Hello awdwwa zasd dddd";
    var telephone = "13893448010";
    var password =
    var pattern = /h.l/i;
    var pattern1 = /1[0-9]{10}/i;
    var pattern2 = /[A-Z]{1}[a-Z]]/

    //密码要求第一位大写，有特殊字符，有数字和字母
    console.log(pattern1.test(telephone));
    document.body.innerHTML = telephone.match(pattern1);
}
