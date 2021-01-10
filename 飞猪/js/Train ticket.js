/*当点击小叉号是 跳转导航消失*/
$(function () {
    $("#Turn-off").click(function () {
        $(".Jump-1").remove();
    })
});
// $(document).ready(function(){
//     $("#Turn-off").click(function(){
//         $(".Jump-1").remove();
//     });
// });
/*当点击火车是会旋转*/
$(function(){
    $("#ring-1").click(function(){
        if($(this).hasClass("rotate")){
            $(this).removeClass("rotate").addClass("rotate1");
        }else{
            $(this).removeClass("rotate1").addClass("rotate");
        }
    })
})

/*当前时间*/
$(function() {
    let myDate = new Date;
    let mon = myDate.getMonth() + 1; //获取当前月
    let date = myDate.getDate(); //获取当前日
    $("#while").html( mon + "月" + date + "日"+'<span>今天出发</span>'+'<img src="img/灰色的右尖括号.png" alt="">');
})

//当点击出发或者目的地时 跳转到选择地点的页面
$(document).ready(function () {
    $('#outset').click(function () {
        window.location.href="location.html";
    })
    $('#arrive').click(function () {
        window.location.href="location.html";
    })
});

/***********当选中地点是发生改变**************/
let val = localStorage.getItem("hd");
JSON.parse(val);
$(document).ready(function () {
    $("#outset").click(function (){
        this.val;
    })
})



/*************选择相应的地点并切换*******************/

$("#outset").text(JSON.parse(localStorage.getItem("hd")));

$("#arrive").text(JSON.parse(localStorage.getItem("hdd")));


