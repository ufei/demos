/**
 * Created by ufei on 2016/7/22.
 */

window.onload = function(){
    var clientHeight = document.documentElement.clientHeight;
    var btn = document.getElementById('btn');
    window.onscroll = function(){
        /*alert('ok');*/
        var scrollHeight = document.body.scrollTop;
        if(scrollHeight>clientHeight){
            btn.style.display="block";
        }
        else{
            btn.style.display = "none";
        }
    };
    btn.onclick = function(){
        var timer = setInterval(function(){
            var scrollHeight = document.body.scrollTop;
            var speed = scrollHeight/5;
            document.body.scrollTop = scrollHeight-speed;
            if(scrollHeight<=0){
                document.body.scrollTop = 0;
                clearInterval(timer);
            }
        },30);
    };
    
}