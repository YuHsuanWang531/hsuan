 $(window).ready(function () {
        $("#id1Page").css("background-color", "#8C8C8C");
        $("#id2Page").css("background-color", "");
        $("#id3Page").css("background-color", "");
        $("#id4Page").css("background-color", "");
        $("#id5Page").css("background-color", "");

        
    });

    function aid1Page() {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        var box1 = $('#box1').offset().top; // box1 位置
        $body.animate({
            scrollTop: box1
        }, 500, "linear", function () { action = true; });
        $("#id1Page").css("background-color", "#8C8C8C");
        $("#id2Page").css("background-color", "");
        $("#id3Page").css("background-color", "");
        $("#id4Page").css("background-color", "");
        $("#id5Page").css("background-color", "");
    };
    function aid2Page() {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        var box2 = $('#box2').offset().top; // box1 位置
        $body.animate({
            scrollTop: box2
        }, 500, "linear", function () { action = true; });
        $("#id1Page").css("background-color", "");
        $("#id2Page").css("background-color", "#8C8C8C");
        $("#id3Page").css("background-color", "");
        $("#id4Page").css("background-color", "");
        $("#id5Page").css("background-color", "");
    };
    function aid3Page() {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        var box3 = $('#box3').offset().top; // box1 位置
        $body.animate({
            scrollTop: box3
        }, 500, "linear", function () { action = true; });
        $("#id1Page").css("background-color", "");
        $("#id2Page").css("background-color", "");
        $("#id3Page").css("background-color", "#8C8C8C");
        $("#id4Page").css("background-color", "");
        $("#id5Page").css("background-color", "");
    };
    function aid4Page() {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        var box4 = $('#box4').offset().top; // box1 位置
        $body.animate({
            scrollTop: box4
        }, 500, "linear", function () { action = true; });
        $("#id1Page").css("background-color", "");
        $("#id2Page").css("background-color", "");
        $("#id3Page").css("background-color", "");
        $("#id4Page").css("background-color", "#8C8C8C");
        $("#id5Page").css("background-color", "");
    };
    function aid5Page() {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        var box5 = $('#box5').offset().top; // box1 位置
        $body.animate({
            scrollTop: box5
        }, 500, "linear", function () { action = true; });
        $("#id1Page").css("background-color", "");
        $("#id2Page").css("background-color", "");
        $("#id3Page").css("background-color", "");
        $("#id4Page").css("background-color", "");
        $("#id5Page").css("background-color", "#8C8C8C");
    };

    

        $(window).scroll(function () {

                var top = $(this).scrollTop(); // 取得可視範圍TOP座標
                console.log("top:" + top);
                var box1 = $('#box1').offset().top; // box1 位置
                console.log("#box1:" + box1);
                var box2 = $('#box2').offset().top; // box2 位置
                console.log("#box2:" + box2);
                var box3 = $('#box3').offset().top; // box3 位置
                console.log("#box3:" + box3);
                var box4 = $('#box4').offset().top; // box4 位置
                console.log("#box4:" + box4);
                var box5 = $('#box5').offset().top; // box5 位置
                console.log("#box5:" + box5);
                var bt = $('.bt').offset().top; // bt 位置
                console.log("bt:" + bt);

                
                scroll(function (direction) { console.log(direction); direction1 = direction; });

                //alert(box_index)
                //if (!action) { alert(0);return; }
                //if (action==true) {
                if (!$("body").is(":animated")) {  // 判斷是否在動畫中
                    action == false;
                    // down action -------------------------------------------------------------------
                    if (direction1 == "down" && bt > box2 + 50 && bt < box3 && box_index != 2) {

                        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

                        $body.animate({
                            scrollTop: box2
                        }, 500, "linear", function () { action = true; });

                        //$("body").stop(true, false).animate({  // 強制停止動畫狀態
                        //    scrollTop: box2
                        //}, 500, "linear", function () { action = true; });
                        $("#id1Page").css("background-color", "")
                        $("#id2Page").css("background-color", "#8C8C8C")
                        $("#id3Page").css("background-color", "")
                        $("#id4Page").css("background-color", "")
                        $("#id5Page").css("background-color", "")
                        box_index = 2;
                    }

                    if (direction1 == "down" && bt > box3 + 50 && bt < box4 && box_index != 3) {

                        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
                        $body.animate({
                            scrollTop: box3
                        }, 500, "linear", function () { action = true; });
                        $("#id1Page").css("background-color", "")
                        $("#id2Page").css("background-color", "")
                        $("#id3Page").css("background-color", "#8C8C8C")
                        $("#id4Page").css("background-color", "")
                        $("#id5Page").css("background-color", "")
                        box_index = 3;
                    }

                    if (direction1 == "down" && bt > box4 + 50 && bt < box5 && box_index != 4) {

                        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
                        $body.animate({
                            scrollTop: box4
                        }, 500, "linear", function () { action = true; });
                        $("#id1Page").css("background-color", "")
                        $("#id2Page").css("background-color", "")
                        $("#id3Page").css("background-color", "")
                        $("#id4Page").css("background-color", "#8C8C8C")
                        $("#id5Page").css("background-color", "")
                        box_index = 4;
                    }

                    if (direction1 == "down" && bt > box5 + 50 && box_index != 5) {

                        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
                        $body.animate({
                            scrollTop: box5
                        }, 500, "linear", function () { action = true; });
                        $("#id1Page").css("background-color", "")
                        $("#id2Page").css("background-color", "")
                        $("#id3Page").css("background-color", "")
                        $("#id4Page").css("background-color", "")
                        $("#id5Page").css("background-color", "#8C8C8C")
                        box_index = 5;
                    }

                    // up action -------------------------------------------------------------------
                    if (direction1 == "up" && top < box5 - 50 && top > box4 && box_index != 4) {

                        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
                        $body.animate({
                            scrollTop: box4
                        }, 500, "linear", function () { action = true; });
                        $("#id1Page").css("background-color", "")
                        $("#id2Page").css("background-color", "")
                        $("#id3Page").css("background-color", "")
                        $("#id4Page").css("background-color", "#8C8C8C")
                        $("#id5Page").css("background-color", "")
                        box_index = 4;
                    }

                    if (direction1 == "up" && top < box4 - 50 && top > box3 && box_index != 3) {

                        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
                        $body.animate({
                            scrollTop: box3
                        }, 500, "linear", function () { action = true; });
                        $("#id1Page").css("background-color", "")
                        $("#id2Page").css("background-color", "")
                        $("#id3Page").css("background-color", "#8C8C8C")
                        $("#id4Page").css("background-color", "")
                        $("#id5Page").css("background-color", "")
                        box_index = 3;
                    }

                    if (direction1 == "up" && top < box3 - 50 && top > box2 && box_index != 2) {

                        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
                        $body.animate({
                            scrollTop: box2
                        }, 500, "linear", function () { action = true; });
                        
                        box_index = 2;
                    }

                    if (direction1 == "up" && top < box2 - 50 && top > box1 && box_index != 1) {

                        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
                        $body.animate({
                            scrollTop: box1
                            //}, 500);
                        }, 500, "linear", function () { action = true; });
                        $("#id1Page").css("background-color", "#8C8C8C")
                        $("#id2Page").css("background-color", "")
                        $("#id3Page").css("background-color", "")
                        $("#id4Page").css("background-color", "")
                        $("#id5Page").css("background-color", "")
                        box_index = 1;
                    }
                    //setTimeout(function () {
                    //    if (action == true) {
                    //        action = "true";
                    //    }
                    //}, 800);
                }
            

        });

        var direction1;
        var box_index = 1;
        var action=true;

        function scroll(fn) {
            var beforeScrollTop = document.body.scrollTop,
                fn = fn || function () { };
            window.addEventListener("scroll", function () {
                var afterScrollTop = document.body.scrollTop,
                    delta = afterScrollTop - beforeScrollTop;
                if (delta === 0) return false;
                fn(delta > 0 ? "down" : "up");
                beforeScrollTop = afterScrollTop;
            }, false);
        }

