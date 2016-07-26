---
title: 关于css中布局的那些事—width，height
date: 2016-03-10 15:19:36
tags: [css3]
categories: 前端

---
## width，height深入理解
首先需要注意，在css中，width和height的默认值为auto。
常常我们用这两个属性的时候有两种用法：
1. 使用固定px
2. 使用流动布局以%来定义

有些情况下我们希望子元素的高度和父元素的高度一致，在这种情况下使用inherit，但是取inherit的时候需要注意：
inheirt：等于**其父元素的声明值**

声明值按以下三个原则取值：
1. 如果元素样式表中有定义属性及属性值，则其为声明值
2. 否则，如果元素不是文档树的根，而其父元素有定义属性及属性值，且属性可被继承时，则父元素对应属性计算后得到的值
3. 否则，声明值取元素对应属性的默认值


```
<style>
	.container{
    	width:100%;
        height:400px;
        display:-webkit-box;
        display:box;
    }
    .middle{
    	width:600px;
    }
    .right{
    	-webkit-box-flex:1;
    	box-flex:1;
    }
    .content{
    	width:100%;
        height:width;
    }
</style>

<div class="container">
	<div class="middle">
    	<div class="content"></div>
    </div>
    <div class="right"></div>
</div>

```

在上面这个例子中，content中的height属性实际上是继承了middle中的height：auto，虽然通过盒模型父div给了子div高度。
但是因为没有在middle中设定height属性，因此此height属性的声明值为auto。

那么在上述的例子中使用：height：100%可以吗？
也是不可以的，percentage的取值是以父元素中的包含的height或者width为基准计算的，因此如果父元素的声明值为auto，那么auto的100%没有意义
