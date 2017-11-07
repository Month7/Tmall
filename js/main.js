// 显示和隐藏效果     
var color="";
function showProduct(cid){
    $("div.enum-content[cid="+cid+"]").css("background-color","white");
    $("div.enum-content a[cid="+cid+"]").css("color","lightskyblue");
    $("div.product[cid="+cid+"]").show();
    console.log("color:"+color);
    $("a.aColor[xid="+cid+"]").css("color",color);
}
function hideProduct(cid){
    $("div.enum-content[cid="+cid+"]").css("background-color","#e2e2e3");
    $("div.enum-content a[cid="+cid+"]").css("color","black");
    $("div.product[cid="+cid+"]").hide();
    $("a.aColor[xid="+cid+"]").css("color","black");
}
$("div.enum-content").mouseenter(function(){
    var cid=$(this).attr("cid");
    switch(cid){
        case "1": color="red";break;
        case "2": color="red";break;
        case "3": color="blue";break;
        case "4": color="blue";break;
        case "5": color="orange";break;
        case "6": color="yellowgreen";break;
        case "7": color="blueviolet";break;
        case "8": color="green";break;
        case "9": color="#FF0036";break;
        case "10":color="aqua";break;
        case "11":color="pink";break;
        case "12":color="#8ED6FF";break;
        case "13":color="#D1C9FA";break;
        case "14":color="blue";break;
        case "15":color="#FE0240";break;
        case "16":color="brown";break;
        case "17":color="blue";break;
    }
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
    var isclick=false;
    $(window).scroll(function(){
        if(!isclick){
        var _top=$(window).scrollTop();
        if(_top>700){
            $("div.scroll-banner").fadeIn(500);
        }
        else{
            $("div.scroll-banner").fadeOut();
        }
        if(_top>700&&_top<3700){
            $("div.floatled").fadeIn(1000);
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
            $("div.floatled").fadeOut();
        }
    }
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
var $radioCart=$("img.radio-check");
var $allCart=$("img.radios-check");
var $bottomBtn=$(".bottom-button,.title-button");
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
    $radioCart.each(function(){
        if("true"==$(this).attr("isselected")){
            isAny=true;
        }
        if(isAny){
            $bottomBtn.css("background-color","#C40000");
            $bottomBtn.removeAttr("disabled");
        }
        else{
            $bottomBtn.css("background-color","#AAAAAA");
            $bottomBtn.css("disabled","disabled");
        }
    })
}
function checkAll(){
    var isAll=true;
    $radioCart.each(function(){
        var isselected=$(this).attr("isselected");
        if("false"==isselected){
            isAll=false;
        }
    });
    if(isAll){
        $allCart.attr("src","site/cartSelected.png");
    }
    else{
        $allCart.attr("src","site/cartNotSelected.png");
    }
}
function cal(){
    var totalNumber=0;
    var sumPrice=0;
    $("img.radio-check[isselected='true']").each(function(){
        var oid=$(this).attr("oid");
        var price=$("span.nowPrice[oid="+oid+"]").text();
        var number=$("input[oid="+oid+"]").val();
        price=price.replace(/￥/,"");
        price=price*number;
        totalNumber+=new Number(number);
        sumPrice+=new Number(price);
    });
    $("span.bottom-price").html("￥"+sumPrice);
}
$radioCart.click(function(){
    var isselected=$(this).attr("isselected");
    if(isselected=="false"){
        $(this).attr("isselected","true");
        $(this).attr("src","site/cartSelected.png");
        $(this).parents("tr.cart-item").css("background","#FFF8E1");
    }
    else{
        $(this).attr("isselected","false");
        $(this).attr("src","site/cartNotSelected.png");
        $(this).parents("tr.cart-item").css("background","#fff");
    }
    isAny();
    checkAll();
    cal();
});
$allCart.click(function(){
    var isselected=$(this).attr("isselected");
    if("true"==isselected){
        $(this).attr("isselected","false");
        $(this).attr("src","site/cartNotSelected.png"); 
        $radioCart.attr("isselected","false");
        $radioCart.attr("src","site/cartNotSelected.png");
        $radioCart.parents("tr.cart-item").css("background","#fff");
    }
    else{
        $(this).attr("isselected","true");
        $(this).attr("src","site/cartSelected.png");
        $radioCart.attr("isselected","true");
        $radioCart.attr("src","site/cartSelected.png");
        $radioCart.parents("tr.cart-item").css("background","#FFF8E1");
    }
    isAny();
    cal();
});
$("a.increase").click(function(){
    var pid=$(this).attr("pid");
    var number=$(this).parent().find("input[oid="+pid+"]").val();
    number++;
    $("input[oid="+pid+"]").val(number);
    var calPrice=0;
    var nowPrice=0;
    nowPrice=$("span.nowPrice[oid="+pid+"]").text();
    nowPrice=nowPrice.replace(/￥/,"");
    nowPrice=new Number(nowPrice);
    calPrice=nowPrice*number;
    // calPrice=formatMoney(calPrice);
    $("span.calPrice[oid="+pid+"]").text("￥"+calPrice);
    cal();
});
$("a.decrease").click(function(){
    var pid=$(this).attr("pid");
    var number=$(this).parent().find("input[oid="+pid+"]").val();
    number--;
    $("input[oid="+pid+"]").val(number);
    var calPrice=0;
    var nowPrice=0;
    nowPrice=$("span.nowPrice[oid="+pid+"]").text();
    nowPrice=nowPrice.replace(/￥/,"");
    nowPrice=new Number(nowPrice);
    calPrice=nowPrice*number;
    // calPrice=formatMoney(calPrice);
    $("span.calPrice[oid="+pid+"]").text("￥"+calPrice);
    cal();
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
/*==================================留言板交互=============================================*/
$("img.leaveMessage-img").click(function(){
    $(this).hide();
    $("span.leaveMessage-text").show();
    $("div.sumMoney").css("height","100px");
})
    });
/*=================================浏览器兼容============================*/
function adjustStyle(width) { 
    width = parseInt(width); 
    if ((width < 1700)&&(width>=1400)) { 
        $("#size-stylesheet").attr("href", "css/style-md.css"); 
    } else if ((width >= 1701) && (width < 2000)) { 
        $("#size-stylesheet").attr("href", "css/style-lg.css"); 
    } else if((width>=1000)&&(width<1400)){
        $("#size-stylesheet").attr("href", "css/style-sm.css"); 
    } 
    else { 
       $("#css").attr("href", "<?php bloginfo('stylesheet_url'); ?>"); 
    } 
} 
$(function() { 
    adjustStyle($(this).width()); 
    $(window).resize(function() { 
        adjustStyle($(this).width()); 
    }); 
});
/*============================================猫耳朵交互========================================*/
$(function(){
    $("div.rightmenu span").mouseenter(function(){
        var left_=$(this).position().left;
        var width_=$(this).css("width");
        var top_=$(this).position().top;
        var left=parseInt(left_)+(parseInt(width_)/2);
        var top=parseInt(top_);
        $("img#catear").css("left",left);
        $("img#catear").css("top",top-20);
        $("img#catear").fadeIn(500);
    })
    $("div.rightmenu span").mouseleave(function(){
        $("img#catear").hide();
    });
});
/*==================================产品界面放大镜效果=======================================*/
$(function(){
    $.fn.fangDa = function(){
        var that = $(this);
        $imgNormal=that.find(".normal"); //正常图片容器
        $Img=$imgNormal.find("img");
        $Drag=that.find(".huaKuai");             //滑块容器
        $show=that.find(".fangDa");              //放大图片容器
        $showImg=$show.find("img");
        num=$show.width()/$Drag.width();
        $imgNormal.mousemove(function(e){
            $Drag.css("display","block");  
            $show.css("display","block");
            var iX=e.pageX-$(this).offset().left-$Drag.width()/2;
            var iY=e.pageY-$(this).offset().top-$Drag.height()/2;
            var MaxX=$imgNormal.width()-$Drag.width();
            var MaxY=$imgNormal.height()-$Drag.height();
            iX = iX > 0 ? iX : 0;  
            iX = iX < MaxX ? iX : MaxX;  
            iY = iY > 0 ? iY : 0;  
            iY = iY < MaxY ? iY : MaxY;    
            $showImg.css("width",num*$imgNormal.width());
            $showImg.css("height",num*$imgNormal.height());
            $Drag.css({left:iX+"px",top:iY+"px"});            
            $showImg.css({marginLeft:-num*iX+'px',marginTop:-num*iY+'px'});  
        });
        $imgNormal.mouseout(function(){  
            $Drag.css("display","none");  
            $show.css("display","none");  
        });  
    };
    $("#fangdajing").fangDa();  
});