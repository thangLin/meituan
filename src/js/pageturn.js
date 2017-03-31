var div = $('#top-pic');
var length = $('.stage li').length - 2;
var width = div.width();
var newLeft = 0;
var flag = null;
var timer = setInterval(move, 2000);
var ul = $('.stage');
$('.stage li').css('width',width + 'px');
function move () {
    // if(flag !== -width * length) {
    //     newLeft -= width;
    //     ul.css({'transition':'all 1s ease-out','left':newLeft + 'px'});
    //    console.log('a')
    // }else{
    //     newLeft = 0;
    //     ul.css({'transition':'none','left':0});
    //     flag = ul.offset().left;
    //     console.log('b')
    // }
    if(flag != 5){
            flag++;
            ul.animate({'left':-(flag * width) + 'px'},1000)
    }else{
        flag = 1;
        ul.css({'left':0}).animate({'left':-(flag * width) + 'px'},1000)
    }
}

