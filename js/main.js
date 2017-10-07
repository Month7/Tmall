// 显示和隐藏效果     
function showProduct(cid){
    $("div.enum-content[cid="+cid+"]").css("background-color","white");
    $("div.enum-content a[cid="+cid+"]").css("color","lightskyblue");
    $("div.product[cid="+cid+"]").show();
}
function hideProduct(cid){
    $("div.enum-content[cid="+cid+"]").css("background-color","#e2e2e3");
    $("div.enum-content a[cid="+cid+"]").css("color","black");
    $("div.product[cid="+cid+"]").hide();
}
$("div.enum-content").mouseenter(function(){
    var cid=$(this).attr("cid");
    showProduct(cid);
})
$("div.product").mouseenter(function(){
    var cid=$(this).attr("cid");
    showProduct(cid);
})
$("div.product").mouseleave(function(){
    var cid=$(this).attr("cid");
    hideProduct(cid);
})
$("div.enum-content").mouseleave(function(){
    var cid=$(this).attr("cid");
    hideProduct(cid);
})
function addBorder(vid){
    $("div.product-item[vid="+vid+"]").addClass("borderRed");
}
function removeBorder(vid){
    $("div.product-item[vid="+vid+"]").removeClass("borderRed");
}
$("div.product-item").mouseenter(function(){
   var vid=$(this).attr("vid");
   addBorder(vid);
})
$("div.product-item").mouseleave(function(){
    var vid=$(this).attr("vid");
    removeBorder(vid);
})



// 价格区间交互
$("input.jsprice").keyup(function(){
    var num=$(this).val();
    if(num.length==0){
        $("div.product-content").show();
        return;
    }
    num=parseInt(num);
    if(isNaN(num)){
        num=1;
    }
    if(num<=0){
        num=1;
    }
    $(this).val(num);
    var begin=$("input.begin").val();
    var end=$("input.end").val();
    if(!isNaN(begin)&&!isNaN(end)){
        $("div.product-content").hide();
        $("div.product-content").each(function(){
            var price=$(this).attr("price");
            price=new Number(price);
            if((price<=end)&&(price>=begin)){
                $(this).show();
            }
        })
    }
});

/*=======================缩略图效果=======================*/
$("img.small").mouseenter(function(){
    var url=$(this).attr("bigUrl");
    $("img.large").attr("src",url);
});
$("img.large").load(function(){
        $("img.small").each(function(){
            var bigUrl = $(this).attr("bigUrl");
            img = new Image();
            img.src = bigUrl;
            img.onload = function(){
                $("div.img4load").append($(img));
            };
        });     
    });
// });
// function test(){
//     alert("!!");
// }
/*=============================图片和评价div切换==========================*/
$(function(){
    $("div.product-data-2").hide();
    $("a.select1").click(function(){
        $("div.product-data-1").show();
        $("div.product-data-2").hide();
    });
    $("a.select2").click(function(){
        $("div.product-data-1").hide();
        $("div.product-data-2").show();
    });
});
/*================================修改价格效果=================================*/
$("a.addNumber").click(function(){
    var num=$(".productInput").val();
    num=parseInt(num);
    num++;
    // alert(num);
    $(".productInput").val(num);
});
$("a.subNumber").click(function(){
    var num=$(".productInput").val();
    num=parseInt(num);
    num--;
    $(".productInput").val(num);
});
/*===================================浮动导航栏=================================*/
$(function(){
    $("div.floatled").hide();
    // $("div.product-main").mouseenter(function(){
    //     $("div.floatled").show();
    // });
    // $("div.product-mian").mouseleave(function(){
    //     $("div.floatled").hide();
    // });
    // $("div.main").mouseover(function(){
    //     $("div.floatled").hide();
    // });
    // $("div.carousel-background").mouseover(function(){
    //     $("div.floatled").hide();
    // });
    // $("div.footer").mouseover(function(){
    //     $("div.floatled").hide();
    // });
    // $("div.product-bar-1").mouseover(function(){
    //     $("div.floatled-part-1").addClass("active-red");
    // });
    // $("div.product-bar-1").mouseout(function(){
    //     $("div.floatled-part-1").removeClass("active-red");
    // });
    // $(".floatled ul li").addClass("active-red");
    var isclick=false;
    $(window).scroll(function(){
        if(!isclick){
        var _top=$(window).scrollTop();
        if(_top>700&&_top<3700){
            $("div.floatled").show();
            if(_top>700&&_top<1400){
                $("#1").addClass("active-red");
                $("#2").removeClass("active-blue");
                $("#3").removeClass("active-green");
                $("#4").css("background-color","#626262");
                $("#5").css("background-color","#626262");
            }
            if(_top>=1400&&_top<2100){
                $("#1").removeClass("active-red");
                $("#2").addClass("active-blue");
                $("#3").removeClass("active-green");
                $("#4").css("background-color","#626262");
                $("#5").css("background-color","#626262");
            }
            if(_top>=2100&&_top<2800){
                $("#2").removeClass("active-blue");
                $("#3").addClass("active-green");
                $("#4").css("background-color","#626262");
                $("#5").css("background-color","#626262");
            }
            if(_top>=2800&&_top<3500){
                $("#1").removeClass("active-red");
                $("#2").removeClass("active-blue");
                $("#3").removeClass("active-green");
                $("#4").css("background-color","#18C9A9");
                $("#5").css("background-color","#626262");
            }
            if(_top>=3500){
                $("#1").removeClass("active-red");
                $("#2").removeClass("active-blue");
                $("#3").removeClass("active-green");
                $("#4").css("background-color","#626262");
                $("#5").css("background-color","#EA5FBD");
            }
        }
        else{
            $("div.floatled").hide();
        }
    }
        // $(".floatled ul li").each(function(j){
        //     var _index=$(this).index();                      //当前下标
        //     var _height=$(this).offset().top;
        //     _height=_height-491;
        //     if(_height>_top){
        //         $(this).eq(_index).append(_height);
        //         return false;
        //     }
        // });
    });
    $("#1").click(function(){
        $("html,body").animate({scrollTop: "710px"}, 500);
    });
    $("#2").click(function(){
        $('html,body').animate({scrollTop: "1410px"}, 500);
    });    
    $("#3").click(function(){
        $("html,body").animate({scrollTop:"2110px"},500);
    });
    $("#4").click(function(){
        $("html,body").animate({scrollTop:"2810px"},500);
    });
    $("#5").click(function(){
        $("html,body").animate({scrollTop:"3510px"},500);
    });
    $("#6").click(function(){
        $("html,body").animate({scrollTop:"0px"},500);
    });
/*=========================================购物车交互================================*/

function formatMoney(num){                       //以千进制格式化金额
    num = num.toString().replace(/\$|\,/g,'');  
    if(isNaN(num))  
        num = "0";  
    sign = (num == (num = Math.abs(num)));  
    num = Math.floor(num*100+0.50000000001);  
    cents = num%100;  
    num = Math.floor(num/100).toString();  
    if(cents<10)  
    cents = "0" + cents;  
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)  
    num = num.substring(0,num.length-(4*i+3))+','+  
    num.substring(num.length-(4*i+3));  
    return (((sign)?'':'-') + num + '.' + cents);  
}

function isAny(){
    var isAny=false;
    $("img.radio-check").each(function(){
        if("isselected"==$(this).attr("isselected")){
            isAny=true;
        }
    })
    if(isAny){
        $("button.bottom-button").css("background-color","#C40000");
        $("button.bottom-button").removeAttr("disabled");
    }
    else{
        $("button.bottom-button").css("background-color","#AAAAAA");
        $("button.bottom-button").css("disabled","disabled");
    }
}
function checkIsAll(){
    var isAll=true;
    $("img.radio-check").each(function(){
        if("false"==$(this).attr("isselected")){
            isAll=false;
        }
    });
    if(isAll){
        $("img.radios-check").attr("isselect","isselect");
        $("img.radios-check").attr("src","site/cartSelected.png");
    }
    else{
        $("img.radios-check").attr("isselect","false");
        $("img.radios-check").attr("src","site/cartNotSelected.png");
    }
}
$("img.radio-check").click(function(){
    var isselected=$(this).attr("isselected");
    if(isselected=="isselected"){
        $(this).attr("isselected","false");
        $(this).attr("src","site/cartNotSelected.png");
        $(this).parents("tr.cart-item").css("background-color","#fff");
    }
    else{
        $(this).attr("isselected","isselected");
        $(this).attr("src","site/cartSelected.png");
        $(this).parents("tr.cart-item").css("background-color","#FFF8E1");
    }
    isAny();
    cal();
    checkIsAll();
})  
$("img.radios-check").click(function(){
    var isselect=$(this).attr("isselect");
    if(isselect=="isselect"){
        $(this).attr("isselect","false");
        $(this).attr("src","site/cartNotSelected.png");
        $("img.radio-check").each(function(){
            $(this).attr("isselected","false");
            $(this).attr("src","site/cartNotSelected.png");
            $(this).parents("tr.cart-item").css("background-color","#fff");
        })
    }
    else{
        $(this).attr("isselect","isselect");
        $(this).attr("src","site/cartSelected.png");
        $("img.radio-check").each(function(){
            $(this).attr("isselected","isselected");
            $(this).attr("src","site/cartSelected.png");
            $(this).parents("tr.cart-item").css("background-color","#FFF8E1");
        })
    }
    isAny();
    cal();
    checkIsAll();
})
function cal(){
    var sumPrice=0;
    var totalNumber=0;
    $("img.radio-check[isselected='isselected']").each(function(){
        var oid=$(this).attr("oid");
        var price=$(".nowPrice[oid="+oid+"]").text();
        var num=$("input.text[oid="+oid+"]").val();
        price=price.replace(/￥/g,"");
        price=price*num;
        sumPrice+=new Number(price);
        totalNumber+=new Number(num);
    });
    $("span.bottom-price,span.title-price").html("￥"+sumPrice);
    $("span.total").html(totalNumber);
}
$("a.increase").click(function(){
    var pid=$(this).attr("pid");
    var oid=$(".text[oid="+pid+"]").attr("oid");
    var num=$(".text[oid="+oid+"]").val();
    num++;
    $(".text[oid="+oid+"]").val(num);
    var oid_=$("img.radio-check[oid="+oid+"]").attr("oid");
    var num_=$("input.text[oid="+oid_+"]").val();
    var price_=$(".nowPrice[oid="+oid_+"]").text();
    price_=price_.replace(/￥/g,"");
    price_=price_*num_;
    var smallPrice=new Number(price_);
    smallPrice=formatMoney(smallPrice);
    $("span.calPrice[oid="+oid+"]").html("￥"+smallPrice);
    isAny();
    cal();
    checkIsAll();
});
$("a.decrease").click(function(){
    var pid=$(this).attr("pid");
    var oid=$(".text[oid="+pid+"]").attr("oid");
    var num=$(".text[oid="+oid+"]").val();
    num--;
    $(".text[oid="+oid+"]").val(num);
    var oid_=$("img.radio-check[oid="+oid+"]").attr("oid");
    var num_=$("input.text[oid="+oid_+"]").val();
    var price_=$(".nowPrice[oid="+oid_+"]").text();
    price_=price_.replace(/￥/g,"");
    price_=price_*num_;
    var smallPrice=new Number(price_);
    smallPrice=formatMoney(smallPrice);
    $("span.calPrice[oid="+oid+"]").html("￥"+smallPrice);
    isAny();
    cal();
    checkIsAll();
});
/*========================================我的订单页交互=========================================*/
$("a[selectType]").click(function(){
    var selectType=$(this).attr("selectType");
    if("all"==selectType){
        $("table[selectType]").show();
    }
    else{
        $("table[selectType]").hide();
        $("table[selectType="+selectType+"]").show();
    }
})
    });
    