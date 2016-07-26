/**
 * Created by ufeimiya on 16-7-17.
 */

$(function(){
    var drag = {
        target: null,
        X:null,
        Y:null,
        init :function(target){
            this.target = target;
            target.onmousedown = this.start;
        },
        start:function(e){
            console.log(e);
            X = e.clientX-drag.target.offsetLeft;
            Y = e.clientY-drag.target.offsetTop;
            console.log(X);
            this.onmousemove=drag.move;
            this.onmouseup = drag.end;
        },
        move:function(e){
            console.log("ok");
            var mX,mY;
            mX = e.clientX-X;
            mY = e.clientY-Y;
            drag.target.style.left=mX+'px';
            drag.target.style.top = mY+'px';
            console.log(e);
        },
        end:function(e){
            this.onmousemove = null;
        }
    };

    var handle = document.getElementById('modal')
    drag.init(handle);
});