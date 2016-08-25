function findAllOccurrences(arr, target) {
    var result = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]==target){
            result.push(i);
        }
    }
    return result;
}

/*console.log(findAllOccurrences('abcdefabc'.split(''), 'a').sort());*/

function bindThis(f, oTarget) {
    return function(){
        return f.apply(oTarget,arguments);
    }
}

console.log(bindThis(function(a, b){return this.test + a + b}, {test: 1})(2, 3));

function getUrlParam(sUrl, sKey) {
    params = [];
    var result;
    var key,value;
    var tmp  = sUrl.slice(sUrl.indexOf('?')+1);
    var pattern = /#/;
    var a=tmp.replace(pattern,'&').split('&');
    for(var i=0;i<a.length;i++){
        if(a[i].indexOf('=')!=-1){
            console.log('ok');
            key = a[i].split('=')[0];
            value = a[i].split('=')[1];
            console.log(key +':'+ value);
            params.push({key:value});
        }
        else{
            key=a[i];
            value="";
            params.push({key:value});
        }
    }
}
getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'key');

function count(str){
    var result = {};
    for(var i = 0;i<str.length;i++){
        if(str[i]==" "){
            continue;
        }
        else {
            if(!result[str[i]]){
                result[str[i]]=1;
            }
            else{
                result[str[i]]++;
            }
        }
    }
    console.log(result);
    return result;
}
count('hello world');


function cssStyle2DomStyle(sName) {
    var result="";
    for(var i=0;i<sName.length;i++){
        if(sName[i]=="-"){
            i=i+1;
            if(i==1){
                result = result+ sName[i];
            }
            else {
                result = result+ sName[i].toUpperCase();
            }
            continue;
        }
        else{
            result=result+sName[i];
        }
    }
    return result;
}
console.log(cssStyle2DomStyle('-font-size'));

function rgb2hex(sRGB) {
    var pattern =/rgb\(\W\)/;
    console.log(pattern.test(sRGB));
}
rgb2hex('rgb(255, 255, 255)')