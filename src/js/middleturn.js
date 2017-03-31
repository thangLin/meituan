var mid = $('.middle');
var width = mid.width();
var height = width / 2 ;
// var middle_wrapper = document.getElementById('wrapper');
// var x,newx,posix;
// var originul1 = $('.mid-content1').position().left;
// var originul2 = $('.mid-content2').position().left;
$('.middle').css('height',height + 'px'); 
$('.middle-wrapper').css('height',height + 'px'); 
$('.middle div ul').css('width',width);

var lilength = $('.middle-wrapper ul').length;
for(var i = 0; i < lilength; i++) {
    $('<i>').appendTo($('.index-wrapper'));
   
}
// middle_wrapper.addEventListener('touchstart', starttouch, false);
// middle_wrapper.addEventListener('touchmove', movetouch, false);
// middle_wrapper.addEventListener('touchend', endtouch, false);
function starttouch (e) {
   console.log(e);

  
}
$('.wrapper').on('touchstart', starttouch)
// function movetouch (e) {
//     newx = e.touches[0].clientX;
//     posix = x - newx;
 
//     $('.middle-wrapper').css('left', originul1 - posix + 'px');

// }                
// function endtouch (e) {
//     if(Math.abs(posix) < width/2) {

//     }else{

//     }
// }    
