var currentDay = $("#currentDay")
var save = $(".saveBtn")
var time = $(".hour")




$(function () {
  save.click(function(){
    console.log($(this).siblings("textarea").val())
    localStorage.setItem($(this).parent().attr("id"), $(this).siblings("textarea").val())
  })
  time.each(function(){
    var now = dayjs().hour()
    var toCheck = parseInt($(this).parent().attr("id"))
    console.log($(this).parent().attr("id"))
    console.log(toCheck)
    if(now > toCheck){
      $(this).parent().addClass("past")
    } else if(now == toCheck){
      $(this).parent().addClass("present")
    } else if(now < toCheck) {
      $(this).parent().addClass("future")
    }
  })
  save.each(function(){
    $(this).siblings("textarea").text(localStorage.getItem($(this).parent().attr("id")))
  })
  currentDay.text(dayjs().format("dddd, MMM DD"))
});
