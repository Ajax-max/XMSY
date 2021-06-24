

window.onload = function () {
    move();
    var search_inp = document.getElementById('search-inp');
    var search_div = document.getElementById('search-div');
    var search_ul = document.getElementById('search-ul');
    search_inp.onclick = function () {
        search_div.style.display = 'block';
    }
    search_inp.onblur = function () {
        search_div.style.display = 'none';
    }
    // 固定条二维码
    var back_a1 = document.getElementById('back-a1');
    var back_div1_div = document.getElementById('back-div1-div');
    var back_div1_div_div = document.getElementById('back-div1-div-div');
    // 鼠标移入
    back_a1.onmouseover = function () {
        back_div1_div.style.display = 'block';
        back_div1_div_div.style.display = 'block';
    }
    // 鼠标移出
    back_a1.onmouseout = function () {
        back_div1_div.style.display = 'none';
        back_div1_div_div.style.display = 'none';
    }

    // 轮播图切换效果
    var index = 0;
    var timer;
    function move() {
        timer = setInterval(function () {
            index++;
            if (index == $('.li-img').length - 1) {
                index = 0;
                // index++;
                $('.li-img').css('opacity', '0');
                $('.li-img').eq(index).css('opacity', '1');
                $('.active').css('background-color', '#000');
                $('.active').eq(index).css('background-color', '#fff');
            } else {
                // index++;
                $('.li-img').css('opacity', '0');
                $('.li-img').eq(index).css('opacity', '1');
                $('.active').css('background-color', '#000');
                $('.active').eq(index).css('background-color', '#fff');
            }
        }, 1000)
    }
    $('.prev').click(function () {
        clearInterval(timer);
        if (index == 0) {
            index = $('.img').length - 1;
            $('.li-img').css('opacity', '0');
            $('.li-img').eq(index).css('opacity', '1');
            $('.active').css('background-color', '#000');
            $('.active').eq(index).css('background-color', '#fff');
            
        } else {
            index--;
            $('.li-img').css('opacity', '0');
            $('.li-img').eq(index).css('opacity', '1');
            $('.active').css('background-color', '#000');
            $('.active').eq(index).css('background-color', '#fff');
            move();
        }
    })
    $('.next').click(function () {
        clearInterval(timer);
        if (index == $('.li-img').length - 1) {
            index = 0;
            $('.li-img').css('opacity', '0');
            $('.li-img').eq(index).css('opacity', '1');
            $('.active').css('background-color', '#000');
            $('.active').eq(index).css('background-color', '#fff');
            
        } else {
            index++;
            $('.li-img').css('opacity', '0');
            $('.li-img').eq(index).css('opacity', '1');
            $('.active').css('background-color', '#000');
            $('.active').eq(index).css('background-color', '#fff');
            move();
        }
    })
    $('.active').click(function () {
        clearInterval(timer);
        var indexs = $(this).index();
        index = indexs;
        $('.li-img').css('opacity', '0');
        $('.li-img').eq(index).css('opacity', '1');
        $('.active').css('background-color', '#000');
        $('.active').eq(index).css('background-color', '#fff');
        move();
    })
}








