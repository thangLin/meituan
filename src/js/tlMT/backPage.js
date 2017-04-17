function backPage(){
    $('.backPage-box').tap(function(){
       window.location.href = "../../first.html";
       sessionStorage.shopInfo = "";
    })
}
backPage()