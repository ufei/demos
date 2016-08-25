/**
 * Created by ufeimiya on 16-7-17.
 */

window.onload = function(){
    var drag = {
        target: null,
        X:null,
        Y:null,
        init :function(target){
            this.target = target;
            target.onmousedown = this.start;
        },
        start:function(event){
            var e = event || window.event;
            drag.X = e.clientX-this.offsetLeft;
           
            this.onmousemove=drag.move;
            this.onmouseup = drag.end;
        },
        move:function(event){
            var e = event || window.event;
            var mX = e.clientX-drag.X;
            drag.target.style.left=e.clientX-drag.X+'px';
            drag.target.style.top = e.clientY-drag.Y+'px';
        },
        end:function(){
            this.onmousemove = null;
        }
    };

    /*var drag = {
        target:null,
        X:0,
        Y:0,
        init:function(target){
            this.target = target;

            target.onmousedown = this.start;
            target.onmousemove = this.move;
            target.onmouseup = this.end;
        },

        start:function(event){
            var e = this.fixed(event);
            this.X = e.clientWidth - this.target.offsetLeft;
            this.Y = e.clientHeight- this.target.offsetTop;
        },
        move:function(event){
            var e = this.fixed(event);
            this.target.style.top = e.clientHeight - this.X +'px';
            this.target.style.left = e.clientWidth -this.Y +'px';
        },
        end:function(){
            this.target = null;
        },
        fixed:function(event){
            var e = event ||window.event;

            return e;
        }

    };*/

    var handle = document.getElementById('modal');
    drag.init(handle);
};