/**
 * Created by ufei on 2016/3/12.
 */

window.onload = function(){
    /*splice和slice是数组的操作方法*/
    var lists = [1,3,5,"4",7,4,109,3];
    //splice可以实现删除，插入（参数1：需要插入的位置，参数2：需要删除的项数，参数3：添加的数组）
    /*lists.splice(4,1,"b","c","d");*/
    // console.log('splice:'+lists);
    //slice：切割能够基于当前数组创建新数组,参数接受的是起始位置，结束位置，但是生成的新数组不包含最后一项
    var lists_1 = lists.slice(lists.indexOf(3),lists.lastIndexOf(3));
    console.log(lists);


    /*位置方法有：indexOf和lastIndexOf两个，返回index的位置*/

    //遍历方法有every,some,fliter,map,forEach,reduce,reduceRight
    var result_every = lists.every(select);
    var result_some = lists.some(select);
    console.log("遍历方法every:"+result_every);
    console.log("遍历方法some:"+result_some);

    function select(item){
        return (typeof item == "string");
    }
    var result_filter = lists.filter(function(item){
        return (item>5);
    });
    /*console.log(result_filter);*/

     lists.forEach(function(item){
        typeof item=="string" ? item = parseInt(item): item ;
     /*   console.log(item);*/
    });
    var lists_map = lists.map(function(item){
        typeof item=="string" ? item = parseInt(item): item ;
        return item;
    });
    console.log(lists_map);
    var result = lists.reduce(function(prev,next){
        
    });
}
