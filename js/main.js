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
})