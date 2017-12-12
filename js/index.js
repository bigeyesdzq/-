//回到顶部
function returnTop(element) {
    var speed = 1000; //滚动速度
    var h = document.body.clientHeight;
    
    $(element).click(function () {
        $('html,body').animate({
                scrollTop: '0px'
            },
            speed);
    });
}

//回到底部
function returnBottom(element) {
    var speed = 1000; //滚动速度
    var h = document.body.clientHeight;
    //回到底部
    var windowHeight = parseInt($("body").css("height")); //整个页面的高度
    $(element).click(function () {
        $('html,body').animate({
                scrollTop: h + 'px'
            },
            speed);
    });
}