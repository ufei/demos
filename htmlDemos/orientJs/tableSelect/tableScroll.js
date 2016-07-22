/**
 * Created by ufei on 2016/7/22.
 */

window.onload=function(){

    var titles = $('tab-title').getElementsByTagName('li');
    var contents = $('tab-content').getElementsByTagName('ul');

    for(var i=0; i<titles.length;i++){
        titles[i].id = i;

        titles[i].onmouseover = function(){
            console.log(this.id);
            for(var j=0;j<contents.length;j++){
                contents[j].style.display ="none";
            }
            contents[this.id].style.display="block";
        }
    }


    function $(id){
        return typeof id=="string"? document.getElementById(id): id
    }
}
