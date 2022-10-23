/*
  @Authors @Colack @Varrience
   - Last updated by @Colack    (9/14/22)
   - Last updated by @Varrience (9/9/22)
  @About
   - Library for updating, receiving, and formating time values.
*/

// Format a new data
function formatDate() {
  var d = new Date();
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = days[d.getDay()];
  var hr = d.getHours();
  var min = d.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  var ampm = "am";
  if (hr > 12) {
    hr -= 12;
    ampm = "pm";
  }
  var date = d.getDate();
  var month = months[d.getMonth()];
  var year = d.getFullYear();
  return day + " " + hr + ":" + min + ampm + " " + date + " " + month + " " + year;
}

// not sure if mine is faster but some of the other stuff can be taken out if your not interested
function quickDate(millitary) {
    var d = Date();
    var hour = Number(d.substring(16, 18));
    var ampm = "";
    if (!millitary && hour > 12) {
        hour -= 12;
        ampm = "PM";
    }
    else {
        hour += 12;
        ampm = "AM";
    }
    var minute = d.substring(19, 21);
    var second = d.substring(22, 24);
    var day = d.substring(0, 3);
    var date = d.substring(8, 10);
    var month = d.substring(4, 7);
    var year = d.substring(11, 15);
    var zone = d.substring(28, 33);
    return ("".concat(day, " ").concat(hour, ":").concat(minute, " ").concat(ampm, " ").concat(date, " ").concat(month, " ").concat(year));
}
// Contributors
function contributors() {
    console.log("@Colack");
    console.log("@Varrience");
}
