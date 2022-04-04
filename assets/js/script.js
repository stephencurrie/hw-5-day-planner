// Displays time on top of page

var time = moment().format("dddd, MMM Do YYYY hh:mm A");
$("#current").text(time);

// Check what's in local storage and display on page 

for (var i = 1; i < 17; i++) {
  if ("hour" + i in localStorage) {
    text = localStorage.getItem("hour" + i);
    $("#hour" + i)
      .children()
      .eq(1)
      .text(text);
  }
}

 //This function called when the button is clicked
$(document).ready(function () {
 
  $(".saveBtn").click(function () {
    //This grabs the text in the editable div
    var txt = $(this).prev().text();

    //This grabs the hour in the row div
    var hour = $(this).parent().attr("id");

    // js query to write to local storage

    localStorage.setItem(hour, txt);
  });
});

//Change textarea background color based on time
var checkTime = function () {
  // Shows time as an intiger
  var currentTime = parseInt(moment().format("H"));


  $(".text").each(function () {
    var iD = parseInt($(this).attr("id"));
    if (iD === currentTime) {
      $(this)
        .removeClass("timepast timepresent timefuture")
        .addClass("timepresent");
    } else {
      if (iD < currentTime) {
        $(this)
          .removeClass("timepast timepresent timefuture")
          .addClass("timepast");
      } else {
        $(this)
          .removeClass("timepast timepresent timefuture")
          .addClass("timefuture");
      }
    }
  });

  // checkTime every 5 minutes
};
setInterval(checkTime(), 1000 * 60 * 5);
