function clickRestaurant(data){
    $('.shop-box').tap(function(){
       var index =  $(this).index();
       var oData = JSON.stringify(data[index]);
       sessionStorage.shopInfo = oData;
       window.location.href = '../second.html';
       //实现不用a标签就能跳转页面
    })
}
module.exports = clickRestaurant;