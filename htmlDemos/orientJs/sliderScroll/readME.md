## 固定侧边栏随滚动而固定

---

在这个定义中使用onscroll的事件，需要考虑的是：
1. client一系列top，height，left，width是指的本身div在位置情况
2. offset是指div到界面头的距离
3. scroll是指滚动的距离

在侧边栏固定的时候有可能出现闪动的情况，我的解决方法是采用一个定时器，不让它滚动时候随时距离都发生变化
---