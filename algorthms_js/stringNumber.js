/**
 * Created by ufei on 2016/8/2.
 */

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(line){
     var tokens = count(line);
     console.log(tokens);

});

function count(str){
    var map = {};
    var tmp,result =0;
    if(str.length==2){
        return 0;
    }
    for(var i=0;i<str.length-1;i++){
        for(var j= i+1;j<str.length;j++){
           tmp = str[i]+str[j];
            console.log(tmp);
            if(!map.hasOwnProperty(tmp)){
                console.log('ok');
                map[tmp]=1;
            }
        }
    }
    console.log(map);
    for(var name in map){
       result = result+ map[name];
    }
    return result;
};


var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(line){
    var result= count(line);
     console.log(result);

});

function count(s){
    var tmp;
    if(typeof s =='string'){
        parseInt(s);
    }

    var tmp = Math.pow(s,1/2);
    tmp = tmp.toFixed(0);
    tmp = parseInt(tmp,10);
    if(tmp*(tmp+1)<=s){
        return tmp;
    };
    return tmp-1;
}


function count(str){
    var i,j,k;
    var zeroLeft,zeroRight;
    var oneLeft=0,oneRight=0;
    var result = 0;
    var judge =true;

    i = 0;
    j = str.length;
    k = j-i/2;


    while(true){
        for(var z = i;z<j;z++){
            if(z<k){
                if(str[z]=='1'){
                    oneLeft = oneLeft+1;
                }
                else{
                    zeroLeft = zeroLeft+0;
                }
            }
            else{
                if(str[z]=='1'){
                    oneRight = oneRight+1;
                }
                else{
                    zeroRight = zeroRight+0;
                }
            }
        }
        //循环后需要进行判断
        if(zeroLeft>oneLeft&&oneRight>zeroRight){
            result = j-i;
            judge = false;
        }
        else{
            if(zeroLeft<oneLeft&&oneRight>zeroRight){
                i++;
            }
            if(zeroLeft>oneLeft&&oneRight<zeroRight){
                j--;
            }
            else{
                if(oneLeft>oneRight){
                    k--;
                }
                if(zeroLeft<zeroRight){
                    k++;
                }
            }
        }
        //结束判断语句
        if(k==i-1||k==j||i>j){
            judge = false;
        }
    }

    return result;

}
document.getElementById().style.back


function mySort(){
    var array = new Array();
    var compare = function(a,b){
        if(a>b){
            return 1;
        }
        else{
            if(a==b){
                return 0
            }
            else{
                return -1
            }
        }
    };
    for(var i = 0;i<arguments.length;i++){
        array.push(arguments[i]);
    }
    array.sort(compare);

    return array;

}

