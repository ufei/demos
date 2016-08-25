/**
 * Created by ufei on 2016/8/22.
 */

function clone(obj){
    if(typeof obj !='object'){
        return obj;
    }
    else {
        if (Array.isArray(obj)) {
            var result = [];
            for (var i = 0; i < obj.length; i++) {
                result.push(arguments.callee(obj[i]));
            }
            return result;
        }
        else {
            result = {};
            for (var item in obj) {
                result[item] = arguments.callee(obj[item]);
            }
            return result;
        }
    }
}


var a = {
    t: [3,1,5,2],
    say:function(){
        console.log('ok');
    },
    ff:{
        name:'zr',
        age:26
    },
    double:57
};

var result = clone(a);
