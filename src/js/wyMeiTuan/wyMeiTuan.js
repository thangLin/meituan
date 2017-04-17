window.onload = function() {
    var foodBuy = $j(".food-buy"); // +
    var countDish = $j(".count-dish"); // 显示单个商品购买数量
    var foodReturn = $j(".food-return"); // -
    var buyMoney = $j(".buy-money");
    var buyLength = foodBuy.length;
    var num = 0; //商品购买总量
    var totalMoney = 0; //商品购买总金额
    var flag = true; //重复点击购物车购物袋显示与不显示
    for (var i = 0; i < buyLength; i++) {
        (function(j) {
            //利用闭包形成封闭作用域，每个+号元素对应独立点击作用域
            var oClick = 0; //每个商品购买数量
            var lock = 1; //解决点击+号商品在购物车重复出现
            var html = '';
            // var count = 1; //记录点击次数
            var singleMoney = 0; //单个商品价格
            foodBuy.eq(j).click(function() {
                oClick++;
                num++;
                // - 数量 + 
                singleMoney = parseInt(buyMoney.eq(j).html().substr(1));
                totalMoney += singleMoney;
                countDish.eq(j).css("display", "block").html(oClick);
                foodReturn.eq(j).css("display", "block");

                //购物车图标背景色
                $j(".icon-wrap").css("backgroundColor", "#1ad2c0");
                $j(".icon-num").css("display", "block").html(num);

                //总金额
                $j(".footer-money p").css("display", "block").html("￥" + totalMoney);
                $j(".footer-money span").addClass("initial-span").html("免配送费");

                //商品结算
                if (totalMoney >= 10) {
                    $j(".footer-gap").css("background-color", "#FFC107");
                    $j(".footer-gap span").html("去结算");
                } else if (totalMoney < 10 && totalMoney > 0) {
                    $j(".footer-gap span").html("还差" + (10 - totalMoney) + "元");
                }

                //点击商品之后在购物袋中添加对应商品信息
                if (lock) {
                    html = '<div class="gap-content ectype' + j + '">' +
                        '<div class="food-name">' + $j(".food-name").eq(j).html() + '</div>' +
                        '<div class="food-num">' +
                        '<span class="buy-money single' + j + '">' + $j(".buy-money").eq(j).html() + '</span>' +
                        '<div class="buy-return">' +
                        '<i class="food-buy add' + j + '"></i>' +
                        '<span class="count-dish const' + j + '">1</span>' +
                        '<i class="food-return minus' + j + '"></i>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                    $j(".gap-head").after(html);
                    lock = 0;
                    //元素在onload事件之后添加，需手动添加事件
                    $j(".add" + j + "").click(function() {
                        num++;
                        oClick++;
                        totalMoney += singleMoney;
                        $j(".single" + j + "").html('￥' + singleMoney * oClick);
                        $j(".count-dish").eq(j).html(oClick);
                        $j(".const" + j + "").html(oClick);
                        $j(".footer-money p").css("display", "block").html("￥" + totalMoney);
                        $j(".icon-num").html(num);
                        if (totalMoney >= 10) {
                            $j(".footer-gap").css("background-color", "#FFC107");
                            $j(".footer-gap span").html("去结算");
                        } else if (totalMoney < 10 && totalMoney > 0) {
                            $j(".footer-gap span").html("还差" + (10 - totalMoney) + "元");
                        }

                    })
                    $j(".minus" + j + "").click(function() {
                        num--;
                        oClick--;
                        totalMoney -= singleMoney;
                        $j(".single" + j + "").html('￥' + singleMoney * oClick);
                        $j(".count-dish").eq(j).html(oClick);
                        $j(".const" + j + "").html(oClick);
                        $j(".footer-money p").css("display", "block").html("￥" + totalMoney);
                        $j(".icon-num").html(num);
                        if (!oClick) {
                            $j(".ectype" + j + "").remove();
                            show([countDish.eq(j), foodReturn.eq(j)], false)
                        }
                        if (totalMoney < 10 && totalMoney > 0) {
                            $j(".footer-gap span").html("还差" + (10 - totalMoney) + "元");
                            $j(".footer-gap").css("background-color", "#928686");
                        } else if (totalMoney === 0) {
                            show([$j(".shop-gap"), $j(".icon-num"), $j(".footer-money p")], false);
                            $j(".icon-wrap").css("backgroundColor", "#aaa");
                            $j(".footer-gap").css("background-color", "#928686");
                            $j(".footer-gap span").html("10元起送");
                            $j(".footer-money span").removeClass("initial-span").html("购物车空空入也~");
                        }
                    })

                }
                $j(".single" + j + "").html('￥' + singleMoney * oClick);
                $j(".const" + j + "").html(oClick);

                //alert只有点击确认 ， 点击清空购物车区域，直接清空一切
                $j(".gap-right").click(function() {
                        // alert("是否清空购物车内所有商品？");
                        num = 0;
                        totalMoney = 0;
                        flag = true;
                        oClick = 0;
                        lock = 1;
                        $j(".ectype" + j + "").remove();
                        show([$j(".food-return").eq(j), countDish.eq(j), $j(".shop-gap"), $j(".icon-num"), $j(".footer-money p")], false);
                        $j(".icon-wrap").css("backgroundColor", "#aaa");
                        $j(".footer-gap").css("background-color", "#928686");
                        $j(".footer-gap span").html("10元起送");
                        $j(".footer-money span").removeClass("initial-span").html("购物车空空入也~");
                    })
                    // 函数  参数 =》[]  chaunyuansu   shuzu  houjia  flag  判断是否显示

            });
            foodReturn.eq(j).click(function() {
                oClick--;
                num--;
                totalMoney -= parseInt(buyMoney.eq(j).html().substr(1));
                countDish.eq(j).html(oClick);
                $j(".icon-num").html(num);
                $j(".footer-money p").html("￥" + totalMoney);
                if (oClick === 0) {
                    show([$j(this), countDish.eq(j)], false)
                    $j(".icon-wrap").css("backgroundColor", "#aaa");
                }

                if (totalMoney < 10 && totalMoney > 0) {
                    $j(".footer-gap span").html("还差" + (10 - totalMoney) + "元");
                    $j(".footer-gap").css("background-color", "#928686");
                } else if (totalMoney === 0) {
                    show([$j(".shop-gap"), $j(".icon-num"), $j(".footer-money p")], false)
                    $j(".footer-gap").css("background-color", "#928686");
                    $j(".footer-gap span").html("10元起送");
                    $j(".footer-money span").removeClass("initial-span").html("购物车空空入也~");
                }
            })
        }(i))
    }
    //购物车点击购物袋显示与否
    $j(".footer-goods").click(function() {
        if (flag === true) {
            if (totalMoney > 0) {
                $j(".shop-gap").css("display", "block");
            }
        } else if (flag === false) {
            $j(".shop-gap").css("display", "none");
        }
        flag = !flag;
    })

    //阴影部分点击事件
    $j(".gap-shadow").click(function() {
        $j(".shop-gap").css("display", "none");
    })


}

//数组中保存需要操作的元素，_flag == true 显示
function show(arr, _flag) {
    var myArr = arr || [];
    if (_flag) {
        myArr.forEach(function(ele, index) {
            ele.css("display", "block");
        })
    } else {
        myArr.forEach(function(ele, index) {
            ele.css("display", "none");
        })
    }
}