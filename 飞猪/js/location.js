$(function () {
    $("#sck").click(function () {
        $("#hz").css({
            width:"80%"
        })
        $("#sck").css({
            width:"90%",
            outline: "none"
        });
        $("#sck-1").css({
            display: "block",
            outline: "none"
        });
        $(".subject").css({
            display: "none"
        })
    })
    $("#sck-1").click(function (){
        $("#hz").css({
            width:"95%"
        })
        $("#sck-1").css({
            display: "none",
            outline: "none"
        });
        $(".subject").css({
            display: "block"
        })
    })
});
/******获取地点的值 并存入本地******/

//当点击出发或者目的地时 跳转到选择地点的页面
$(document).ready(function () {
    $('.nme').click(function () {
        window.location.href="Train-ticket.html";
    })
});


let flag=true;
if(flag){
    window.onload = function(){
        let dd = document.getElementsByClassName("nme");
        for(let i = 0; i< dd.length;i++){
            dd[i].onclick = function(){
                localStorage.setItem("hd",JSON.stringify(this.innerText));
            }
        }
        flag=false;
    }
}
else {
    window.onload = function(){
        let dd = document.getElementsByClassName("nme");
        for(let i = 0; i< dd.length;i++){
            dd[i].onclick = function(){
                localStorage.setItem("hd",JSON.stringify(this.innerText));
            }
        }
    }
}







/*这段代码就不会让顶部导航栏直接覆盖内容*/
let onResize = function() {
    $("body").css("padding-top", $(".search-bar").height());
};
$(window).resize(onResize);
$(function() {
    onResize();
});
