var primary = "#3B83A1"
var secondary = "#4CC842"
var accent1 = "#CBF0FF"
var accent2 = "#1C5719"

function productmenu(){
$(".productmenu").css({"left":"0","transition":"300ms","margin-right":"1px"})
$("#usluge").css("color",secondary)
$("#usluge svg").css("transform","rotate(-180deg)")
$("#usluge svg path").css("fill",secondary)
if($(".productmenu").css("margin-right") == "1px"){
    $(".productmenu").css({"left":"-250px","transition":"300ms","margin-right":"0px"})
    $("#usluge").css("color",accent1)
    $("#usluge svg").css("transform","rotate(-90deg)")
    $("#usluge svg path").css("fill", accent1)

}
}
