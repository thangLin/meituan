var dataUrl = './src/data/data.txt';
var success = function (data) {
    var alldata = JSON.parse(data);console.log(alldata);
    var length = alldata.length;
    rendershop(length,alldata);
 }
function getData(url, cb) {
    $.ajax({
        url: './src/data/data.txt',
        type: 'GET',
        success: cb, 
        aync: true,
        error: function () {
            console.log('deal wrong');
        }
    });
}

getData(dataUrl, success);
function rendershop(len,alldata) {
    console.log(len)
    for(var i = 0;i < len; i++) {
        $('.content').append('<div class=' + 'shop' + '>\
                                    <img src=' + alldata[i]["shopimg"] + '>\
                                    <div>\
                                        <h1 class=' + 'shop-na'  +  '>' + alldata[i]["shopname"] + '</h1>\
                                        <p class=' + 'shop-sold' + '>' + alldata[i]["shopsold"] + '</p>\
                                        <p class=' + 'shop-line-item' + '>' + alldata[i]["shopitem"] + '</p>\
                                    </div>\
                                    <div class=' + 'shop-time' + '>\
                                        <p>' + alldata[i]["shoptime"] + '</p>\
                                    </div>\
                                </div>');console.log('a')
    }
   
}
