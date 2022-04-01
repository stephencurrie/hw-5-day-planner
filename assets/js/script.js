var time = moment().format("dddd, MMM Do YYYY hh:mm A");
$("#current").text(time);

// Check what's in local storage and display on page (Surely there is a way to build a for loop and a function to build these dynamically)

if ("hour9" in localStorage) {
  text = localStorage.getItem("hour9");
  $("#hour9").children().eq(1).text(text);
}
if ("hour10" in localStorage) {
  text = localStorage.getItem("hour10");
  $("#hour10").children().eq(1).text(text);
}
if ("hour11" in localStorage) {
  text = localStorage.getItem("hour11");
  $("#hour11").children().eq(1).text(text);
}
if ("hour12" in localStorage) {
    text = localStorage.getItem("hour12");
    $("#hour12").children().eq(1).text(text);
} 
if ("hour1" in localStorage) {
    text = localStorage.getItem("hour1");
    $("#hour1").children().eq(1).text(text);
}
if ("hour2" in localStorage) {
    text = localStorage.getItem("hour2");
    $("#hour2").children().eq(1).text(text);
} 
if ("hour3" in localStorage) {
    text = localStorage.getItem("hour3");
    $("#hour3").children().eq(1).text(text);
} 
if ("hour4" in localStorage) {
    text = localStorage.getItem("hour3");
    $("#hour4").children().eq(1).text(text);
} 
if ("hour5" in localStorage) {
    text = localStorage.getItem("hour5");
    $("#hour5").children().eq(1).text(text);
}  
if ("hour6" in localStorage) {
    text = localStorage.getItem("hour6");
    $("#hour6").children().eq(1).text(text);
} 

// Found this code online which was very helpful to troubleshoot
// var i;

// for (i = 0; i < localStorage.length; i++) {
//   console.log(
//     localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]"
//   );
// }

// check time, if time, certain class.  Git all the times and put into an array.  check current time, loop through array.  if, then, set class

// js query to get data in the text area

$(document).ready(function () {
  //This function called when the button is clicked

  $(".saveBtn").click(function () {
    //This grabs the text in the editable div
    var txt = $(this).prev().text();

    //This grabs the hour in the row div
    var hour = $(this).parent().attr("id");

    // js query to write to local storage

    localStorage.setItem(hour, txt);
  });
});
