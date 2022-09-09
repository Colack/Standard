/*
  @Authors @Colack @Varrience
   - Last updated by @Colack    (8/31/22)
  @About
   - Library for updating, receiving, and formating time values.
*/

// Format and Return a new date
/* Date does this already
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
*/
// not sure if mine is faster but some of the other stuff can be taken out if your not interested
function formatDate(millitary?: boolean) {
    let d = Date();
    let hour = Number(d.substring(16, 18));
    let ampm = "";
    if (millitary && this.hour > 12) {
        hour -= 12;
        ampm = "PM";
    } else {
        hour += 12;
        ampm = "AM";
    }
    let minute = d.substring(19, 21)
    let second = d.substring(22, 24);
    let day = d.substring(0, 3);
    let date = d.substring(8, 10);
    let month = d.substring(4, 7);
    let year = d.substring(11, 15);
    let zone = d.substring(28,33)
    return (`${day} ${hour}:${minute} ${ampm} ${date} ${month} ${year}`)
}
// Contributors
function contributors() {
    console.log("@Colack");
}
