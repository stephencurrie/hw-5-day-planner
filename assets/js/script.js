// Displays time on top of page

var time = moment().format("dddd, MMM Do YYYY hh:mm A");
$("#current").text(time);

// Check what's in local storage and display on page (Surely there is a way to build a for loop and a function to build these dynamically)

for (var i=1; i<17; i++) {

if ("hour" + i in localStorage) {
  text = localStorage.getItem("hour" + i);
  $("#hour" + i).children().eq(1).text(text);
}

 }
// if ("hour10" in localStorage) {
//   text = localStorage.getItem("hour10");
//   $("#hour10").children().eq(1).text(text);
// }
// if ("hour11" in localStorage) {
//   text = localStorage.getItem("hour11");
//   $("#hour11").children().eq(1).text(text);
// }
// if ("hour12" in localStorage) {
//   text = localStorage.getItem("hour12");
//   $("#hour12").children().eq(1).text(text);
// }
// if ("hour1" in localStorage) {
//   text = localStorage.getItem("hour1");
//   $("#hour1").children().eq(1).text(text);
// }
// if ("hour2" in localStorage) {
//   text = localStorage.getItem("hour2");
//   $("#hour2").children().eq(1).text(text);
// }
// if ("hour3" in localStorage) {
//   text = localStorage.getItem("hour3");
//   $("#hour3").children().eq(1).text(text);
// }
// if ("hour4" in localStorage) {
//   text = localStorage.getItem("hour4");
//   $("#hour4").children().eq(1).text(text);
// }
// if ("hour5" in localStorage) {
//   text = localStorage.getItem("hour5");
//   $("#hour5").children().eq(1).text(text);
// }
// if ("hour6" in localStorage) {
//   text = localStorage.getItem("hour6");
//   $("#hour6").children().eq(1).text(text);
// }

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

//Change textarea background color based on time
var checkTime = function () {
  // Shows time as an intiger
  var currentTime = parseInt(moment().format("H"));
  console.log(currentTime);

  //   function setBackground(){
  // $(document).ready(function(){
  // $(".text").each(function(){
  //     var iD = $(".text").attr("id");
  //     console.log(iD);
  //     if (iD === currentTime) {
  //  $(".text").removeClass("timepast timepresent timefuture");
  //  $(".text").addClass("timepresent");}
  //     });
  // });
  // }

  $(".text").each(function () {
    var iD = parseInt( $(this).attr("id"));
    if (iD === currentTime) {
      // alert("current")
      $(this)
        .removeClass("timepast timepresent timefuture")
        .addClass("timepresent");
    } else {
      if (iD < currentTime) {
        // alert("past")
        $(this)
          .removeClass("timepast timepresent timefuture")
          .addClass("timepast");
      } else {
        // alert("future")
        $(this)
          .removeClass("timepast timepresent timefuture")
          .addClass("timefuture");
      }
    }
  });

  // for (i = 0; i < 11; i++) {
  //   var iD = $(".text")[i].id;

  //   console.log(iD);
  // }
  // };

  // checkTime every 5 minutes
};
setInterval(checkTime(), 1000 * 60 * 5);
