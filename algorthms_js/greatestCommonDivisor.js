/**
 * Created by ufei on 2016/8/1.
 *
 * 求取最大公约数
 */

function gcd(a,b){
    var tmp;
    while(a%b!=0){
        tmp=a%b;
        a = b;
        b= tmp;
    }

    return tmp;;
}
gcd(319,377);

function add(array){
    var d = array;
    console.log(array);
}
