//百度地图
var map = new BMap.Map("allmap");
var point = new BMap.Point(120.181751, 30.295427);
var marker = new BMap.Marker(point);
map.addOverlay(marker);
map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
// map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用
map.centerAndZoom(point, 19);

function LoadInfoWindow(marker, infoWindow) {
    document.getElementById('imgDemo').onload = function() {
        infoWindow.redraw();
    }
};

//音乐开始/结束
$("#audioBtn").click(function() {
    var Audio = $("#play")[0];
    if ($(this).hasClass('rotate')) {
        Audio.pause();
        $(this).removeClass('rotate');
    } else {
        Audio.play();
        $(this).addClass('rotate');
    }
});

// 图片预加载，swiper
var loading = document.querySelector(".loading");
// var loadingProcess = loading.getElementsByTagName("p")[0];
var picArr = [
    "images/arrow.png", "images/bg.png", "images/con-bg.png", "images/content-border.png", "images/deng-img.png", "images/dynamic.gif", "images/img5.png", "images/lai-img.png", "images/li-bg.png", "images/loading.svg", "images/logo.png", "images/man1.png", "images/man2.png", "images/man3.png", "images/man4.png", "images/man21.png", "images/ni-img.png", "images/normalMusic.svg", "images/show1.jpg", "images/show2.jpg", "images/show3.jpg", "images/show4.jpg", "images/show5.jpg", "images/zhi-img.png"
];
var img = new Image();
var sum = picArr.length;
//console.log( picArr[40] ); 
var now = 0;
loadImg();

function loadImg() {
    img.src = picArr[now];

    function go() {
        now++;
        //console.log(now);
        // loadingProcess.innerHTML = parseInt(now / sum * 100) + "%";
        if (now < picArr.length) {
            loadImg()
        } else {
            // console.log("全部加载完成");
            loading.style.display = "none";
            var mySwiper = new Swiper('.swiper-container', {
                direction: 'vertical',
                effect: 'coverflow', // slide, fade, coverflow or flip
                pagination: '.swiper-pagination',
                mousewheelControl: true,
                onInit: function(swiper) {
                    swiperAnimateCache(swiper);
                    swiperAnimate(swiper);
                },
                onSlideChangeStart: function(swiper) {
                    if (swiper.activeIndex > swiper.slides.length - 2) {
                        // alert(2)
                        $("#array").hide()
                    } else {
                        $("#array").show()
                    };
                },
                onSlideChangeEnd: function(swiper) {
                    swiperAnimate(swiper);
                },
                onTransitionEnd: function(swiper) {
                    swiperAnimate(swiper);
                },
                watchSlidesProgress: true,
                onProgress: function(swiper) {
                    for (var i = 0; i < swiper.slides.length; i++) {
                        var slide = swiper.slides[i];
                        var progress = slide.progress;
                        var translate = progress * swiper.height / 4;
                        scale = 1 - Math.min(Math.abs(progress * 0.5), 1);
                        var opacity = 1 - Math.min(Math.abs(progress / 2), 0.5);
                        slide.style.opacity = opacity;
                        es = slide.style;
                        es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,' + translate + 'px,-' + translate + 'px) scaleY(' + scale + ')';
                    }
                },
                onSetTransition: function(swiper, speed) {
                    for (var i = 0; i < swiper.slides.length; i++) {
                        es = swiper.slides[i].style;
                        es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
                    };
                },
            });
        };
    };
    img.onerror = go;
    img.onload = go;
};

// 表单提交
function checkForm() {
    var name = $('.name').val();
    var phone_num = $('.phone-num').val();
    var want_job = $('.want-job').val();
    if (name === '' || phone_num === '' || want_job === '') {
        alert("姓名、电话、求职意向均不能为空")
        return false;
    }
};