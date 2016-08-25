var Event = {
    on:function(eventName,callback){
        this[eventName] = this[eventName] || new Array();
        this[eventName].push(callback);
    },
    emit:function(eventName){
        if(this[eventName]){
            for(var i=0;i<this[eventName].length;i++){
                if(this[eventName][i].length<=0){
                    this[eventName][i].call(this);
                }
                else{
                    console.log('emit'+arguments);
                    var args = Array.prototype.slice.call(arguments,1);
                    this[eventName][i].apply(this,args);
                }
            }
        }
        else{
            console.log('the event' + eventName+'is not defined');
        }
    }
};

Event.on("one", function(){
    console.log("go");
})
Event.on("one", function(){
    console.log("gogo");
});

var person = Object.assign({},Event);

person.name = 'zr';

person.on('click',function(name){
    console.log(name);
});

person.emit('click',this.name);