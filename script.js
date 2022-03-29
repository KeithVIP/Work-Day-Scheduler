
var currentDay = moment().format("dddd, MMMM Do");

var element = document.getElementById("currentDay");
element.append(currentDay);
console.log

$(this).parent().attr("id")
$(this).siblings(".description").val()

$(".saveBtn").on("click", function() {
    localStorage.setItem($(this).parent().attr("id"), $(this).siblings(".description").val());
})

$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))


$(".time-block").each(function() {
    var currentHour = moment().hours();

    var blockHour = parseInt($(this).attr("id"));

    if (blockHour < currentHour) {
        $(this).addClass("past");

    } else if(blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");

    }  else {
        $(this).removeClass("past present");
        $(this).addClass("future");
    }
})
    
    