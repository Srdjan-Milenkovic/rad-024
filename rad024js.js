var primary = "#3B83A1"
var secondary = "#4CC842"
var accent1 = "#CBF0FF"
var accent2 = "#1C5719"



function productmenu(){
$(".productmenu").css({"left":"0px","transition":"300ms"})
$(".usluge").toggleClass("uslugeafter")
if($(".productmenu").css("left") == "0px"){
    $(".productmenu").css({"left":"-210vw","transition":"900ms"})

}
if($(".mobilemenu").css("right") == "0px"){
$(".mobilemenu").css({"right":"-350px","transition":"300ms"})
}
}

function openmenu(){   
$(".mobilemenu").css({"right":"0px","transition":"300ms"})
if($(".mobilemenu").css("right") == "0px"){
    $(".mobilemenu").css({"right":"-350px","transition":"300ms"})
    
}

}

$(window).resize(function(){
    if($("body").width() > 1060){
        $(".mobilemenu").css({"right":"-350px","transition":"300ms"})    
    }
}
)

$(document).ready(function(){
$(".mobileitem").click(function(){
$(".productmenu").css({"left":"-210vw","transition":"900ms"})
$(".usluge").toggleClass("uslugeafter")
})

})