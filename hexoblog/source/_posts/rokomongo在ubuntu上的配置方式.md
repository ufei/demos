---
title: rokomongo在ubuntu上的配置方式
date: 2016-03-09 22:34:47
tags: [工具, ubuntu14.04]
categories: 工具
---
## rockmongo
rockmongo是一个mongoDB的图形管理工具，可以使得用户脱离mongo shell的操作方式

<!--more-->
### 下载所需要的包
因为rockmongo是基于PHP，因此需要如下：
- php5
- php-mongo-driver旧版
- rockmongo

### 安装过程

#### 首先需要安装PHP5
在安装PHP5之后,需要 配置apache2.conf 在ubuntu中apache2的配置文件缺少httpd.conf文件，因此需要首先在php.ini中引入httpd.conf,其次在相同的目录下创建httpd.conf文件
同时在php.ini下应该加一个命令 servername 127.0.0.1

#### 安装php-mongo-driver
该文件冲github上下载，需要注意在下旧版

#### 安装rockmongo
rockmongo需要解压到php5的www/的根目录下，不需要安装，如果配置一切顺利，则可以直接在127.0.0.1/rockmongo/index/php中进入到图形管理界面中

### 参考文章
[参考文件1](http://onlyzq.blog.51cto.com/1228/516623/)
[参考文件2](http://blog.csdn.net/deepwishly/article/details/38276619)
[参考文件3](http://blog.csdn.net/mydeman/article/details/7082730)
[参考文件4](http://blog.csdn.net/xl890727/article/details/45158071)