---
title: js拖拽
date: 2016-07-18 21:12:28
tags: javascript
---

## 拖拽实现流程
在实现js对div进行拖拽，需要实现三个事件ommousedown onmousemove onmouseup
1. 在onmousedown中需要计算出需要计算当前鼠标点击的位置与目标div中left和top的距离，并且记录
2. 在onmousemove事件中则是将上一步中记录下的位置进行计算，不断将div的style中的top和left进行修改
3. 在onmouseup需要对onmousemove的引用


## 这是代码实现
```
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

 ```
## 在实现的过程中需要注意的地方

1. 上述的代码是原生js的实现，如果使用jquery，因为jquery本身对onmousedown onmousemove和onmouseup做了相应的包装。
2. 在学习的过程中，对鼠标点击事件中的一些关于位置的属性有了相应的了解
- clientX/Y： clientX/Y是指以页面为参考点，从页面的左上角开始，鼠标在页面上的位置
