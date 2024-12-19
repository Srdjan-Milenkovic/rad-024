var primary = "#3B83A1"
var secondary = "#4CC842"
var accent1 = "#CBF0FF"
var accent2 = "#1C5719"



function productmenu(){
$(".productmenu").css({"left":"0px","transition":"300ms"})
$("#usluge").css("color",secondary)
$("#usluge svg").css("transform","rotate(-180deg)")
$("#usluge svg path").css("fill",secondary)
if($(".productmenu").css("left") == "0px"){
    $(".productmenu").css({"left":"-210vw","transition":"900ms"})
    $("#usluge").css("color",accent1)
    $("#usluge svg").css("transform","rotate(-90deg)")
    $("#usluge svg path").css("fill", accent1)
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
$("#usluge").css("color",accent1)
$("#usluge svg").css("transform","rotate(-90deg)")
$("#usluge svg path").css("fill", accent1)

})

/*$("#usluge").hover(function(){
$("#usluge").css({"color":secondary,"transition":"300ms"})
$("#usluge svg path").css("fill",secondary)
$("#usluge svg").css("transform","rotate(-180deg)")
}
, function(){
   if($(".productmenu").css("left") =="0px"){
    $("#usluge").css({"color":secondary,"transition":"300ms"})
    $("#usluge svg path").css("fill",secondary)
    $("#usluge svg").css("transform","rotate(-180deg)")
   }
   
else{
    $("#usluge").css({"color":accent1,"transition":"300ms"})}
    $("#usluge svg path").css("fill",accent1)
    $("#usluge svg").css("transform","rotate(-90deg)")
}
)
*/
})