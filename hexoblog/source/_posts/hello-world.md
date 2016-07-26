---
title: Hello World
date: 2015-08-20 18:24:33
tags: [前端]
categories: 前端
---
## 关于本博客
### 简单的开始
该博客是由hexo blog framework生成，在这个博客中记录学习前端的过程中的一些心得和体验
下面开始努力记录吧

<!--more-->
### 我的前端实验室

[菜鸟实验室](http://www.rzhao.club)，该网址下我记录了一些我的试验性的应用
## 对于前端开发的认识
前端开发，我认为主要解决问题：

- 界面实现中的浏览器差异，包括css差异和js差异
- 分担后端负担
- 前台优化

好的前端需要均衡数量和速度两个考虑方面

## 一些我认为在html中基础知识
### 主流浏览器
我们常常说浏览器之间有差异，那么差异怎么产生的？
尽管在css中有w3c标准，但事实上对于不同效果的解析，各个浏览器厂商使用不同的解决方案，差异因此而来。主流的浏览器包括：
- firefox
- opera
- google-chrome
- IE

从我的了解中，我认为除了个别属性，IE的支持效果是比较差的。

`<meta http-equive="x-ua-compatible" content="IE=EDGE"`

并且因为windows IE低级别浏览器的使用用户较多，因此很多时候为了看上去效果不错，从而去模拟某个特殊版本的IE浏览器的渲染方式。该标签从IE8中的专有标记

对于不同的浏览器，对于w3c中的属性支持度也不尽相同，但是大多数都有着自己的实现方式和标签前缀：
- chrome:-webkit-
- firefox:-moz-
- opera: -o-
- IE：-ms-

### 响应式布局
响应式布局是基于思想：“一个网站可以兼容多个终端”
为了让网页适应终端屏幕的变化，一般需要在网页的`<head>`中插入以下语句：

`<meta name="viewport content="width=device-width initial-scale=1.0"`

除此之外为了支持响应式布局，对网页布局会进行修改
增加媒介查询
图片的大小进行切割等技术

## javascript

## nodejs

