/**
 * Created by ufei on 2016/7/22.
 */


window.onload = function() {
    var header = document.getElementById('header');
    var footer = document.getElementById('footer');
    var slider = document.getElementById('slider');

    window.onscroll = function () {
        var scroll = document.body.scrollTop;
        console.log(footer.clientTop);
        var timer = setInterval(function(){
            if (scroll > header.clientHeight && slider.clientHeight+scroll<footer.offsetTop) {
                slider.style.left = 0 + 'px';
                slider.style.top = scroll - header.clientHeight + 'px';
            }
            if(scroll<header.clientHeight){
                slider.style.top = 0+'px';
            }
            clearInterval(timer);
        },100);
    };
}
