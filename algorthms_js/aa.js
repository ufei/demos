/**
 * Created by ufei on 2016/7/29.
 */

Array.prototype.delete = function(array) {
    var tmp ={};
    var result = [];
    for(var i = 0;i<array.length;i++){
        if(tmp.hasOwnProperty(array[i])){
            tmp[array[i]] = tmp[array[i]]+1;
        }
        else{
            tmp[array[i]] = 0;
        }
    }
    console.log(tmp);

    for (var item in tmp){
        if(tmp[item]>0){
            result.push(parseInt(item));
        }
    }

    return result;
};

function mySort() {
    var tags = new Array();//使用数组作为参数存储容器
    for(var i = 0;i<arguments.length ;i++){
        tags.push(arguments[i]);
    }
    tags.sort();
    return tags;//返回已经排序的数组
}

var result = mySort(50,11,16,32,24,99,57,100);/传入参数个数不确定
console.info(result);//显示结果

function add(a){
    var sum = a;
    var inner = function(x){
        if(arguments.length==0){
            return sum;
        }
        else{
            sum = sum+x;
            return inner;
        }
    }
    return inner;
};

var array = [];

function strStr(a,b){
    return a.indexOf(b);
}
